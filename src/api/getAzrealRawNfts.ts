import { azrealQuery } from "@/queries/azreal";
import { graphqlClient } from "@/setups/graphql";

export const getAzrealRawNfts = <T>(nftAddress?: string, tokenId?: string, limit?: number) => graphqlClient
  .query<T>({
    query: azrealQuery(nftAddress, tokenId, limit),
  });
