import { useMemo } from "react";

import { ReadableNftItem } from "@/types/nft";

export const useNftTags = (nft: ReadableNftItem): string[] => {
  const { accessories = [] } = nft?.rawMetadata?.details || {};

  return useMemo(() => accessories.map((item: any) => item.displayName), [accessories]);
};
