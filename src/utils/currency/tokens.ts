export const tokens = [
  "SENTINEL",
  "WETH",
  "DAI",
  "USDC",
  "USDT",
  "TUSD",
  "RENT", // reversed for rent tokens
  "ACS",
];

export const toPaymentToken = (paymentToken: number): string => tokens[paymentToken - 1] || "UNKNOWN";
