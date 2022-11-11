import { Nft, NftTokenType as NftTokenTypeAclhemy } from "alchemy-sdk";

export const enum NftEntityType {
  LENDING = "lending",
  RENTING = "renting"
}

export const NftTokenType = NftTokenTypeAclhemy;

export interface Lending {
  __typename?: "Lending";
  id: string;
  type?: NftEntityType;
  collateralClaimed: boolean;
  cursor: number;
  dailyRentPrice: string;
  maxRentDuration: string;
  isERC721: boolean;
  lenderAddress: string;
  lentAmount: string;
  lentAt: string;
  nftAddress: string;
  nftPrice: string;
  paymentToken: string;
  tokenId: string;
}

export interface Renting {
  __typename?: "Renting";
  type?: NftEntityType;
  id: string;
  cursor: number;
  rentDuration: string;
  renterAddress: string;
  lending: Lending;
}

export interface AzrealNFTS {
  lendings: Lending[];
  rentings: Renting[];
}

export type ReadableNftItem = Omit<Lending, "nftPrice" | "dailyRentPrice"> & {
  nftPrice: number;
  dailyRentPrice: number;
  paymentTokenName: string;
  assetUrl: string;
} & Partial<Nft> & {
  renting?: Omit<Renting, "lending">;
};
