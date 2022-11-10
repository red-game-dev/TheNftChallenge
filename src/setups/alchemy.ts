import { Alchemy, Network } from "alchemy-sdk";

const settings = {
  apiKey: "PGlFAl5s4jM55g01JbENbAspQZtuNIVo",
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

export {
  alchemy
};
