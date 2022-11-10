import { azrealQuery } from "@/queries/azreal";
import { graphqlClient } from "@/setups/graphql";

export const getAzrealRawNfts = (nftAddress?: string, tokenId?: string, limit?: number) => graphqlClient
  .query({
    query: azrealQuery(nftAddress, tokenId, limit),
  });
