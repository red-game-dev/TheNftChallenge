import tw, { css, styled } from "twin.macro";

import Link from "next/link";

interface MenuArgs {
  active?: boolean;
}

interface MenuItemArgs {
  selected?: boolean;
}

const MenuContainer = styled.div(({ active = false }: MenuArgs) => [
  tw`text-center lg:text-right w-auto mx-0 mt-0 top-0 left-0 relative float-none opacity-0 hidden lg:block invisible lg:visible lg:opacity-100`,
  active && tw`visible block opacity-100`,
  css`
    transition: opacity 0.35s cubic-bezier(0.165, 0.85, 0.45, 1);
  `
]);

const MenuButton = styled.div(({ active = false }: MenuArgs) => [
  tw`w-[30px] h-[20px] top-2 right-0 absolute lg:invisible transition-[all 0.3s ease 0s] rotate-0`,
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
  tw`flex flex-col justify-end text-center list-none p-0 m-0 lg:flex-row lg:text-right`,
  css`
    transition: opacity 0.35s cubic-bezier(0.165, 0.85, 0.45, 1);
  `
]);

const MenuItem = styled(Link)(({ selected = false }: MenuItemArgs) => [
  tw`ml-[40px] inline text-base leading-loose text-white font-semibold opacity-50 relative align-top overflow-hidden hover:text-white hover:opacity-100`,
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
      </MenuList>
    </MenuContainer>
  </>
);
