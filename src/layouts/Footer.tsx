import { FC } from "react";

import tw, { css, styled } from "twin.macro";

import Link from "next/link";

const FooterContainer = styled.footer(() => [
  tw`p-0 fixed bottom-0 left-12 right-12 w-auto h-1 z-50 hidden lg:block`
]);

const SocialMediaList = styled.ul(() => [
  tw`float-right absolute right-0 bottom-0 w-6 list-none last:mb-0`
]);

const FollowMeButton = styled.li(() => [
  tw`
    pr-20 absolute bottom-full right-0 text-[#bbb] text-sm leading-6 h-6 whitespace-nowrap origin-[100% 0] text-right rotate-90
    after:content[''] after:absolute after:top-1/2 after:right-0 after:w-12 after:h-1 after:bg-white
  `
]);

const SocialMediaItem = styled(Link)(() => [
  tw`block mb-8 text-center text-[#bbb] hover:text-white`,
  css`
    transition: all 0.7s cubic-bezier(0.165, 0.85, 0.45, 1);
  `
]);


const Footer: FC = () => (
    <FooterContainer>
      <SocialMediaList>
        <FollowMeButton>Follow Me</FollowMeButton>
        <SocialMediaItem href="https://www.linkedin.com/in/redeemer-pace-685692b9/" target="_blank" className="icon fab fa-linkedin" />
      </SocialMediaList>
    </FooterContainer>
  );

export default Footer;
