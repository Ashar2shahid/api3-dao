//SPDX-License-Identifier: MIT
pragma solidity 0.8.2;

import "./StateUtils.sol";
import "./interfaces/IGetterUtils.sol";

/// @title Contract that implements getters
abstract contract GetterUtils is StateUtils, IGetterUtils {
    /// @notice Called to get the voting power of a user at a specific block
    /// @dev This method is used to implement the MiniMe interface for the
    /// Api3Voting app
    /// @param userAddress User address
    /// @param _block Block number for which the query is being made for
    /// @return Voting power of the user at the block
    function balanceOfAt(
        address userAddress,
        uint256 _block
        )
        public
        view
        override
        returns(uint256)
    {
        // Users that delegate have no voting power
        if (userDelegateAt(userAddress, _block) != address(0))
        {
            return 0;
        }
        uint256 userSharesThen = userSharesAt(userAddress, _block);
        uint256 delegatedToUserThen = userReceivedDelegationAt(userAddress, _block);
        return userSharesThen + delegatedToUserThen;
    }

    /// @notice Called to get the current voting power of a user
    /// @dev This method is used to implement the MiniMe interface for the
    /// Api3Voting app
    /// @param userAddress User address
    /// @return Current voting power of the user
    function balanceOf(address userAddress)
        public
        view
        override
        returns(uint256)
    {
        return balanceOfAt(userAddress, block.number);
    }

    /// @notice Called to get the total voting power one block ago
    /// @dev This method is used to implement the MiniMe interface for the
    /// Api3Voting app
    /// @return Total voting power one block ago
    function totalSupplyOneBlockAgo()
        public
        view
        override
        returns(uint256)
    {
        return totalSharesOneBlockAgo();
    }

    /// @notice Called to get the current total voting power
    /// @dev This method is used to implement the MiniMe interface for the
    /// Aragon Voting app
    /// @return Current total voting power
    function totalSupply()
        public
        view
        override
        returns(uint256)
    {
        return totalShares();
    }

    /// @notice Called to get the pool shares of a user at a specific block
    /// @param userAddress User address
    /// @param _block Block number for which the query is being made for
    /// @return Pool shares of the user at the block
    function userSharesAt(
        address userAddress,
        uint256 _block
        )
        public
        view
        override
        returns(uint256)
    {
        return getValueAtWithBinarySearch(users[userAddress].shares, _block);
    }

    /// @notice Called to get the current pool shares of a user
    /// @param userAddress User address
    /// @return Current pool shares of the user
    function userShares(address userAddress)
        public
        view
        override
        returns(uint256)
    {
        return userSharesAt(userAddress, block.number);
    }

    /// @notice Called to get the current staked tokens of the user
    /// @param userAddress User address
    /// @return Current staked tokens of the user
    function userStake(address userAddress)
        public
        view
        override
        returns(uint256)
    {
        return userShares(userAddress) * totalStake / totalShares();
    }

    /// @notice Called to get the voting power delegated to a user at a
    /// specific block
    /// @dev Since the minimum `proposalVotingPowerThreshold` is 0.1%, if the
    /// the voting apps are Api3Voting.sol (which should be the case) there can
    /// be at most 100/0.1=1000 proposals made in the last `EPOCH_LENGTH`.
    /// `user.delegatedTo` checkpoints get overwritten if a new proposal was
    /// not made since the last update and `getValueAtWithBinarySearch()`
    /// limits the search to the last 1024 elements if possible, which means
    /// that while calling this method, if `_block` is within the current
    /// `EPOCH_LENGTH` (i.e., if the call is for an open vote), the method will
    /// have a deterministic upper boundary for the gas cost.
    /// @param userAddress User address
    /// @param _block Block number for which the query is being made for
    /// @return Voting power delegated to the user at the block
    function userReceivedDelegationAt(
        address userAddress,
        uint256 _block
        )
        public
        view
        override
        returns(uint256)
    {
        return getValueAtWithBinarySearch(
            users[userAddress].delegatedTo,
            _block
            );
    }

    /// @notice Called to get the current voting power delegated to a user
    /// @param userAddress User address
    /// @return Current voting power delegated to the user
    function userReceivedDelegation(address userAddress)
        public
        view
        override
        returns(uint256)
    {
        return userReceivedDelegationAt(userAddress, block.number);
    }

    /// @notice Called to get the delegate of the user at a specific block
    /// @param userAddress User address
    /// @param _block Block number
    /// @return Delegate of the user at the specific block
    function userDelegateAt(
        address userAddress,
        uint256 _block
        )
        public
        view
        override
        returns(address)
    {
        return getAddressAtWithBinarySearch(
            users[userAddress].delegates,
            _block
            );
    }

    /// @notice Called to get the current delegate of the user
    /// @param userAddress User address
    /// @return Current delegate of the user
    function userDelegate(address userAddress)
        public
        view
        override
        returns(address)
    {
        return userDelegateAt(userAddress, block.number);
    }

    /// @notice Called to get the current locked tokens of the user
    /// @param userAddress User address
    /// @return locked Current locked tokens of the user
    function getUserLocked(address userAddress)
        public
        view
        override
        returns(uint256 locked)
    {
        Checkpoint[] storage _userShares = users[userAddress].shares;
        uint256 currentEpoch = block.timestamp / EPOCH_LENGTH;
        uint256 oldestLockedEpoch = currentEpoch - REWARD_VESTING_PERIOD > genesisEpoch
            ? currentEpoch - REWARD_VESTING_PERIOD + 1
            : genesisEpoch + 1;

        if (_userShares.length == 0)
        {
            return 0;
        }
        uint256 indUserShares = _userShares.length - 1;
        for (
                uint256 indEpoch = currentEpoch;
                indEpoch >= oldestLockedEpoch;
                indEpoch--
            )
        {
            Reward storage lockedReward = epochIndexToReward[indEpoch];
            if (lockedReward.atBlock != 0)
            {
                for (; indUserShares >= 0; indUserShares--)
                {
                    Checkpoint storage userShare = _userShares[indUserShares];
                    if (userShare.fromBlock <= lockedReward.atBlock)
                    {
                        locked += lockedReward.amount * userShare.value / lockedReward.totalSharesThen;
                        break;
                    }
                }
            }
        }
    }

    /// @notice Called to get the value of a checkpoint array at a specific
    /// block using binary search
    /// @dev Adapted from 
    /// https://github.com/aragon/minime/blob/1d5251fc88eee5024ff318d95bc9f4c5de130430/contracts/MiniMeToken.sol#L431
    /// @param checkpoints Checkpoints array
    /// @param _block Block number for which the query is being made
    /// @return Value of the checkpoint array at the block
    function getValueAtWithBinarySearch(
        Checkpoint[] storage checkpoints,
        uint256 _block
        )
        internal
        view
        returns(uint256)
    {
        if (checkpoints.length == 0)
            return 0;

        // Shortcut for the actual value
        if (_block >= checkpoints[checkpoints.length -1].fromBlock)
            return checkpoints[checkpoints.length - 1].value;
        if (_block < checkpoints[0].fromBlock)
            return 0;

        // Limit the search to the last 1024 elements if the value being
        // searched falls within that window
        uint min;
        if (
            checkpoints.length > 1024
                && checkpoints[checkpoints.length - 1024].fromBlock < _block
            )
        {
            min = checkpoints.length - 1024;
        }
        else
        {
            min = 0;
        }

        // Binary search of the value in the array
        uint max = checkpoints.length - 1;
        while (max > min) {
            uint mid = (max + min + 1) / 2;
            if (checkpoints[mid].fromBlock <= _block) {
                min = mid;
            } else {
                max = mid - 1;
            }
        }
        return checkpoints[min].value;
    }

    /// @notice Called to get the value of an address-checkpoint array at a
    /// specific block using binary search
    /// @dev Adapted from 
    /// https://github.com/aragon/minime/blob/1d5251fc88eee5024ff318d95bc9f4c5de130430/contracts/MiniMeToken.sol#L431
    /// @param checkpoints Address-checkpoint array
    /// @param _block Block number for which the query is being made
    /// @return Value of the address-checkpoint array at the block
    function getAddressAtWithBinarySearch(
        AddressCheckpoint[] storage checkpoints,
        uint256 _block
        )
        private
        view
        returns(address)
    {
        if (checkpoints.length == 0)
            return address(0);

        // Shortcut for the actual value
        if (_block >= checkpoints[checkpoints.length -1].fromBlock)
            return checkpoints[checkpoints.length - 1]._address;
        if (_block < checkpoints[0].fromBlock)
            return address(0);

        // Limit the search to the last 1024 elements if the value being
        // searched falls within that window
        uint min;
        if (
            checkpoints.length > 1024
                && checkpoints[checkpoints.length - 1024].fromBlock < _block
            )
        {
            min = checkpoints.length - 1024;
        }
        else
        {
            min = 0;
        }

        // Binary search of the value in the array
        uint max = checkpoints.length - 1;
        while (max > min) {
            uint mid = (max + min + 1) / 2;
            if (checkpoints[mid].fromBlock <= _block) {
                min = mid;
            } else {
                max = mid - 1;
            }
        }
        return checkpoints[min]._address;
    }
}
