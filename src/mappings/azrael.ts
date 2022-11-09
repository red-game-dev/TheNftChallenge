import {
  AzraelCollateralClaimed as AzraelCollateralClaimedEvent,
  AzraelLendingStopped as AzraelLendingStoppedEvent,
  AzraelLent as AzraelLentEvent,
  AzraelRented as AzraelRentedEvent,
  AzraelReturned as AzraelReturnedEvent
} from "../../generated/Azrael/Azrael";
import {
  AzraelCollateralClaimed,
  AzraelLendingStopped,
  AzraelLent,
  AzraelRented,
  AzraelReturned
} from "../../generated/schema";

export function handleAzraelCollateralClaimed(
  event: AzraelCollateralClaimedEvent
): void {
  const entity = new AzraelCollateralClaimed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  entity.lendingId = event.params.lendingId;
  entity.claimedAt = event.params.claimedAt;
  entity.save();
}

export function handleAzraelLendingStopped(
  event: AzraelLendingStoppedEvent
): void {
  const entity = new AzraelLendingStopped(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  entity.lendingId = event.params.lendingId;
  entity.stoppedAt = event.params.stoppedAt;
  entity.save();
}

export function handleAzraelLent(event: AzraelLentEvent): void {
  const entity = new AzraelLent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  entity.nftAddress = event.params.nftAddress;
  entity.tokenId = event.params.tokenId;
  entity.lentAmount = event.params.lentAmount;
  entity.lendingId = event.params.lendingId;
  entity.lenderAddress = event.params.lenderAddress;
  entity.maxRentDuration = event.params.maxRentDuration;
  entity.dailyRentPrice = event.params.dailyRentPrice;
  entity.nftPrice = event.params.nftPrice;
  entity.isERC721 = event.params.isERC721;
  entity.paymentToken = event.params.paymentToken;
  entity.save();
}

export function handleAzraelRented(event: AzraelRentedEvent): void {
  const entity = new AzraelRented(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  entity.lendingId = event.params.lendingId;
  entity.renterAddress = event.params.renterAddress;
  entity.rentDuration = event.params.rentDuration;
  entity.rentedAt = event.params.rentedAt;
  entity.save();
}

export function handleAzraelReturned(event: AzraelReturnedEvent): void {
  const entity = new AzraelReturned(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  entity.lendingId = event.params.lendingId;
  entity.returnedAt = event.params.returnedAt;
  entity.save();
}
