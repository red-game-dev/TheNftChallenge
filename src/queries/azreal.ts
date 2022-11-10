import { gql } from "@/setups/graphql";

export const azrealQuery = (nftAddress?: string, tokenId?: string, limit: number = 5) => {
  const where: { [x: string]: string | boolean | number } = {};

  if (nftAddress) {
    where["nftAddress"] = nftAddress;
  }
  if (tokenId) {
    where["tokenId"] = tokenId;
  }

  const queryWhere = Object.keys(where).map((key: string) => `${key}: "${where[key]}"`);

  return gql`
    query {
      lendings(first: ${limit}, where: { isERC721: true, ${queryWhere.join(",")} }) {
        id
        cursor
        nftAddress
        tokenId
        nftPrice
        dailyRentPrice
        collateralClaimed
        lenderAddress
        paymentToken
        lentAt
        lentAmount
        isERC721
        maxRentDuration
      }
      rentings(first: ${limit}) {
        id
        cursor
        renterAddress
        rentDuration
        lending {
          id
          cursor
          nftAddress
          tokenId
          nftPrice
          dailyRentPrice
          collateralClaimed
          lenderAddress
          paymentToken
          lentAt
          lentAmount
        }
      }
    }
`;
};
