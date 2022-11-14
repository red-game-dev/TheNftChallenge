import React from "react";

import styled from "styled-components";

import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";

import { NftCard } from "@/components/NftCard";
import nfts from "@/tests/__mocks__/nfts";
import { ReadableNftItem } from "@/types/nft";


interface NftCardProps extends ReadableNftItem {
  canView?: boolean;
}

afterEach(cleanup);

jest.mock("next/image", () => styled.img(() => []));
jest.mock("next/link", () => styled.a(() => []));
jest.mock("twin.macro", () => {
  const fnc = () => () => styled.div(() => []);

  fnc.ul = () => styled.ul(() => []);
  fnc.li = () => styled.li(() => []);
  fnc.div = () => styled.div(() => []);
  fnc.h3 = () => styled.h3(() => []);
  fnc.span = () => styled.span(() => []);
  fnc.button = () => styled.button(() => []);

  return {
    styled: fnc,
    tw: (arg: string) => arg,
    default: (arg: string) => arg,
  };
});

describe("NFT Card", () => {
  it("Should render the card with title", () => {
    const [nft] = nfts as NftCardProps[];

    render(<NftCard {...nft} />);

    const node = screen.getByText(nft.title || "");

    expect(node.closest("h3")).toBeInTheDocument();
  });

  it("Should render the card with description", () => {
    const [nft] = nfts as NftCardProps[];

    render(<NftCard {...nft} />);

    const node = screen.getByText(nft.description || "");

    expect(node.closest("div")).toBeInTheDocument();
  });
});
