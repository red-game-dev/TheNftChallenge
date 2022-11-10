import { alchemy } from "@/setups/alchemy";
import { Lending, NftAssetType, ReadableNftItem, Renting } from "@/types/nft";
import { toPaymentToken } from "@/utils/currency/tokens";

export const getFullNftDetails = async (nft: Lending, renting?: Omit<Renting, "lending">): Promise<ReadableNftItem> => {
  const nftMetaData = await alchemy.nft.getNftMetadata(nft.nftAddress, nft.tokenId);
  const assetUrl: string = nftMetaData.media?.at(0)?.gateway || "";
  const assetType = nftMetaData.media?.at(0)?.format ? NftAssetType.IMAGE : NftAssetType.VIDEO;

  return {
    ...nft,
    assetUrl,
    assetType,
    nftPrice: parseInt(nft.nftPrice || "", 16),
    dailyRentPrice: parseInt(nft.dailyRentPrice || "", 16),
    paymentTokenName: toPaymentToken(nft.paymentToken || -1),
    ...nftMetaData,
    title: nftMetaData?.title || "Oh was not set",
    description: nftMetaData?.description || "Not specified",
    ...renting ? {
      renting,
    } : {}
  };
};
