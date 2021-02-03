/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { StateUtils } from "../StateUtils";

export class StateUtils__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(api3TokenAddress: string, overrides?: Overrides): Promise<StateUtils> {
    return super.deploy(
      api3TokenAddress,
      overrides || {}
    ) as Promise<StateUtils>;
  }
  getDeployTransaction(
    api3TokenAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(api3TokenAddress, overrides || {});
  }
  attach(address: string): StateUtils {
    return super.attach(address) as StateUtils;
  }
  connect(signer: Signer): StateUtils__factory {
    return super.connect(signer) as StateUtils__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StateUtils {
    return new Contract(address, _abi, signerOrProvider) as StateUtils;
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "claimReleaseReferenceBlocks",
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
    name: "claimReleases",
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
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getScheduledUnstake",
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
    ],
    name: "getUnstakeAmount",
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
    name: "locks",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "rewardAmounts",
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
    name: "rewardBlocks",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewardPaidForEpoch",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    name: "rewardReleases",
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
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "updateAndGetBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "fromBlock",
        type: "uint256",
      },
    ],
    name: "updateAndGetBalanceOfAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "targetBlock",
        type: "uint256",
      },
    ],
    name: "updateUserState",
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
        name: "lastStateUpdateTargetBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unstakeScheduledAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unstakeAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052622503f660809081525062093a8060a090815250620f42406008556305f5e100600955622625a0600a5563047868c0600b556a084595161401484a000000600c55620f4240600d55600a5460115534801561005e57600080fd5b506040516120063803806120068339818101604052602081101561008157600080fd5b8101908080519060200190929190505050600260405180604001604052804381526020016001815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600360405180604001604052804381526020016001815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060805160a051611e4e6101b8600039806109b152806109f95280611529525080610e2652806112d152806117965250611e4e6000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c806362bc7855116100de578063a09862d511610097578063decac4f511610071578063decac4f51461070f578063ee677b361461072d578063eebb19801461078f578063f4dadc61146107d85761018d565b8063a09862d514610601578063a87430ba14610659578063ca093047146106cd5761018d565b806362bc7855146104915780636e016893146104d357806370a082311461052b578063784b3c5d1461058357806392093b36146105a1578063981b24d0146105bf5761018d565b80632eebce2c1161014b57806341cb8c201161012557806341cb8c20146103ca5780634eb05c47146104135780634f322ae814610431578063587809381461044f5761018d565b80632eebce2c146102db5780633412a7641461032957806339a288bd146103815761018d565b806201e8621461019257806310664413146101f457806313f2dad01461021257806318160ddd1461025b57806320a0a0e9146102795780632dd5090c14610297575b600080fd5b6101de600480360360408110156101a857600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610821565b6040518082815260200191505060405180910390f35b6101fc6108e5565b6040518082815260200191505060405180910390f35b61023e6004803603602081101561022857600080fd5b81019080803590602001909291905050506108eb565b604051808381526020018281526020019250505060405180910390f35b61026361091c565b6040518082815260200191505060405180910390f35b6102816109af565b6040518082815260200191505060405180910390f35b6102c3600480360360208110156102ad57600080fd5b81019080803590602001909291905050506109d3565b60405180821515815260200191505060405180910390f35b610327600480360360408110156102f157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506109f3565b005b61036b6004803603602081101561033f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f51565b6040518082815260200191505060405180910390f35b6103ad6004803603602081101561039757600080fd5b8101908080359060200190929190505050610f9d565b604051808381526020018281526020019250505060405180910390f35b6103f6600480360360208110156103e057600080fd5b8101908080359060200190929190505050610fce565b604051808381526020018281526020019250505060405180910390f35b61041b610fff565b6040518082815260200191505060405180910390f35b610439611005565b6040518082815260200191505060405180910390f35b61047b6004803603602081101561046557600080fd5b810190808035906020019092919050505061100b565b6040518082815260200191505060405180910390f35b6104bd600480360360208110156104a757600080fd5b810190808035906020019092919050505061102c565b6040518082815260200191505060405180910390f35b610515600480360360208110156104e957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611044565b6040518082815260200191505060405180910390f35b61056d6004803603602081101561054157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611090565b6040518082815260200191505060405180910390f35b61058b611142565b6040518082815260200191505060405180910390f35b6105a9611148565b6040518082815260200191505060405180910390f35b6105eb600480360360208110156105d557600080fd5b810190808035906020019092919050505061114e565b6040518082815260200191505060405180910390f35b6106436004803603602081101561061757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506111cc565b6040518082815260200191505060405180910390f35b61069b6004803603602081101561066f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611281565b604051808681526020018581526020018481526020018381526020018281526020019550505050505060405180910390f35b6106f9600480360360208110156106e357600080fd5b81019080803590602001909291905050506112b7565b6040518082815260200191505060405180910390f35b6107176112cf565b6040518082815260200191505060405180910390f35b6107796004803603604081101561074357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506112f3565b6040518082815260200191505060405180910390f35b6107bb600480360360208110156107a557600080fd5b81019080803590602001909291905050506113bc565b604051808381526020018281526020019250505060405180910390f35b610804600480360360208110156107ee57600080fd5b81019080803590602001909291905050506113ed565b604051808381526020018281526020019250505060405180910390f35b6000806108d9600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101805480602002602001604051908101604052809291908181526020016000905b828210156108cf57838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610889565b505050508561141e565b90508091505092915050565b600d5481565b600281815481106108f857fe5b90600052602060002090600202016000915090508060000154908060010154905082565b60003073ffffffffffffffffffffffffffffffffffffffff1663981b24d0436040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561096f57600080fd5b505afa158015610983573d6000803e3d6000fd5b505050506040513d602081101561099957600080fd5b8101908080519060200190929190505050905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b600e6020528060005260406000206000915054906101000a900460ff1681565b600e60007f00000000000000000000000000000000000000000000000000000000000000004281610a2057fe5b04815260200190815260200160002060009054906101000a900460ff16610a4a57610a4961151d565b5b610a52611da7565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060c00160405290816000820154815260200160018201805480602002602001604051908101604052809291908181526020016000905b82821015610b1157838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610acb565b50505050815260200160028201548152602001600382015481526020016004820154815260200160058201548152505090506000610b5382602001514361141e565b90506000826040015190506000836060015190506000811415610b7557600190505b60606002805480602002602001604051908101604052809291908181526020016000905b82821015610bdf57838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610b99565b50505050905060006004805490501115610d3a5760606004805480602002602001604051908101604052809291908181526020016000905b82821015610c5d57838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610c17565b505050509050600081600081518110610c7257fe5b6020026020010151600001516001850310610c9c576001610c9683600187036118ae565b01610c9f565b60005b90505b815181108015610cc8575087828281518110610cba57fe5b602002602001015160000151105b15610d3757610cd5611ddd565b828281518110610ce157fe5b602002602001015190506000610cfb85836000015161141e565b90506000610d118a60200151846000015161141e565b9050818184602001510281610d2257fe5b04880197505050508080600101915050610ca2565b50505b60006005805490501115610eba5760606005805480602002602001604051908101604052809291908181526020016000905b82821015610db257838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610d6c565b505050509050600081600081518110610dc757fe5b6020026020010151600001516001850310610df1576001610deb83600187036118ae565b01610df4565b60005b90505b815181108015610e1d575087828281518110610e0f57fe5b602002602001015160000151105b15610eb75760007f0000000000000000000000000000000000000000000000000000000000000000838381518110610e5157fe5b6020026020010151600001510390506000610e6c858361141e565b90506000610e7e8a602001518461141e565b90508181868681518110610e8e57fe5b6020026020010151602001510281610ea257fe5b04880397505050508080600101915050610df7565b50505b82600160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018190555085600160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003018190555050505050505050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600501549050919050565b60058181548110610faa57fe5b90600052602060002090600202016000915090508060000154908060010154905082565b60038181548110610fdb57fe5b90600052602060002090600202016000915090508060000154908060010154905082565b600c5481565b60115481565b6007818154811061101857fe5b906000526020600020016000915090505481565b60106020528060005260406000206000915090505481565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401549050919050565b60003073ffffffffffffffffffffffffffffffffffffffff166201e86243846040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b15801561110057600080fd5b505afa158015611114573d6000803e3d6000fd5b505050506040513d602081101561112a57600080fd5b81019080805190602001909291905050509050919050565b600a5481565b600b5481565b60006111c56003805480602002602001604051908101604052809291908181526020016000905b828210156111bb57838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190611175565b505050508361141e565b9050919050565b60003073ffffffffffffffffffffffffffffffffffffffff1663ee677b3683436040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561123f57600080fd5b505af1158015611253573d6000803e3d6000fd5b505050506040513d602081101561126957600080fd5b81019080805190602001909291905050509050919050565b60016020528060005260406000206000915090508060000154908060020154908060030154908060040154908060050154905085565b600f6020528060005260406000206000915090505481565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006112ff83836109f3565b6113b4600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101805480602002602001604051908101604052809291908181526020016000905b828210156113aa57838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190611364565b505050508361141e565b905092915050565b600681815481106113c957fe5b90600052602060002090600202016000915090508060000154908060010154905082565b600481815481106113fa57fe5b90600052602060002090600202016000915090508060000154908060010154905082565b600080835114156114325760009050611517565b8260018451038151811061144257fe5b6020026020010151600001518210611477578260018451038151811061146457fe5b6020026020010151602001519050611517565b8260008151811061148457fe5b6020026020010151600001518210156114a05760009050611517565b600080600185510390505b818111156114fa5760006002600184840101816114c457fe5b049050848682815181106114d457fe5b602002602001015160000151116114ed578092506114f4565b6001810391505b506114ab565b84828151811061150657fe5b602002602001015160200151925050505b92915050565b611525611944565b60007f0000000000000000000000000000000000000000000000000000000000000000428161155057fe5b049050600060036001600380549050038154811061156a57fe5b906000526020600020906002020160010154905060006305f5e100603460115484028161159357fe5b048161159b57fe5b0490506001600e600085815260200190815260200160002060006101000a81548160ff02191690831515021790555043601060008581526020019081526020016000208190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bbb30c5d306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561166957600080fd5b505afa15801561167d573d6000803e3d6000fd5b505050506040513d602081101561169357600080fd5b81019080805190602001909291905050506116b0575050506118ac565b60008114156116c1575050506118ac565b80600f600085815260200190815260200160002081905550600360405180604001604052804381526020018385018152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550506004604051806040016040528043815260200183815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600560405180604001604052807f0000000000000000000000000000000000000000000000000000000000000000430181526020018381525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1930836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b15801561189057600080fd5b505af11580156118a4573d6000803e3d6000fd5b505050505050505b565b6000826001845103815181106118c057fe5b60200260200101516000015182106118de576001835103905061193e565b600080600185510390505b8181111561193857600060026001848401018161190257fe5b0490508486828151811061191257fe5b6020026020010151600001511161192b57809250611932565b6001810391505b506118e9565b81925050505b92915050565b600060036001600380549050038154811061195b57fe5b906000526020600020906002020160010154905080600c54101561198857600a5460118190555050611a7d565b6000600c5482106119ad576119a8600c5483611a7f90919063ffffffff16565b6119c3565b6119c282600c54611a7f90919063ffffffff16565b5b905060006119f0600c546119e260095485611ac990919063ffffffff16565b611b4f90919063ffffffff16565b90506000611a1d600854611a0f600d5485611ac990919063ffffffff16565b611b4f90919063ffffffff16565b9050611a5c600954611a4e611a3d60095485611b9990919063ffffffff16565b601154611ac990919063ffffffff16565b611b4f90919063ffffffff16565b601181905550600b546011541115611a7857600b546011819055505b505050505b565b6000611ac183836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611c21565b905092915050565b600080831415611adc5760009050611b49565b6000828402905082848281611aed57fe5b0414611b44576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611df86021913960400191505060405180910390fd5b809150505b92915050565b6000611b9183836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611ce1565b905092915050565b600080828401905083811015611c17576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6000838311158290611cce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611c93578082015181840152602081019050611c78565b50505050905090810190601f168015611cc05780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b60008083118290611d8d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611d52578082015181840152602081019050611d37565b50505050905090810190601f168015611d7f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581611d9957fe5b049050809150509392505050565b6040518060c001604052806000815260200160608152602001600081526020016000815260200160008152602001600081525090565b60405180604001604052806000815260200160008152509056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a26469706673582212204b65ce705db37014189611998544baf33a42fd10eacb3b0c283c8cdae3eab50164736f6c634300060c0033";
