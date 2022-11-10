/* eslint-disable no-underscore-dangle */
import { useQuery } from "@tanstack/react-query";

import { getAzrealRawNfts } from "@/api/getAzrealRawNfts";
import { AzrealNFTS, Lending, ReadableNftItem, Renting, NftEntityType } from "@/types/nft";
import { QueryData } from "@/types/query";
import { getFullNftDetails } from "@/utils/nft/nftDetails";

interface UseGetNftsHookProps {
  nftAddress?: string;
  tokenId?: string;
  limit?: number;
}

export const useGetNfts = ({ nftAddress, tokenId, limit }: UseGetNftsHookProps) => {
  const { data: nftsData = {} as QueryData<AzrealNFTS>, error, isLoading } =
  useQuery<any, any, QueryData<AzrealNFTS>>(["nfts"], () => getAzrealRawNfts<AzrealNFTS>(nftAddress, tokenId, limit));
  const { data: { lendings = [] as Lending[], rentings = [] as Renting[] } = {} as AzrealNFTS} = nftsData || {} as QueryData<AzrealNFTS>;
  const list = [...lendings, ...rentings];

  const { data: nfts = [], error: lendingNftsError, isLoading: isLoadingNfts } =
    useQuery<any, any, ReadableNftItem[]>(["nftsLendings"],
    () => Promise.all(list.map(({ __typename, ...nft }: Lending | Renting) => {
      if (__typename === "Renting") {
        const { lending, ...renting } = nft as Renting;

        return getFullNftDetails({
          ...lending,
          type: NftEntityType.RENTING,
        } as Lending, renting as Renting);
      }

      return getFullNftDetails({
        ...nft,
        type: NftEntityType.LENDING
      } as Lending);
    })),
    {
      enabled: list.length > 0,
  });

  return {
    lendings: nfts.filter(({ type }: ReadableNftItem) => type === NftEntityType.LENDING),
    rentings: nfts.filter(({ type }: ReadableNftItem) => type === NftEntityType.RENTING),
    error: error || lendingNftsError,
    isLoading: isLoading || isLoadingNfts,
  };
};
