/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ClaimUtils } from "../ClaimUtils";

export class ClaimUtils__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(api3TokenAddress: string, overrides?: Overrides): Promise<ClaimUtils> {
    return super.deploy(
      api3TokenAddress,
      overrides || {}
    ) as Promise<ClaimUtils>;
  }
  getDeployTransaction(
    api3TokenAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(api3TokenAddress, overrides || {});
  }
  attach(address: string): ClaimUtils {
    return super.attach(address) as ClaimUtils;
  }
  connect(signer: Signer): ClaimUtils__factory {
    return super.connect(signer) as ClaimUtils__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ClaimUtils {
    return new Contract(address, _abi, signerOrProvider) as ClaimUtils;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "api3TokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "claimBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ClaimPayout",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newApr",
        type: "uint256",
      },
    ],
    name: "Epoch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "scheduledFor",
        type: "uint256",
      },
    ],
    name: "ScheduleUnstake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Stake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Unstake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [],
    name: "BEHIND_CURRENT_EPOCH",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "balanceOfAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "source",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "source",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "depositAndStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "genesisEpoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "targetEpoch",
        type: "uint256",
      },
    ],
    name: "getCurrentUserLock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "payoutAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "claimReferenceBlock",
        type: "uint256",
      },
    ],
    name: "payOutClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardEpochLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardVestingPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewards",
    outputs: [
      {
        internalType: "bool",
        name: "paid",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "atBlock",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "scheduleUnstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeTarget",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "totalShares",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalStake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
    ],
    name: "totalStakeAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "totalStaked",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
    ],
    name: "totalSupplyAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "unstakeAndWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unstakeWaitPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "updateCoeff",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "targetEpoch",
        type: "uint256",
      },
    ],
    name: "updateUserLock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "uint256",
        name: "unstaked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "locked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unstakeScheduledFor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unstakeAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastUpdateEpoch",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a0604052622625a060055563047868c06006556a084595161401484a000000600755620f424060085562093a80600955600554600a553480156200004357600080fd5b5060405162002fff38038062002fff833981810160405260208110156200006957600080fd5b810190808051906020019092919050505080808080600260405180604001604052804381526020016001815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600360405180604001604052804381526020016001815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200018861a8c0426200019a60201b620021f91790919060201c565b608081815250505050505050620002b7565b6000620001e483836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250620001ec60201b60201c565b905092915050565b600080831182906200029c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156200026057808201518184015260208101905062000243565b50505050905090810190601f1680156200028e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581620002a957fe5b049050809150509392505050565b608051612d1e620002e1600039806113b952806113f45280611c10528061269d5250612d1e6000f3fe608060405234801561001057600080fd5b50600436106101d95760003560e01c80635489757711610104578063a87430ba116100a2578063e7460a5211610071578063e7460a52146107db578063f301af42146107f9578063f3fef3a31461084b578063f45346dc14610899576101d9565b8063a87430ba146106dd578063b6ca956314610751578063b70e6be61461079f578063decac4f5146107bd576101d9565b80638b0e9f3f116100de5780638b0e9f3f1461063157806392093b361461064f578063981b24d01461066d578063a694fc3a146106af576101d9565b8063548975771461055957806370a08231146105bb578063784b3c5d14610613576101d9565b806318160ddd1161017c5780632def66201161014b5780632def6620146104ca57806341cb8c20146104d45780634eb05c471461051d5780634f322ae81461053b576101d9565b806318160ddd146103c957806320a0a0e9146103e7578063276e0058146104055780632c70807314610447576101d9565b806311281a19116101b857806311281a191461028c57806313f2dad0146102fa578063168a5a9314610343578063169ebe841461037b576101d9565b806201e862146101de5780631066441314610240578063106d08df1461025e575b600080fd5b61022a600480360360408110156101f457600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610907565b6040518082815260200191505060405180910390f35b61024861095c565b6040518082815260200191505060405180910390f35b61028a6004803603602081101561027457600080fd5b8101908080359060200190929190505050610962565b005b6102f8600480360360608110156102a257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d4f565b005b6103266004803603602081101561031057600080fd5b8101908080359060200190929190505050610d68565b604051808381526020018281526020019250505060405180910390f35b6103796004803603604081101561035957600080fd5b810190808035906020019092919080359060200190929190505050610d99565b005b6103c76004803603604081101561039157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610f4e565b005b6103d1610f64565b6040518082815260200191505060405180910390f35b6103ef610ff7565b6040518082815260200191505060405180910390f35b6104316004803603602081101561041b57600080fd5b8101908080359060200190929190505050610ffd565b6040518082815260200191505060405180910390f35b61044f611011565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561048f578082015181840152602081019050610474565b50505050905090810190601f1680156104bc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104d261104a565b005b610500600480360360208110156104ea57600080fd5b8101908080359060200190929190505050611359565b604051808381526020018281526020019250505060405180910390f35b61052561138a565b6040518082815260200191505060405180910390f35b610543611390565b6040518082815260200191505060405180910390f35b6105a56004803603604081101561056f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611396565b6040518082815260200191505060405180910390f35b6105fd600480360360208110156105d157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611650565b6040518082815260200191505060405180910390f35b61061b611702565b6040518082815260200191505060405180910390f35b610639611708565b6040518082815260200191505060405180910390f35b61065761179b565b6040518082815260200191505060405180910390f35b6106996004803603602081101561068357600080fd5b81019080803590602001909291905050506117a1565b6040518082815260200191505060405180910390f35b6106db600480360360208110156106c557600080fd5b81019080803590602001909291905050506117b5565b005b61071f600480360360208110156106f357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611a52565b604051808681526020018581526020018481526020018381526020018281526020019550505050505060405180910390f35b61079d6004803603604081101561076757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611a88565b005b6107a7611c0e565b6040518082815260200191505060405180910390f35b6107c5611c32565b6040518082815260200191505060405180910390f35b6107e3611c37565b6040518082815260200191505060405180910390f35b6108256004803603602081101561080f57600080fd5b8101908080359060200190929190505050611c3d565b604051808415158152602001838152602001828152602001935050505060405180910390f35b6108976004803603604081101561086157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611c74565b005b610905600480360360608110156108af57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612020565b005b6000610954600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010184612243565b905092915050565b60085481565b600061096e60036123d5565b9050600061097c60026123d5565b90506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060006109cf826001016123d5565b905060006109e861a8c0426121f990919063ffffffff16565b9050600083600501600083815260200190815260200160002060009054906101000a900460ff16158015610a3357506000600460008481526020019081526020016000206001015414155b15610c145760006004600084815260200190815260200160002090506000610a62866001018360020154612243565b90506000610a7560028460020154612243565b9050610aa081610a928486600101546123e890919063ffffffff16565b6121f990919063ffffffff16565b93506000610ac98a610abb878c6123e890919063ffffffff16565b6121f990919063ffffffff16565b905086811115610ad7578690505b610aea818861246e90919063ffffffff16565b9650610aff818a61246e90919063ffffffff16565b985087600101604051806040016040528043815260200189815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600260405180604001604052804381526020018b81525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505084886002015411610bc1576000610bd9565b610bd885896002015461246e90919063ffffffff16565b5b8860020181905550600188600501600088815260200190815260200160002060006101000a81548160ff021916908315150217905550505050505b6000610c3b86610c2d89876123e890919063ffffffff16565b6121f990919063ffffffff16565b9050610c5082826124b890919063ffffffff16565b881115610cc5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f496e73756666696369656e7420616d6f756e740000000000000000000000000081525060200191505060405180910390fd5b610cda600954426124b890919063ffffffff16565b85600301819055508785600401819055503373ffffffffffffffffffffffffffffffffffffffff167fbe333ba89af2daf0172a0b2d35c3b284379b82470eff81373dcb2dd696573b48898760030154604051808381526020018281526020019250505060405180910390a25050505050505050565b610d5a838383612020565b610d63826117b5565b505050565b60028181548110610d7557fe5b90600052602060002090600202016000915090508060000154908060010154905082565b6000610da560036123d5565b90506003604051806040016040528043815260200185840381525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33856040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610e9057600080fd5b505af1158015610ea4573d6000803e3d6000fd5b505050506040513d6020811015610eba57600080fd5b810190808051906020019092919050505050817f91205270c776037f79dd57bce302d68fe99878692303d27513c7d976f572cd1f846040518082815260200191505060405180910390a25060046000610f1e61a8c0426121f990919063ffffffff16565b815260200190815260200160002060000160009054906101000a900460ff16610f4a57610f49612540565b5b5050565b610f5661104a565b610f608282611c74565b5050565b60003073ffffffffffffffffffffffffffffffffffffffff1663981b24d0436040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b158015610fb757600080fd5b505afa158015610fcb573d6000803e3d6000fd5b505050506040513d6020811015610fe157600080fd5b8101908080519060200190929190505050905090565b61a8c081565b600061100a600383612243565b9050919050565b6040518060400160405280601f81526020017f5573657220737461746520626568696e642063757272656e742065706f63680081525081565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060030154421180156110b757506110b461a8c082600301546124b890919063ffffffff16565b42105b6110c057600080fd5b60008160040154905060006110d560026123d5565b905060006110e360036123d5565b905060006110f3856001016123d5565b9050600061111c8361110e87876123e890919063ffffffff16565b6121f990919063ffffffff16565b9050818111156111515781905061114e8461114085846123e890919063ffffffff16565b6121f990919063ffffffff16565b94505b6111688587600001546124b890919063ffffffff16565b8660000181905550856001016040518060400160405280438152602001611198848661246e90919063ffffffff16565b81525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505060026040518060400160405280438152602001611200848861246e90919063ffffffff16565b81525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505060036040518060400160405280438152602001611268888761246e90919063ffffffff16565b81525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505060008660030181905550600086600401819055503373ffffffffffffffffffffffffffffffffffffffff167f85082129d87b2fe11527cb1b3b7a520aeb5aa6913f88a3d8757fe40d1db02fdd866040518082815260200191505060405180910390a25050505050506004600061132b61a8c0426121f990919063ffffffff16565b815260200190815260200160002060000160009054906101000a900460ff1661135757611356612540565b5b565b6003818154811061136657fe5b90600052602060002090600202016000915090508060000154908060010154905082565b60075481565b600a5481565b6000806113ae61a8c0426121f990919063ffffffff16565b905060006113e660347f00000000000000000000000000000000000000000000000000000000000000006124b890919063ffffffff16565b9050600081831015611418577f000000000000000000000000000000000000000000000000000000000000000061142d565b61142c60348461246e90919063ffffffff16565b5b90506000600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000816006015490506000826002015490506000848460060154106114ae576114a9600185600601546124b890919063ffffffff16565b6114b0565b845b90505b86811161155457600060046000838152602001908152602001600020905060006114e260028360020154612243565b905060006114f7876001018460020154612243565b9050611534611525836115178487600101546123e890919063ffffffff16565b6121f990919063ffffffff16565b866124b890919063ffffffff16565b945050505061154d6001826124b890919063ffffffff16565b90506114b3565b508486106116415760008584600601541061158657611581600185600601546124b890919063ffffffff16565b611588565b855b90505b86811161163f576000600460006115ac60348561246e90919063ffffffff16565b8152602001908152602001600020905060006115cd60028360020154612243565b905060006115e2876001018460020154612243565b905061161f611610836116028487600101546123e890919063ffffffff16565b6121f990919063ffffffff16565b8661246e90919063ffffffff16565b94505050506116386001826124b890919063ffffffff16565b905061158b565b505b80965050505050505092915050565b60003073ffffffffffffffffffffffffffffffffffffffff166201e86243846040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b1580156116c057600080fd5b505afa1580156116d4573d6000803e3d6000fd5b505050506040513d60208110156116ea57600080fd5b81019080805190602001909291905050509050919050565b60055481565b60003073ffffffffffffffffffffffffffffffffffffffff1663276e0058436040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561175b57600080fd5b505afa15801561176f573d6000803e3d6000fd5b505050506040513d602081101561178557600080fd5b8101908080519060200190929190505050905090565b60065481565b60006117ae600283612243565b9050919050565b600460006117ce61a8c0426121f990919063ffffffff16565b815260200190815260200160002060000160009054906101000a900460ff166117fa576117f9612540565b5b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050818160000154101561184e57600080fd5b61186582826000015461246e90919063ffffffff16565b8160000181905550600061187960026123d5565b9050600061188760036123d5565b905060006118b0826118a287866123e890919063ffffffff16565b6121f990919063ffffffff16565b905060006118c0856001016123d5565b90508460010160405180604001604052804381526020016118ea85856124b890919063ffffffff16565b8152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550506002604051806040016040528043815260200161195285886124b890919063ffffffff16565b815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600360405180604001604052804381526020016119ba89876124b890919063ffffffff16565b8152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550503373ffffffffffffffffffffffffffffffffffffffff167febedb8b3c678666e7f36970bc8f57abf6d8fa2e828c0da91ea5b75bf68ed101a876040518082815260200191505060405180910390a2505050505050565b60016020528060005260406000206000915090508060000154908060020154908060030154908060040154908060060154905085565b60046000611aa161a8c0426121f990919063ffffffff16565b815260200190815260200160002060000160009054906101000a900460ff16611acd57611acc612540565b5b60003073ffffffffffffffffffffffffffffffffffffffff16635489757784846040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b158015611b3e57600080fd5b505afa158015611b52573d6000803e3d6000fd5b505050506040513d6020811015611b6857600080fd5b8101908080519060200190929190505050905080600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018190555081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060060181905550505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b603481565b60095481565b60046020528060005260406000206000915090508060000160009054906101000a900460ff16908060010154908060020154905083565b33611c8a61a8c0426121f990919063ffffffff16565b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060060154146040518060400160405280601f81526020017f5573657220737461746520626568696e642063757272656e742065706f63680081525090611daa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611d6f578082015181840152602081019050611d54565b50505050905090810190601f168015611d9c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5081611e43600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015461246e90919063ffffffff16565b1015611e4e57600080fd5b611ea382600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015461246e90919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84846040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015611f7a57600080fd5b505af1158015611f8e573d6000803e3d6000fd5b505050506040513d6020811015611fa457600080fd5b8101908080519060200190929190505050508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f2717ead6b9200dd235aad468c9809ea400fe33ac69b5bfaa6d3e90fc922b6398846040518082815260200191505060405180910390a3505050565b61207582600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001546124b890919063ffffffff16565b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8430856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561216a57600080fd5b505af115801561217e573d6000803e3d6000fd5b505050506040513d602081101561219457600080fd5b8101908080519060200190929190505050508073ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c836040518082815260200191505060405180910390a2505050565b600061223b83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506129a6565b905092915050565b6000808380549050141561225a57600090506123cf565b826122736001858054905061246e90919063ffffffff16565b8154811061227d57fe5b90600052602060002090600202016000015482106122d157826122ae6001858054905061246e90919063ffffffff16565b815481106122b857fe5b90600052602060002090600202016001015490506123cf565b826000815481106122de57fe5b90600052602060002090600202016000015482101561230057600090506123cf565b60008061231b6001868054905061246e90919063ffffffff16565b90505b818111156123ac5760006123616002612353600161234587876124b890919063ffffffff16565b6124b890919063ffffffff16565b6121f990919063ffffffff16565b90508486828154811061237057fe5b9060005260206000209060020201600001541161238f578092506123a6565b6123a360018261246e90919063ffffffff16565b91505b5061231e565b8482815481106123b857fe5b906000526020600020906002020160010154925050505b92915050565b60006123e18243612243565b9050919050565b6000808314156123fb5760009050612468565b600082840290508284828161240c57fe5b0414612463576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612cc86021913960400191505060405180910390fd5b809150505b92915050565b60006124b083836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612a6c565b905092915050565b600080828401905083811015612536576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b612548612b2c565b600061255460036123d5565b905060006125966305f5e100612588603461257a600a54876123e890919063ffffffff16565b6121f990919063ffffffff16565b6121f990919063ffffffff16565b905060006125af61a8c0426121f990919063ffffffff16565b90506040518060600160405280600115158152602001838152602001438152506004600083815260200190815260200160002060008201518160000160006101000a81548160ff0219169083151502179055506020820151816001015560408201518160020155905050807fce8f0c0868b3497f8bb005e8ee9d6f967e32053f5290e2c1c3390e106b92cde483600a54604051808381526020018281526020019250505060405180910390a25b6004600061267460018461246e90919063ffffffff16565b815260200190815260200160002060000160009054906101000a900460ff161580156126d357507f00000000000000000000000000000000000000000000000000000000000000006126d060018361246e90919063ffffffff16565b10155b156127b0576040518060600160405280600115158152602001838152602001438152506004600061270e60018561246e90919063ffffffff16565b815260200190815260200160002060008201518160000160006101000a81548160ff0219169083151502179055506020820151816001015560408201518160020155905050807fce8f0c0868b3497f8bb005e8ee9d6f967e32053f5290e2c1c3390e106b92cde483600a54604051808381526020018281526020019250505060405180910390a26127a960018261246e90919063ffffffff16565b905061265c565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bbb30c5d306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561283757600080fd5b505afa15801561284b573d6000803e3d6000fd5b505050506040513d602081101561286157600080fd5b810190808051906020019092919050505061287e575050506129a4565b600082141561288f575050506129a4565b600360405180604001604052804381526020016128b585876124b890919063ffffffff16565b81525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1930846040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b15801561298857600080fd5b505af115801561299c573d6000803e3d6000fd5b505050505050505b565b60008083118290612a52576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612a175780820151818401526020810190506129fc565b50505050905090810190601f168015612a445780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581612a5e57fe5b049050809150509392505050565b6000838311158290612b19576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612ade578082015181840152602081019050612ac3565b50505050905090810190601f168015612b0b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b60006007541415612b4557600554600a81905550612cc5565b6000612b5160036123d5565b905060006007548210612b7857612b736007548361246e90919063ffffffff16565b612b8e565b612b8d8260075461246e90919063ffffffff16565b5b90506000612bbd600754612baf6305f5e100856123e890919063ffffffff16565b6121f990919063ffffffff16565b90506000612beb620f4240612bdd600854856123e890919063ffffffff16565b6121f990919063ffffffff16565b905060006007548510612c3e57612c396305f5e100612c2b612c1a856305f5e10061246e90919063ffffffff16565b600a546123e890919063ffffffff16565b6121f990919063ffffffff16565b612c80565b612c7f6305f5e100612c71612c60856305f5e1006124b890919063ffffffff16565b600a546123e890919063ffffffff16565b6121f990919063ffffffff16565b5b9050600554600a541015612c9c57600554600a81905550612cbf565b600654600a541115612cb657600654600a81905550612cbe565b80600a819055505b5b50505050505b56fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a26469706673582212207a67265b36fe3cf99f65af47d9abb439e69f12a4417f49160285faa9f741143c64736f6c634300060c0033";
