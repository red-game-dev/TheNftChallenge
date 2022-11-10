import tw, { styled } from "twin.macro";

export const Container = styled.div(() => [
  tw`relative px-[30px] py-[50px] lg:px-[20%] lg:py-[70px] z-[12]`
]);

export const Content = tw.div`w-full flex flex-col justify-center items-center relative text-base 
                       ml-[-1px] md:p-[25px] lg:p-[35px] bg-[#101010] border-solid border-l-[1px] border-[#4bffa5]`;
