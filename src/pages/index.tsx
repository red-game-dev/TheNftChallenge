import React from "react";

import tw, { styled } from "twin.macro";

import { dehydrate, QueryClient } from "@tanstack/react-query";

import { getAzrealRawNfts } from "@/api/getAzrealRawNfts";
import { Container, Content } from "@/components/Container";
import { ErrorDetail } from "@/components/Error";
import { Loader } from "@/components/Loader";
import { NftCard } from "@/components/NftCard";
import { Title } from "@/components/Title";
import { useGetNfts } from "@/hooks/nfts/useGetNfts";
import Layout from "@/layouts/Layout";
import { AzrealNFTS } from "@/types/nft";

const NftList = styled.ul(() => [
  tw`flex flex-row flex flex-wrap -mx-4 list-none`
]);

export default function Home() {
  const { rentings, lendings, error, isLoading } = useGetNfts({
    limit: 5,
    key: "nfts"
  });

  return (
    <Layout title="reNFT Challenge">
      <Container className="wrapper">
        {
          error &&
          <ErrorDetail text="Seems something went wrong, please try to refresh" />
        }
        <Title id="interesting-nfts">Interesting & Rentable NFTs</Title>
        <Content>
          {
            isLoading && <Loader viewBox="0 0 24 24" />
          }
          <NftList>
            {
              lendings.map((nft, index) => <NftCard key={index} {...nft} canView={true} />)
            }
          </NftList>
        </Content>
      </Container>
      <Container className="wrapper">
        <Title id="rented-nfts">Being rented already</Title>
        <Content>
          {
            isLoading && <Loader viewBox="0 0 24 24" />
          }
          <NftList>
            {
              rentings.map((nft, index) => <NftCard key={index} {...nft} canView={true} />)
            }
          </NftList>
        </Content>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery(["nfts"], () => getAzrealRawNfts<AzrealNFTS>());

return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
