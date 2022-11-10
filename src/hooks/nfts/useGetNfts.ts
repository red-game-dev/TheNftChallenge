import { useQuery } from "@tanstack/react-query";

import { getAzrealRawNfts } from "@/api/getAzrealRawNfts";
import { AzrealNFTS, Lending, ReadableNftItem, Renting } from "@/types/nft";
import { QueryData } from "@/types/query";
import { getFullNftDetails } from "@/utils/nft/nftDetails";

interface UseGetNftsHookProps {
  nftAddress?: string;
  tokenId?: string;
  limit?: number;
}

export const useGetNfts = ({ nftAddress, tokenId, limit }: UseGetNftsHookProps) => {
  const { data: nftsData = {} as QueryData<AzrealNFTS>, error } = useQuery<any, any, QueryData<AzrealNFTS>>(["nfts"], () => getAzrealRawNfts(nftAddress, tokenId, limit));
  const { data: { lendings = [] as Lending[], rentings = [] as Renting[] } = {} as AzrealNFTS} = nftsData || {} as QueryData<AzrealNFTS>;

  const { data: lendingNfts = [], error: lendingNftsError, isLoading: isLeadingNftsLoading } =
    useQuery<any, any, ReadableNftItem[]>(["nftsLendings"],
    () => Promise.all(lendings.map((lending: Lending) => getFullNftDetails(lending))),
    {
      enabled: lendings.length > 0,
  });
  const { data: rentingNfts = [], error: rentingNftsError } =
    useQuery<any, any, ReadableNftItem[]>(["nftsRentings"],
    () => Promise.all(rentings.map(async ({ lending, ...renting }: Renting) => getFullNftDetails(lending, renting),
    {
      enabled: rentings.length > 0,
    })));

  return {
    lendings: lendingNfts,
    rentings: rentingNfts,
    error: error || rentingNftsError || lendingNftsError,
    isLoading: isLeadingNftsLoading,
  };
};
