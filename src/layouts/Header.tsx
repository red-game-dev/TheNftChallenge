import { useState } from "react";

import tw, { css, styled } from "twin.macro";

import Link from "next/link";

import { Menu } from "@/components/Menu";

const HeaderContainer = styled.header(() => [
  tw`
    bg-[#121212f2] lg:bg-[transparent]
    flex items-center justify-between m-0 lg:m-auto py-0 px-[20px] fixed lg:p-[50px] pt-0 left-0 right-0 w-full z-50
    after:content-[''] after:relative after:block after:clear-both
  `,
  css` 
    transition: all 0.7s cubic-bezier(0.165, 0.85, 0.45, 1);
  `
]);

const HeaderContent = tw.div`w-full relative`;

const LogoContainer = styled.div(() => [
  tw`w-full m-4 relative overflow-hidden lg:w-[150px] lg:m-0 text-base leading-loose font-semibold text-white opacity-50 whitespace-nowrap z-50 lg:top-12`,
  css`
    .mask-lnk {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      display: block;
      transform: translateY(0);
      transition: opacity 0.7s cubic-bezier(0.165, 0.85, 0.45, 1),
        color 0.7s cubic-bezier(0.165, 0.85, 0.45, 1),
        transform 0.7s cubic-bezier(0.165, 0.85, 0.45, 1);

      &.mask-lnk-hover {
        position: absolute;
        opacity: 0;
        transform: translateY(32px);
      }
      
      strong {
        color: #4bffa5;
      }
    }
  `
]);

const LogoContents = styled.div(() => [
  css`
    &:hover .mask-lnk {
      opacity: 1;
      transform: translateY(-32px);
       
      &.mask-lnk-hover {
        transform: translateY(0);
      }
    }
  `
]);

const Header = ({ title = "" }) => {
  const [toggle, setToggle] = useState(false);
  const words = title.split(" ");

  return (
    <HeaderContainer className={"header desktopHeader"}
      role="presentation"
      onClick={() => setToggle(!toggle)}>
      <HeaderContent>
        <LogoContainer className="hover-masks-logo">
          <LogoContents className="mask-content">
            <span className="mask-lnk">
              { words.map((word: string, index: number) => {
                if (index === words.length - 1) {
                  return (<strong key={`word-${index}`}> {word}</strong>);
                }

                return (<span key={`word-${index}`}> {word}</span>);
              })}
            </span>
            <Link href="#section-started" className="mask-lnk mask-lnk-hover">
              By <strong>Redeemer Pace</strong>
            </Link>
          </LogoContents>
        </LogoContainer>
        <Menu active={toggle} />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
