// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AzraelCollateralClaimed extends ethereum.Event {
  get params(): AzraelCollateralClaimed__Params {
    return new AzraelCollateralClaimed__Params(this);
  }
}

export class AzraelCollateralClaimed__Params {
  _event: AzraelCollateralClaimed;

  constructor(event: AzraelCollateralClaimed) {
    this._event = event;
  }

  get lendingId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get claimedAt(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class AzraelLendingStopped extends ethereum.Event {
  get params(): AzraelLendingStopped__Params {
    return new AzraelLendingStopped__Params(this);
  }
}

export class AzraelLendingStopped__Params {
  _event: AzraelLendingStopped;

  constructor(event: AzraelLendingStopped) {
    this._event = event;
  }

  get lendingId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get stoppedAt(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class AzraelLent extends ethereum.Event {
  get params(): AzraelLent__Params {
    return new AzraelLent__Params(this);
  }
}

export class AzraelLent__Params {
  _event: AzraelLent;

  constructor(event: AzraelLent) {
    this._event = event;
  }

  get nftAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get lentAmount(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get lendingId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get lenderAddress(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get maxRentDuration(): i32 {
    return this._event.parameters[5].value.toI32();
  }

  get dailyRentPrice(): Bytes {
    return this._event.parameters[6].value.toBytes();
  }

  get nftPrice(): Bytes {
    return this._event.parameters[7].value.toBytes();
  }

  get isERC721(): boolean {
    return this._event.parameters[8].value.toBoolean();
  }

  get paymentToken(): i32 {
    return this._event.parameters[9].value.toI32();
  }
}

export class AzraelRented extends ethereum.Event {
  get params(): AzraelRented__Params {
    return new AzraelRented__Params(this);
  }
}

export class AzraelRented__Params {
  _event: AzraelRented;

  constructor(event: AzraelRented) {
    this._event = event;
  }

  get lendingId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get renterAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get rentDuration(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get rentedAt(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class AzraelReturned extends ethereum.Event {
  get params(): AzraelReturned__Params {
    return new AzraelReturned__Params(this);
  }
}

export class AzraelReturned__Params {
  _event: AzraelReturned;

  constructor(event: AzraelReturned) {
    this._event = event;
  }

  get lendingId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get returnedAt(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Azrael extends ethereum.SmartContract {
  static bind(address: Address): Azrael {
    return new Azrael("Azrael", address);
  }

  onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  rentFee(): BigInt {
    let result = super.call("rentFee", "rentFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_rentFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("rentFee", "rentFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _resolver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _beneficiary(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _admin(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ClaimCollateralCall extends ethereum.Call {
  get inputs(): ClaimCollateralCall__Inputs {
    return new ClaimCollateralCall__Inputs(this);
  }

  get outputs(): ClaimCollateralCall__Outputs {
    return new ClaimCollateralCall__Outputs(this);
  }
}

export class ClaimCollateralCall__Inputs {
  _call: ClaimCollateralCall;

  constructor(call: ClaimCollateralCall) {
    this._call = call;
  }

  get _nfts(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _tokenIds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _lendingIds(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class ClaimCollateralCall__Outputs {
  _call: ClaimCollateralCall;

  constructor(call: ClaimCollateralCall) {
    this._call = call;
  }
}

export class LendCall extends ethereum.Call {
  get inputs(): LendCall__Inputs {
    return new LendCall__Inputs(this);
  }

  get outputs(): LendCall__Outputs {
    return new LendCall__Outputs(this);
  }
}

export class LendCall__Inputs {
  _call: LendCall;

  constructor(call: LendCall) {
    this._call = call;
  }

  get _nfts(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _tokenIds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _lendAmounts(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get _maxRentDurations(): Array<i32> {
    return this._call.inputValues[3].value.toI32Array();
  }

  get _dailyRentPrices(): Array<Bytes> {
    return this._call.inputValues[4].value.toBytesArray();
  }

  get _nftPrices(): Array<Bytes> {
    return this._call.inputValues[5].value.toBytesArray();
  }

  get _paymentTokens(): Array<i32> {
    return this._call.inputValues[6].value.toI32Array();
  }
}

export class LendCall__Outputs {
  _call: LendCall;

  constructor(call: LendCall) {
    this._call = call;
  }
}

export class OnERC1155BatchReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155BatchReceivedCall__Inputs {
    return new OnERC1155BatchReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155BatchReceivedCall__Outputs {
    return new OnERC1155BatchReceivedCall__Outputs(this);
  }
}

export class OnERC1155BatchReceivedCall__Inputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get value3(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155BatchReceivedCall__Outputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OnERC1155ReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155ReceivedCall__Inputs {
    return new OnERC1155ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155ReceivedCall__Outputs {
    return new OnERC1155ReceivedCall__Outputs(this);
  }
}

export class OnERC1155ReceivedCall__Inputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155ReceivedCall__Outputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OnERC721ReceivedCall extends ethereum.Call {
  get inputs(): OnERC721ReceivedCall__Inputs {
    return new OnERC721ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC721ReceivedCall__Outputs {
    return new OnERC721ReceivedCall__Outputs(this);
  }
}

export class OnERC721ReceivedCall__Inputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class OnERC721ReceivedCall__Outputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class RentCall extends ethereum.Call {
  get inputs(): RentCall__Inputs {
    return new RentCall__Inputs(this);
  }

  get outputs(): RentCall__Outputs {
    return new RentCall__Outputs(this);
  }
}

export class RentCall__Inputs {
  _call: RentCall;

  constructor(call: RentCall) {
    this._call = call;
  }

  get _nfts(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _tokenIds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _lendingIds(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get _rentDurations(): Array<i32> {
    return this._call.inputValues[3].value.toI32Array();
  }
}

export class RentCall__Outputs {
  _call: RentCall;

  constructor(call: RentCall) {
    this._call = call;
  }
}

export class ReturnItCall extends ethereum.Call {
  get inputs(): ReturnItCall__Inputs {
    return new ReturnItCall__Inputs(this);
  }

  get outputs(): ReturnItCall__Outputs {
    return new ReturnItCall__Outputs(this);
  }
}

export class ReturnItCall__Inputs {
  _call: ReturnItCall;

  constructor(call: ReturnItCall) {
    this._call = call;
  }

  get _nfts(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _tokenIds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _lendingIds(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class ReturnItCall__Outputs {
  _call: ReturnItCall;

  constructor(call: ReturnItCall) {
    this._call = call;
  }
}

export class SetBeneficiaryCall extends ethereum.Call {
  get inputs(): SetBeneficiaryCall__Inputs {
    return new SetBeneficiaryCall__Inputs(this);
  }

  get outputs(): SetBeneficiaryCall__Outputs {
    return new SetBeneficiaryCall__Outputs(this);
  }
}

export class SetBeneficiaryCall__Inputs {
  _call: SetBeneficiaryCall;

  constructor(call: SetBeneficiaryCall) {
    this._call = call;
  }

  get _newBeneficiary(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetBeneficiaryCall__Outputs {
  _call: SetBeneficiaryCall;

  constructor(call: SetBeneficiaryCall) {
    this._call = call;
  }
}

export class SetPausedCall extends ethereum.Call {
  get inputs(): SetPausedCall__Inputs {
    return new SetPausedCall__Inputs(this);
  }

  get outputs(): SetPausedCall__Outputs {
    return new SetPausedCall__Outputs(this);
  }
}

export class SetPausedCall__Inputs {
  _call: SetPausedCall;

  constructor(call: SetPausedCall) {
    this._call = call;
  }

  get _paused(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetPausedCall__Outputs {
  _call: SetPausedCall;

  constructor(call: SetPausedCall) {
    this._call = call;
  }
}

export class SetRentFeeCall extends ethereum.Call {
  get inputs(): SetRentFeeCall__Inputs {
    return new SetRentFeeCall__Inputs(this);
  }

  get outputs(): SetRentFeeCall__Outputs {
    return new SetRentFeeCall__Outputs(this);
  }
}

export class SetRentFeeCall__Inputs {
  _call: SetRentFeeCall;

  constructor(call: SetRentFeeCall) {
    this._call = call;
  }

  get _rentFee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetRentFeeCall__Outputs {
  _call: SetRentFeeCall;

  constructor(call: SetRentFeeCall) {
    this._call = call;
  }
}

export class StopLendingCall extends ethereum.Call {
  get inputs(): StopLendingCall__Inputs {
    return new StopLendingCall__Inputs(this);
  }

  get outputs(): StopLendingCall__Outputs {
    return new StopLendingCall__Outputs(this);
  }
}

export class StopLendingCall__Inputs {
  _call: StopLendingCall;

  constructor(call: StopLendingCall) {
    this._call = call;
  }

  get _nfts(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _tokenIds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _lendingIds(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class StopLendingCall__Outputs {
  _call: StopLendingCall;

  constructor(call: StopLendingCall) {
    this._call = call;
  }
}
