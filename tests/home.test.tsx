/* eslint-disable @next/next/no-img-element */
// import React from "react";

// import { render, screen } from "@testing-library/react";

// import "@testing-library/jest-dom";

// import { NFT as NftCard } from "@/components/NftCard";
// import nfts from "@/tests/__mocks__/nfts";
// import { ReadableNftItem } from "@/types/nft";

// interface NftCardProps extends ReadableNftItem {
//   canView?: boolean;
// }

// jest.mock("next/image", () => <div/>);
// jest.mock("next/link", () => <div />);

// jest.mock("twin.macro", () => {
//   const functionTest = () => jest.fn();

//   functionTest.li = jest.fn(({ children }) => <div>{children}</div>);
//   functionTest.div = jest.fn(({ children }) => <div>{children}</div>);
//   functionTest.span = jest.fn(({ children }) => <div>{children}</div>);
//   functionTest.button = jest.fn(({ children }) => <div>{children}</div>);
//   functionTest.ul = jest.fn(({ children }) => <div>{children}</div>);
//   functionTest.li = jest.fn(({ children }) => <div>{children}</div>);
//   functionTest.h3 = jest.fn(({ children }) => <div>{children}</div>);
//   functionTest.p = jest.fn(({ children }) => <div>{children}</div>);

//   return {
//     styled: functionTest,
//     _styled: functionTest,
//     tw: functionTest,
//     default: functionTest
//   };
// });

// describe("NFT Card", () => {
//   it("Should render the card with title", () => {
//     const [nft] = nfts as NftCardProps[];

//     render(<NftCard { ...nft } />);

//     expect(screen.getByRole("h3", { name: nft.title })).toBeInTheDocument();
//   });
// });
