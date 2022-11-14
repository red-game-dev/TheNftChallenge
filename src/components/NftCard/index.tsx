import { FC, useState } from "react";

import tw, { styled } from "twin.macro";

import Image from "next/image";
import Link from "next/link";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ReadableNftItem } from "@/types/nft";

interface NftButtonProps {
  claimed?: boolean;
}

interface FavouriteButtonProps {
  active?: boolean;
}

const Card = styled.li(() => [
  tw`w-full h-full md:w-1/2 xl:w-1/2 px-4 py-5 shadow`
]);

const CardBackground = styled.div(() => [
  tw`rounded-md overflow-hidden mb-10 border-solid border-t-[0.01rem] border-[#4bffa5] hover:opacity-95`
]);

const NftImage = styled(Image)(() => [
  tw`w-full rounded-md border-b-[0.01rem] border-t-[0.01rem] border-[#4bffa5]`
]);

const NftContent = styled.div(() => [
  tw`bg-[#4bffa5] p-8 sm:p-9 md:p-7 xl:p-9 text-center rounded-md`
]);

const NftTitle = styled.h3(() => [
  tw`font-semibold text-gray-800 text-xl mb-4 block hover:text-gray-900`
]);

const NftParagraph = styled.div(() => [
  tw`text-xs text-black leading-relaxed mb-7`
]);

const NftButton = styled.div(({ claimed = false }: NftButtonProps) => [
  tw`w-full inline-block py-2 px-7 border border-[#E5E7EB] bg-black rounded-md text-base text-white
     font-medium hover:border-black hover:bg-white hover:text-black transition`,
  !claimed && tw`rounded-md border-gray-700 bg-gray-700 hover:bg-gray-400 hover:border-gray-400 hover:text-[#4bffa5]`
]);

const FavouriteButton = styled.span(({ active = false }: FavouriteButtonProps) => [
  tw`float-right text-black hover:text-white`,
  active && tw`text-red-600 hover:text-black hover:animate-pulse`,
]);

const RentPriceTag = styled.div(() => [
  tw`w-full inline-block py-2 px-3 my-1 border border-[#4bffa5] rounded-md text-xs text-[#4bffa5] transition`,
]);

const ViewButton = styled(Link)(() => [
  tw`w-full inline-block py-2 px-7 border border-[#E5E7EB] bg-black rounded-md text-base text-white
     font-medium hover:border-black hover:bg-white hover:text-black transition`,
]);

interface NftCardProps extends ReadableNftItem {
  canView?: boolean;
}

export const NftCard: FC<NftCardProps> = ({
  id, title, description,
  nftPrice, paymentTokenName,
  collateralClaimed = false,
  dailyRentPrice,
  nftAddress, tokenId,
  assetUrl, rawMetadata = {},
  canView = false }: NftCardProps) => {
    const [isFavourite, setFavourite] = useLocalStorage<any>(`favouriteStatus-${id}`,
    JSON.parse(window.localStorage.getItem(`favouriteStatus-${id}`) || "false") as boolean);

    const [imgSrc, setImageSrc] = useState<string>(assetUrl || process.env.DEFAULT_IMAGE_FALLBACK || "");

    return (
      <Card>
        <CardBackground>
          <NftImage
            style={{
              background: rawMetadata.background_color || "black"
            }}
            src={imgSrc}
            width={200}
            height={200}
            alt="image"
            onError={() => setImageSrc(process.env.DEFAULT_IMAGE_FALLBACK || "")}
          />
          <NftContent>
            <NftTitle>
              <span>
              { title }
              </span>
              <FavouriteButton
                onClick={() => setFavourite(!JSON.parse(window.localStorage.getItem(`favouriteStatus-${id}`) || "false"))}
                active={isFavourite}
                className="fa-sharp fa-solid fa-heart"
              />
            </NftTitle>
            <NftParagraph>{ description }</NftParagraph>
            <NftButton className="group" claimed={collateralClaimed}>
              { nftPrice } { paymentTokenName }
              <RentPriceTag
                className="group-hover:border-black group-hover:bg-white group-hover:text-black">Rent for { dailyRentPrice } { paymentTokenName } Daily</RentPriceTag>
            </NftButton>
            {
              canView && <ViewButton href={`/nft/${nftAddress}/${tokenId}`}>View</ViewButton>
            }
          </NftContent>
        </CardBackground>
      </Card>
    );
};
