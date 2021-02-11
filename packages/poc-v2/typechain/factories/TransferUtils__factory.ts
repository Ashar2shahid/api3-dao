/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TransferUtils } from "../TransferUtils";

export class TransferUtils__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    api3TokenAddress: string,
    overrides?: Overrides
  ): Promise<TransferUtils> {
    return super.deploy(
      api3TokenAddress,
      overrides || {}
    ) as Promise<TransferUtils>;
  }
  getDeployTransaction(
    api3TokenAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(api3TokenAddress, overrides || {});
  }
  attach(address: string): TransferUtils {
    return super.attach(address) as TransferUtils;
  }
  connect(signer: Signer): TransferUtils__factory {
    return super.connect(signer) as TransferUtils__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TransferUtils {
    return new Contract(address, _abi, signerOrProvider) as TransferUtils;
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
  "0x60a0604052622625a060055563047868c06006556a084595161401484a000000600755620f424060085562093a80600955600554600a553480156200004357600080fd5b50604051620022a2380380620022a2833981810160405260208110156200006957600080fd5b81019080805190602001909291905050508080600260405180604001604052804381526020016001815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600360405180604001604052804381526020016001815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200018661a8c0426200019660201b620014a01790919060201c565b60808181525050505050620002b3565b6000620001e083836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250620001e860201b60201c565b905092915050565b6000808311829062000298576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156200025c5780820151818401526020810190506200023f565b50505050905090810190601f1680156200028a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581620002a557fe5b049050809150509392505050565b608051611fc5620002dd600039806108fd52806109385280610eb752806119315250611fc56000f3fe608060405234801561001057600080fd5b50600436106101575760003560e01c8063784b3c5d116100c3578063b70e6be61161007c578063b70e6be6146105c3578063decac4f5146105e1578063e7460a52146105ff578063f301af421461061d578063f3fef3a31461066f578063f45346dc146106bd57610157565b8063784b3c5d146104655780638b0e9f3f1461048357806392093b36146104a1578063981b24d0146104bf578063a87430ba14610501578063b6ca95631461057557610157565b80632c708073116101155780632c708073146102a357806341cb8c20146103265780634eb05c471461036f5780634f322ae81461038d57806354897577146103ab57806370a082311461040d57610157565b806201e8621461015c57806310664413146101be57806313f2dad0146101dc57806318160ddd1461022557806320a0a0e914610243578063276e005814610261575b600080fd5b6101a86004803603604081101561017257600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061072b565b6040518082815260200191505060405180910390f35b6101c6610780565b6040518082815260200191505060405180910390f35b610208600480360360208110156101f257600080fd5b8101908080359060200190929190505050610786565b604051808381526020018281526020019250505060405180910390f35b61022d6107b7565b6040518082815260200191505060405180910390f35b61024b61084a565b6040518082815260200191505060405180910390f35b61028d6004803603602081101561027757600080fd5b8101908080359060200190929190505050610850565b6040518082815260200191505060405180910390f35b6102ab610864565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102eb5780820151818401526020810190506102d0565b50505050905090810190601f1680156103185780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103526004803603602081101561033c57600080fd5b810190808035906020019092919050505061089d565b604051808381526020018281526020019250505060405180910390f35b6103776108ce565b6040518082815260200191505060405180910390f35b6103956108d4565b6040518082815260200191505060405180910390f35b6103f7600480360360408110156103c157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108da565b6040518082815260200191505060405180910390f35b61044f6004803603602081101561042357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b94565b6040518082815260200191505060405180910390f35b61046d610c46565b6040518082815260200191505060405180910390f35b61048b610c4c565b6040518082815260200191505060405180910390f35b6104a9610cdf565b6040518082815260200191505060405180910390f35b6104eb600480360360208110156104d557600080fd5b8101908080359060200190929190505050610ce5565b6040518082815260200191505060405180910390f35b6105436004803603602081101561051757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610cf9565b604051808681526020018581526020018481526020018381526020018281526020019550505050505060405180910390f35b6105c16004803603604081101561058b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d2f565b005b6105cb610eb5565b6040518082815260200191505060405180910390f35b6105e9610ed9565b6040518082815260200191505060405180910390f35b610607610ede565b6040518082815260200191505060405180910390f35b6106496004803603602081101561063357600080fd5b8101908080359060200190929190505050610ee4565b604051808415158152602001838152602001828152602001935050505060405180910390f35b6106bb6004803603604081101561068557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610f1b565b005b610729600480360360608110156106d357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506112c7565b005b6000610778600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101846114ea565b905092915050565b60085481565b6002818154811061079357fe5b90600052602060002090600202016000915090508060000154908060010154905082565b60003073ffffffffffffffffffffffffffffffffffffffff1663981b24d0436040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561080a57600080fd5b505afa15801561081e573d6000803e3d6000fd5b505050506040513d602081101561083457600080fd5b8101908080519060200190929190505050905090565b61a8c081565b600061085d6003836114ea565b9050919050565b6040518060400160405280601f81526020017f5573657220737461746520626568696e642063757272656e742065706f63680081525081565b600381815481106108aa57fe5b90600052602060002090600202016000915090508060000154908060010154905082565b60075481565b600a5481565b6000806108f261a8c0426114a090919063ffffffff16565b9050600061092a60347f000000000000000000000000000000000000000000000000000000000000000061167c90919063ffffffff16565b905060008183101561095c577f0000000000000000000000000000000000000000000000000000000000000000610971565b61097060348461170490919063ffffffff16565b5b90506000600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000816006015490506000826002015490506000848460060154106109f2576109ed6001856006015461167c90919063ffffffff16565b6109f4565b845b90505b868111610a985760006004600083815260200190815260200160002090506000610a26600283600201546114ea565b90506000610a3b8760010184600201546114ea565b9050610a78610a6983610a5b84876001015461174e90919063ffffffff16565b6114a090919063ffffffff16565b8661167c90919063ffffffff16565b9450505050610a9160018261167c90919063ffffffff16565b90506109f7565b50848610610b8557600085846006015410610aca57610ac56001856006015461167c90919063ffffffff16565b610acc565b855b90505b868111610b8357600060046000610af060348561170490919063ffffffff16565b815260200190815260200160002090506000610b11600283600201546114ea565b90506000610b268760010184600201546114ea565b9050610b63610b5483610b4684876001015461174e90919063ffffffff16565b6114a090919063ffffffff16565b8661170490919063ffffffff16565b9450505050610b7c60018261167c90919063ffffffff16565b9050610acf565b505b80965050505050505092915050565b60003073ffffffffffffffffffffffffffffffffffffffff166201e86243846040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b158015610c0457600080fd5b505afa158015610c18573d6000803e3d6000fd5b505050506040513d6020811015610c2e57600080fd5b81019080805190602001909291905050509050919050565b60055481565b60003073ffffffffffffffffffffffffffffffffffffffff1663276e0058436040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b158015610c9f57600080fd5b505afa158015610cb3573d6000803e3d6000fd5b505050506040513d6020811015610cc957600080fd5b8101908080519060200190929190505050905090565b60065481565b6000610cf26002836114ea565b9050919050565b60016020528060005260406000206000915090508060000154908060020154908060030154908060040154908060060154905085565b60046000610d4861a8c0426114a090919063ffffffff16565b815260200190815260200160002060000160009054906101000a900460ff16610d7457610d736117d4565b5b60003073ffffffffffffffffffffffffffffffffffffffff16635489757784846040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b158015610de557600080fd5b505afa158015610df9573d6000803e3d6000fd5b505050506040513d6020811015610e0f57600080fd5b8101908080519060200190929190505050905080600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018190555081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060060181905550505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b603481565b60095481565b60046020528060005260406000206000915090508060000160009054906101000a900460ff16908060010154908060020154905083565b33610f3161a8c0426114a090919063ffffffff16565b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060060154146040518060400160405280601f81526020017f5573657220737461746520626568696e642063757272656e742065706f63680081525090611051576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611016578082015181840152602081019050610ffb565b50505050905090810190601f1680156110435780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50816110ea600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015461170490919063ffffffff16565b10156110f557600080fd5b61114a82600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015461170490919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84846040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561122157600080fd5b505af1158015611235573d6000803e3d6000fd5b505050506040513d602081101561124b57600080fd5b8101908080519060200190929190505050508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f2717ead6b9200dd235aad468c9809ea400fe33ac69b5bfaa6d3e90fc922b6398846040518082815260200191505060405180910390a3505050565b61131c82600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015461167c90919063ffffffff16565b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8430856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561141157600080fd5b505af1158015611425573d6000803e3d6000fd5b505050506040513d602081101561143b57600080fd5b8101908080519060200190929190505050508073ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c836040518082815260200191505060405180910390a2505050565b60006114e283836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611c3a565b905092915050565b600080838054905014156115015760009050611676565b8261151a6001858054905061170490919063ffffffff16565b8154811061152457fe5b906000526020600020906002020160000154821061157857826115556001858054905061170490919063ffffffff16565b8154811061155f57fe5b9060005260206000209060020201600101549050611676565b8260008154811061158557fe5b9060005260206000209060020201600001548210156115a75760009050611676565b6000806115c26001868054905061170490919063ffffffff16565b90505b8181111561165357600061160860026115fa60016115ec878761167c90919063ffffffff16565b61167c90919063ffffffff16565b6114a090919063ffffffff16565b90508486828154811061161757fe5b906000526020600020906002020160000154116116365780925061164d565b61164a60018261170490919063ffffffff16565b91505b506115c5565b84828154811061165f57fe5b906000526020600020906002020160010154925050505b92915050565b6000808284019050838110156116fa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600061174683836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611d00565b905092915050565b60008083141561176157600090506117ce565b600082840290508284828161177257fe5b04146117c9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611f6f6021913960400191505060405180910390fd5b809150505b92915050565b6117dc611dc0565b60006117e86003611f5b565b9050600061182a6305f5e10061181c603461180e600a548761174e90919063ffffffff16565b6114a090919063ffffffff16565b6114a090919063ffffffff16565b9050600061184361a8c0426114a090919063ffffffff16565b90506040518060600160405280600115158152602001838152602001438152506004600083815260200190815260200160002060008201518160000160006101000a81548160ff0219169083151502179055506020820151816001015560408201518160020155905050807fce8f0c0868b3497f8bb005e8ee9d6f967e32053f5290e2c1c3390e106b92cde483600a54604051808381526020018281526020019250505060405180910390a25b6004600061190860018461170490919063ffffffff16565b815260200190815260200160002060000160009054906101000a900460ff1615801561196757507f000000000000000000000000000000000000000000000000000000000000000061196460018361170490919063ffffffff16565b10155b15611a4457604051806060016040528060011515815260200183815260200143815250600460006119a260018561170490919063ffffffff16565b815260200190815260200160002060008201518160000160006101000a81548160ff0219169083151502179055506020820151816001015560408201518160020155905050807fce8f0c0868b3497f8bb005e8ee9d6f967e32053f5290e2c1c3390e106b92cde483600a54604051808381526020018281526020019250505060405180910390a2611a3d60018261170490919063ffffffff16565b90506118f0565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bbb30c5d306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611acb57600080fd5b505afa158015611adf573d6000803e3d6000fd5b505050506040513d6020811015611af557600080fd5b8101908080519060200190929190505050611b1257505050611c38565b6000821415611b2357505050611c38565b60036040518060400160405280438152602001611b49858761167c90919063ffffffff16565b81525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1930846040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b158015611c1c57600080fd5b505af1158015611c30573d6000803e3d6000fd5b505050505050505b565b60008083118290611ce6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611cab578082015181840152602081019050611c90565b50505050905090810190601f168015611cd85780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581611cf257fe5b049050809150509392505050565b6000838311158290611dad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611d72578082015181840152602081019050611d57565b50505050905090810190601f168015611d9f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b60006007541415611dd957600554600a81905550611f59565b6000611de56003611f5b565b905060006007548210611e0c57611e076007548361170490919063ffffffff16565b611e22565b611e218260075461170490919063ffffffff16565b5b90506000611e51600754611e436305f5e1008561174e90919063ffffffff16565b6114a090919063ffffffff16565b90506000611e7f620f4240611e716008548561174e90919063ffffffff16565b6114a090919063ffffffff16565b905060006007548510611ed257611ecd6305f5e100611ebf611eae856305f5e10061170490919063ffffffff16565b600a5461174e90919063ffffffff16565b6114a090919063ffffffff16565b611f14565b611f136305f5e100611f05611ef4856305f5e10061167c90919063ffffffff16565b600a5461174e90919063ffffffff16565b6114a090919063ffffffff16565b5b9050600554600a541015611f3057600554600a81905550611f53565b600654600a541115611f4a57600654600a81905550611f52565b80600a819055505b5b50505050505b565b6000611f6782436114ea565b905091905056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a26469706673582212205642a0180d8b4dacf139b853bae8b6b5fecc75196c38f9ab421195448048cb0d64736f6c634300060c0033";
