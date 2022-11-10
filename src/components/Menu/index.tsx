import tw, { css, styled } from "twin.macro";

import Link from "next/link";

interface MenuArgs {
  active?: boolean;
}

interface MenuItemArgs {
  selected?: boolean;
}

const MenuContainer = styled.div(({ active = false }: MenuArgs) => [
  tw`
  flex-col justify-evenly
  text-center lg:text-right 
  w-full h-full lg:h-auto lg:w-auto 
  mx-0 mt-0
  bg-[#121212f2]
  lg:bg-[transparent]
  top-16 left-0 right-0 bottom-0 
  lg:top-0 lg:right-auto lg:bottom-auto
  fixed lg:relative float-none 
  opacity-0 hidden 
  lg:block 
  invisible lg:visible lg:opacity-100`,
  active && tw`visible flex opacity-100`,
  css`
    transition: opacity 0.35s cubic-bezier(0.165, 0.85, 0.45, 1);
  `
]);

const MenuButton = styled.div(({ active = false }: MenuArgs) => [
  tw`m-4 w-[30px] h-[20px] top-2 right-0 absolute lg:invisible transition-[all 0.3s ease 0s] rotate-0`,
  tw`before:content-['']
    after:content-['']
    before:absolute
    after:absolute
    before:top-0
    after:top-auto
    after:bottom-0
    before:left-0
    after:left-0
    before:w-full
    after:w-full
    before:height[2px]
    after:height[2px]
    before:bg-white
    after:bg-white
    before:transition-[all 0.3s ease 0s]
    after:transition-[all 0.3s ease 0s]
  `,
  active && tw`rotate-45`,
]);

const MenuList = styled.ul(() => [
  tw`flex flex-col justify-evenly lg:justify-end text-center list-none p-0 m-0 lg:flex-row lg:text-right`,
  css`
    transition: opacity 0.35s cubic-bezier(0.165, 0.85, 0.45, 1);
  `
]);

const MenuItem = styled(Link)(({ selected = false }: MenuItemArgs) => [
  tw`w-full lg:w-auto m-4 p-4 py-8 lg:p-0 lg:m-0 inline text-base leading-loose text-white font-semibold 
     lg:bg-[#121212ed] lg:px-4 border-dotted border-2 border-[#121212ed] border-r-[#4bffa5]
     opacity-50 relative align-top overflow-hidden hover:text-white hover:opacity-100`,
  selected && tw`text-white opacity-100`,
  css`
    transition: color 0.7s cubic-bezier(0.165, 0.85, 0.45, 1);
  `
]);

export const Menu = ({ active }: MenuArgs) => (
  <>
    <MenuButton active={active} className="menu-btn" />
    <MenuContainer active={active}>
      <MenuList>
          <MenuItem href="/" selected={true}>
            Home
          </MenuItem>
          <MenuItem href="#interesting-nfts" selected={true}>
            Interesting NFTs
          </MenuItem>
          <MenuItem href="#rented-nfts" selected={true}>
            Rented
          </MenuItem>
      </MenuList>
    </MenuContainer>
  </>
);

