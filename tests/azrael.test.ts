import { BigInt } from "@graphprotocol/graph-ts";
import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index";

import { handleAzraelCollateralClaimed } from "../src/mappings/azrael";
import { createAzraelCollateralClaimedEvent } from "./utils/azrael-utils";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    const lendingId = BigInt.fromI32(234);
    const claimedAt = BigInt.fromI32(234);
    const newAzraelCollateralClaimedEvent = createAzraelCollateralClaimedEvent(
      lendingId,
      claimedAt
    );

    handleAzraelCollateralClaimed(newAzraelCollateralClaimedEvent);
  });

  afterAll(() => {
    clearStore();
  });

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AzraelCollateralClaimed created and stored", () => {
    assert.entityCount("AzraelCollateralClaimed", 1);

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AzraelCollateralClaimed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "lendingId",
      "234"
    );
    assert.fieldEquals(
      "AzraelCollateralClaimed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "claimedAt",
      "234"
    );

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  });
});
