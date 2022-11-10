import { gql } from "@/setups/graphql";

export const azrealQuery = gql`
  query {
    lendings(first: 5, where: {isERC721: true}) {
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
    rentings(first: 5) {
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
