//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "./StakeUtils.sol";
import "./interfaces/IClaimUtils.sol";

/// @title Contract that implements the insurance claim payout functionality
abstract contract ClaimUtils is StakeUtils, IClaimUtils {


    string private constant ERROR_CLAIM_AMOUNT = "API3DAO.ClaimUtils: Total stake should be bigger then claim amount";
    string private constant ERROR_CLAIM_MANAGER = "API3DAO.ClaimUtils: Only claim manager is allowed to perform this action";

    /// @dev Reverts if the caller is not a claims manager
    modifier onlyClaimsManager() {
        require(claimsManagerStatus[msg.sender], ERROR_CLAIM_MANAGER);
        _;
    }

    /// @notice Called by a claims manager to pay out an insurance claim
    /// @dev The claims manager is a trusted contract that is allowed to
    /// withdraw as many tokens as it wants from the pool to pay out insurance
    /// claims. Any kind of limiting logic (e.g., maximum amount of tokens that
    /// can be withdrawn) is implemented at its end and is out of the scope of
    /// this contract.
    /// This will revert if the pool does not have enough funds.
    /// @param recipient Recipient of the claim
    /// @param amount Amount of tokens that will be paid out
    function payOutClaim(
        address recipient,
        uint256 amount
        )
        external
        override
        onlyClaimsManager()
    {
        payReward();
        // totalStake should not go lower than 1
        require(totalStake > amount, ERROR_CLAIM_AMOUNT);
        totalStake = totalStake - amount;
        api3Token.transfer(recipient, amount);
        emit PaidOutClaim(
            recipient,
            amount
            );
    }
}
