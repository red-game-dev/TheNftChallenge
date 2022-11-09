import { newMockEvent } from "matchstick-as";

import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts";

import {
  AzraelCollateralClaimed,
  AzraelLendingStopped,
  AzraelLent,
  AzraelRented,
  AzraelReturned
} from "../../generated/Azrael/Azrael";

export function createAzraelCollateralClaimedEvent(
  lendingId: bigint,
  claimedAt: bigint
): AzraelCollateralClaimed {
  const AzraelCollateralClaimedEvent = changetype<AzraelCollateralClaimed>(
    newMockEvent()
  );

  AzraelCollateralClaimedEvent.parameters = [];

  AzraelCollateralClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "lendingId",
      ethereum.Value.fromUnsignedBigInt(lendingId)
    )
  );
  AzraelCollateralClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "claimedAt",
      ethereum.Value.fromUnsignedBigInt(claimedAt)
    )
  );

  return AzraelCollateralClaimedEvent;
}

export function createAzraelLendingStoppedEvent(
  lendingId: bigint,
  stoppedAt: bigint
): AzraelLendingStopped {
  const AzraelLendingStoppedEvent = changetype<AzraelLendingStopped>(
    newMockEvent()
  );

  AzraelLendingStoppedEvent.parameters = [];

  AzraelLendingStoppedEvent.parameters.push(
    new ethereum.EventParam(
      "lendingId",
      ethereum.Value.fromUnsignedBigInt(lendingId)
    )
  );
  AzraelLendingStoppedEvent.parameters.push(
    new ethereum.EventParam(
      "stoppedAt",
      ethereum.Value.fromUnsignedBigInt(stoppedAt)
    )
  );

  return AzraelLendingStoppedEvent;
}

export function createAzraelLentEvent(
  nftAddress: Address,
  tokenId: bigint,
  lentAmount: i32,
  lendingId: bigint,
  lenderAddress: Address,
  maxRentDuration: i32,
  dailyRentPrice: Bytes,
  nftPrice: Bytes,
  isERC721: boolean,
  paymentToken: i32
): AzraelLent {
  const AzraelLentEvent = changetype<AzraelLent>(newMockEvent());

  AzraelLentEvent.parameters = [];

  AzraelLentEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  );
  AzraelLentEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  );
  AzraelLentEvent.parameters.push(
    new ethereum.EventParam(
      "lentAmount",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(lentAmount))
    )
  );
  AzraelLentEvent.parameters.push(
    new ethereum.EventParam(
      "lendingId",
      ethereum.Value.fromUnsignedBigInt(lendingId)
    )
  );
  AzraelLentEvent.parameters.push(
    new ethereum.EventParam(
      "lenderAddress",
      ethereum.Value.fromAddress(lenderAddress)
    )
  );
  AzraelLentEvent.parameters.push(
    new ethereum.EventParam(
      "maxRentDuration",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(maxRentDuration))
    )
  );
  AzraelLentEvent.parameters.push(
    new ethereum.EventParam(
      "dailyRentPrice",
      ethereum.Value.fromFixedBytes(dailyRentPrice)
    )
  );
  AzraelLentEvent.parameters.push(
    new ethereum.EventParam("nftPrice", ethereum.Value.fromFixedBytes(nftPrice))
  );
  AzraelLentEvent.parameters.push(
    new ethereum.EventParam("isERC721", ethereum.Value.fromBoolean(isERC721))
  );
  AzraelLentEvent.parameters.push(
    new ethereum.EventParam(
      "paymentToken",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(paymentToken))
    )
  );

  return AzraelLentEvent;
}

export function createAzraelRentedEvent(
  lendingId: bigint,
  renterAddress: Address,
  rentDuration: i32,
  rentedAt: bigint
): AzraelRented {
  const AzraelRentedEvent = changetype<AzraelRented>(newMockEvent());

  AzraelRentedEvent.parameters = [];

  AzraelRentedEvent.parameters.push(
    new ethereum.EventParam(
      "lendingId",
      ethereum.Value.fromUnsignedBigInt(lendingId)
    )
  );
  AzraelRentedEvent.parameters.push(
    new ethereum.EventParam(
      "renterAddress",
      ethereum.Value.fromAddress(renterAddress)
    )
  );
  AzraelRentedEvent.parameters.push(
    new ethereum.EventParam(
      "rentDuration",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(rentDuration))
    )
  );
  AzraelRentedEvent.parameters.push(
    new ethereum.EventParam(
      "rentedAt",
      ethereum.Value.fromUnsignedBigInt(rentedAt)
    )
  );

  return AzraelRentedEvent;
}

export function createAzraelReturnedEvent(
  lendingId: bigint,
  returnedAt: bigint
): AzraelReturned {
  const AzraelReturnedEvent = changetype<AzraelReturned>(newMockEvent());

  AzraelReturnedEvent.parameters = [];

  AzraelReturnedEvent.parameters.push(
    new ethereum.EventParam(
      "lendingId",
      ethereum.Value.fromUnsignedBigInt(lendingId)
    )
  );
  AzraelReturnedEvent.parameters.push(
    new ethereum.EventParam(
      "returnedAt",
      ethereum.Value.fromUnsignedBigInt(returnedAt)
    )
  );

  return AzraelReturnedEvent;
}
