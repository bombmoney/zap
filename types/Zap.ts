/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ZapInterface extends utils.Interface {
  functions: {
    "estimateZapIn(address,address,uint256)": FunctionFragment;
    "estimateZapInToken(address,address,address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setFee(address,uint16,uint16)": FunctionFragment;
    "setTokenBridgeForRouter(address,address,address)": FunctionFragment;
    "setUseNativeRouter(address)": FunctionFragment;
    "swapToNative(address,uint256,address,address)": FunctionFragment;
    "swapToken(address,uint256,address,address,address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "useNativeRouter(address)": FunctionFragment;
    "withdraw(address)": FunctionFragment;
    "zapAcross(address,uint256,address,address)": FunctionFragment;
    "zapIn(address,address,address)": FunctionFragment;
    "zapInToken(address,uint256,address,address,address)": FunctionFragment;
    "zapOut(address,uint256,address,address)": FunctionFragment;
    "zapOutToken(address,uint256,address,address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "estimateZapIn",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "estimateZapInToken",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFee",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenBridgeForRouter",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setUseNativeRouter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "swapToNative",
    values: [string, BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "swapToken",
    values: [string, BigNumberish, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "useNativeRouter",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values: [string]): string;
  encodeFunctionData(
    functionFragment: "zapAcross",
    values: [string, BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "zapIn",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "zapInToken",
    values: [string, BigNumberish, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "zapOut",
    values: [string, BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "zapOutToken",
    values: [string, BigNumberish, string, string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "estimateZapIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimateZapInToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTokenBridgeForRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUseNativeRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapToNative",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swapToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "useNativeRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zapAcross", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zapIn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zapInToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zapOut", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "zapOutToken",
    data: BytesLike
  ): Result;

  events: {
    "FeeChange(address,uint16,uint16)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FeeChange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type FeeChangeEvent = TypedEvent<
  [string, number, number],
  { fee_to: string; rate: number; min: number }
>;

export type FeeChangeEventFilter = TypedEventFilter<FeeChangeEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Zap extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ZapInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    estimateZapIn(
      _LP: string,
      _router: string,
      _amt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    estimateZapInToken(
      _from: string,
      _to: string,
      _router: string,
      _amt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFee(
      addr: string,
      rate: BigNumberish,
      min: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTokenBridgeForRouter(
      token: string,
      router: string,
      bridgeToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUseNativeRouter(
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapToNative(
      _from: string,
      amount: BigNumberish,
      routerAddr: string,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapToken(
      _from: string,
      amount: BigNumberish,
      _to: string,
      routerAddr: string,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    useNativeRouter(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    withdraw(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    zapAcross(
      _from: string,
      amount: BigNumberish,
      _toRouter: string,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    zapIn(
      _to: string,
      routerAddr: string,
      _recipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    zapInToken(
      _from: string,
      amount: BigNumberish,
      _to: string,
      routerAddr: string,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    zapOut(
      _from: string,
      amount: BigNumberish,
      routerAddr: string,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    zapOutToken(
      _from: string,
      amount: BigNumberish,
      _to: string,
      routerAddr: string,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  estimateZapIn(
    _LP: string,
    _router: string,
    _amt: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  estimateZapInToken(
    _from: string,
    _to: string,
    _router: string,
    _amt: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFee(
    addr: string,
    rate: BigNumberish,
    min: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTokenBridgeForRouter(
    token: string,
    router: string,
    bridgeToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUseNativeRouter(
    router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapToNative(
    _from: string,
    amount: BigNumberish,
    routerAddr: string,
    _recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapToken(
    _from: string,
    amount: BigNumberish,
    _to: string,
    routerAddr: string,
    _recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  useNativeRouter(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  withdraw(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  zapAcross(
    _from: string,
    amount: BigNumberish,
    _toRouter: string,
    _recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  zapIn(
    _to: string,
    routerAddr: string,
    _recipient: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  zapInToken(
    _from: string,
    amount: BigNumberish,
    _to: string,
    routerAddr: string,
    _recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  zapOut(
    _from: string,
    amount: BigNumberish,
    routerAddr: string,
    _recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  zapOutToken(
    _from: string,
    amount: BigNumberish,
    _to: string,
    routerAddr: string,
    _recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    estimateZapIn(
      _LP: string,
      _router: string,
      _amt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    estimateZapInToken(
      _from: string,
      _to: string,
      _router: string,
      _amt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setFee(
      addr: string,
      rate: BigNumberish,
      min: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTokenBridgeForRouter(
      token: string,
      router: string,
      bridgeToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setUseNativeRouter(
      router: string,
      overrides?: CallOverrides
    ): Promise<void>;

    swapToNative(
      _from: string,
      amount: BigNumberish,
      routerAddr: string,
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    swapToken(
      _from: string,
      amount: BigNumberish,
      _to: string,
      routerAddr: string,
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    useNativeRouter(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    withdraw(token: string, overrides?: CallOverrides): Promise<void>;

    zapAcross(
      _from: string,
      amount: BigNumberish,
      _toRouter: string,
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    zapIn(
      _to: string,
      routerAddr: string,
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    zapInToken(
      _from: string,
      amount: BigNumberish,
      _to: string,
      routerAddr: string,
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    zapOut(
      _from: string,
      amount: BigNumberish,
      routerAddr: string,
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    zapOutToken(
      _from: string,
      amount: BigNumberish,
      _to: string,
      routerAddr: string,
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "FeeChange(address,uint16,uint16)"(
      fee_to?: null,
      rate?: null,
      min?: null
    ): FeeChangeEventFilter;
    FeeChange(fee_to?: null, rate?: null, min?: null): FeeChangeEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    estimateZapIn(
      _LP: string,
      _router: string,
      _amt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    estimateZapInToken(
      _from: string,
      _to: string,
      _router: string,
      _amt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFee(
      addr: string,
      rate: BigNumberish,
      min: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTokenBridgeForRouter(
      token: string,
      router: string,
      bridgeToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUseNativeRouter(
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapToNative(
      _from: string,
      amount: BigNumberish,
      routerAddr: string,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapToken(
      _from: string,
      amount: BigNumberish,
      _to: string,
      routerAddr: string,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    useNativeRouter(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    zapAcross(
      _from: string,
      amount: BigNumberish,
      _toRouter: string,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    zapIn(
      _to: string,
      routerAddr: string,
      _recipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    zapInToken(
      _from: string,
      amount: BigNumberish,
      _to: string,
      routerAddr: string,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    zapOut(
      _from: string,
      amount: BigNumberish,
      routerAddr: string,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    zapOutToken(
      _from: string,
      amount: BigNumberish,
      _to: string,
      routerAddr: string,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    estimateZapIn(
      _LP: string,
      _router: string,
      _amt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    estimateZapInToken(
      _from: string,
      _to: string,
      _router: string,
      _amt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFee(
      addr: string,
      rate: BigNumberish,
      min: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTokenBridgeForRouter(
      token: string,
      router: string,
      bridgeToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUseNativeRouter(
      router: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapToNative(
      _from: string,
      amount: BigNumberish,
      routerAddr: string,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapToken(
      _from: string,
      amount: BigNumberish,
      _to: string,
      routerAddr: string,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    useNativeRouter(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    zapAcross(
      _from: string,
      amount: BigNumberish,
      _toRouter: string,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    zapIn(
      _to: string,
      routerAddr: string,
      _recipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    zapInToken(
      _from: string,
      amount: BigNumberish,
      _to: string,
      routerAddr: string,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    zapOut(
      _from: string,
      amount: BigNumberish,
      routerAddr: string,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    zapOutToken(
      _from: string,
      amount: BigNumberish,
      _to: string,
      routerAddr: string,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
