import { ReadableNftItem } from "@/types/nft";

interface NftAttribute {
  title: string;
  description?: string;
}

interface UseNftAttributesResponse {
  contract: NftAttribute[];
  general: NftAttribute[];
}

export const useNftAttributes = (nft: ReadableNftItem): UseNftAttributesResponse => {
  if (!nft) {
    return {
      contract: [],
      general: [],
    } as UseNftAttributesResponse;
  }

  return {
    contract: [
      {
        title: "Token Name",
        description: nft.contract?.name || "--",
      },
      {
        title: "Symbol",
        description: nft.contract?.symbol || "--",
      },,
      {
        title: "Total Supply",
        description: nft.contract?.totalSupply || "--",
      }
    ],
    general: [
      {
        title: "Max Rent Duration",
        description: `${nft.maxRentDuration || "--"} Days`,
      },
      {
        title: "Token Type",
        description: `${nft.tokenType || "--"}`,
      },
      {
        title: "Lent Amount",
        description: `${nft.lentAmount}`,
      },
    ]
  } as UseNftAttributesResponse;
};
