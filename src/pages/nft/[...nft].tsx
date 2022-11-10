import React from "react";

import { GetServerSidePropsContext } from "next";

import { dehydrate, QueryClient } from "@tanstack/react-query";

import { getAzrealRawNfts } from "@/api/getAzrealRawNfts";
import { AttributeList } from "@/components/Attributes";
import { NFT as NftCard } from "@/components/Card";
import { Container, Content } from "@/components/Container";
import { ErrorDetail } from "@/components/Error";
import { Loader } from "@/components/Loader";
import { TagsList } from "@/components/Tags";
import { Title } from "@/components/Title";
import { useGetNfts } from "@/hooks/nfts/useGetNfts";
import { useNftAttributes } from "@/hooks/nfts/useNftAttributes";
import { useNftTags } from "@/hooks/nfts/useNftTags";
import Layout from "@/layouts/Layout";
import { ReadableNftItem } from "@/types/nft";

interface NftPageProps {
  nftAddress: string;
  tokenId: string;
}

export default function Nft({ nftAddress, tokenId }: NftPageProps) {
  const { lendings, error, isLoading } = useGetNfts({
    nftAddress,
    tokenId,
    limit: 5
  });

  const [nft = {} as ReadableNftItem] =  lendings;

  const attributes = useNftAttributes(nft);
  const tags = useNftTags(nft);

  return (
    <Layout title="reNFT Challenge">
      <Container className="wrapper">
        {
          error &&
          <ErrorDetail text="Seems something went wrong, please try to refresh" />
        }
        <Title>{ nft.title || "" }</Title>
        <Content>
          {
            isLoading && <Loader viewBox="0 0 24 24" />
          }
          {
            Object.keys(nft || {}).length > 0 && (
              <>
                <NftCard {...nft} />
                <TagsList tags={tags} />
              </>
            )
          }
        </Content>
        {
          Object.keys(nft || {}).length > 0 && (
            <>
              <Title>General Details</Title>
              <Content>
                <AttributeList attributes={attributes.general} />
              </Content>
              <Title>Contract Details</Title>
              <Content>
                <AttributeList attributes={attributes.contract} />
              </Content>
            </>
          )
        }
      </Container>
    </Layout>
  );
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const queryClient = new QueryClient();

  const [nftAddress, tokenId] = query?.nft || [];

  if (nftAddress && tokenId) {
    queryClient.prefetchQuery([`nft-${nftAddress}-${tokenId}`], () => getAzrealRawNfts(nftAddress, tokenId, 1));
  }

  return {
    props: {
      nftAddress,
      tokenId,
      dehydratedState: dehydrate(queryClient),
    },
  };
}
