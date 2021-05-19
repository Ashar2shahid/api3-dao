//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "./TransferUtils.sol";
import "./interfaces/IStakeUtils.sol";

/// @title Contract that implements staking functionality
abstract contract StakeUtils is TransferUtils, IStakeUtils {
    /// @notice Called to stake tokens to receive pools in the share
    /// @param amount Amount of tokens to stake
    function stake(uint256 amount)
        public
        override
    {
        payReward();
        User storage user = users[msg.sender];
        require(user.unstaked >= amount, ERROR_VALUE);
        user.unstaked = user.unstaked - amount;
        uint256 totalSharesNow = totalShares();
        uint256 sharesToMint = totalSharesNow * amount / totalStake;
        uint256 userSharesNow = userShares(msg.sender);
        user.shares.push(Checkpoint({
            fromBlock: block.number,
            value: userSharesNow + sharesToMint
            }));
        uint256 totalSharesAfter = totalSharesNow + sharesToMint; 
        updateTotalShares(totalSharesAfter);
        totalStake = totalStake + amount;
        updateDelegatedVotingPower(msg.sender, sharesToMint, true);
        emit Staked(
            msg.sender,
            amount,
            totalSharesAfter
            );
    }

    /// @notice Convenience method to deposit and stake in a single transaction
    /// @dev Due to the `deposit()` interface, `userAddress` can only be the
    /// caller
    /// @param source Token transfer source
    /// @param amount Amount to be deposited and staked
    /// @param userAddress User that the tokens will be staked for
    function depositAndStake(
        address source,
        uint256 amount,
        address userAddress
        )
        external
        override
    {
        require(userAddress == msg.sender, ERROR_UNAUTHORIZED);
        deposit(source, amount, userAddress);
        stake(amount);
    }

    function scheduleUnstake(uint256 shares)
        external
        override
    {
        payReward();
        uint256 userSharesNow = userShares(msg.sender);
        require(
            userSharesNow >= shares,
            ERROR_VALUE
            );
        uint256 amount = shares * totalStake / totalShares();
        User storage user = users[msg.sender];
        require(user.unstakeScheduledFor == 0, ERROR_UNAUTHORIZED);
        user.unstakeScheduledFor = block.timestamp + unstakeWaitPeriod;
        user.unstakeAmount = amount;
        user.unstakeShares = shares;
        user.shares.push(Checkpoint({
            fromBlock: block.number,
            value: userSharesNow - shares
            }));
        updateDelegatedVotingPower(msg.sender, shares, false);
        emit ScheduledUnstake(
            msg.sender,
            shares,
            amount,
            user.unstakeScheduledFor
            );
    }

    /// @notice Called to execute a pre-scheduled unstake
    /// @param userAddress Address of the user whose scheduled unstaking will
    /// be executed
    /// @return Amount of tokens that are unstaked
    function unstake(address userAddress)
        public
        override
        returns(uint256)
    {
        payReward();
        User storage user = users[userAddress];
        require(user.unstakeScheduledFor != 0, ERROR_UNAUTHORIZED);
        require(user.unstakeScheduledFor < block.timestamp, ERROR_UNAUTHORIZED);

        uint256 totalShares = totalShares();
        uint256 unstakeAmountAtSchedulingTime = user.unstakeAmount;
        uint256 unstakeAmountByShares = user.unstakeShares * totalStake / totalShares;
        uint256 unstakeAmount = unstakeAmountAtSchedulingTime > unstakeAmountByShares
            ? unstakeAmountByShares
            : unstakeAmountAtSchedulingTime;
        unstakeAmount = unstakeAmount < totalStake ? unstakeAmount : totalStake - 1;
        user.unstaked = user.unstaked + unstakeAmount;

        updateTotalShares(totalShares - user.unstakeShares);
        totalStake = totalStake - unstakeAmount;

        user.unstakeShares = 0;
        user.unstakeAmount = 0;
        user.unstakeScheduledFor = 0;      
        emit Unstaked(
            userAddress,
            unstakeAmount
            );
        return unstakeAmount;
    }

    /// @notice Convenience method to execute an unstake and withdraw in a
    /// single transaction
    /// @dev Note that withdraw may revert because the user may have less than
    /// `unstaked` tokens that are withdrawable
    /// @param destination Token transfer destination
    function unstakeAndWithdraw(address destination)
        external
        override
    {
        uint256 unstaked = unstake(msg.sender);
        withdraw(destination, unstaked);
    }
}
