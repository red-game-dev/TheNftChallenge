import { ReadableNftItem } from "@/types/nft";

export const useNftTags = (nft: ReadableNftItem): string[] => {
  if (!nft || !nft.rawMetadata) {
    return [];
  }

  const { accessories = [] } = nft?.rawMetadata?.details || {};

  return accessories.map((item: any) => item.displayName);
};
