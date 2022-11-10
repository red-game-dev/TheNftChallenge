import "tailwindcss/tailwind.css";

import { RecoilRoot } from "recoil";
import { createGlobalStyle } from "styled-components";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

import { ReactQueryClient, QueryClientProvider } from "@/setups/graphql";

const queryClient = new ReactQueryClient();

const CustomStyles = createGlobalStyle({
  body: {
    WebkitTapHighlightColor: theme`colors.black`,
    backgroundColor: "#121212",
    ...tw`antialiased`,
  },
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>The NFT Challenge</title>

        <link rel="shortcut icon" href="images/favicons/favicon.ico" />
      </Head>
      <GlobalStyles />

      <Script src="https://kit.fontawesome.com/54dc1ed9f3.js" crossOrigin="anonymous" />
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}
