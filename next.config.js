/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['src', '__tests__/src']
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  env: {
    SUBGRAPH_AZRAEL_URL: process.env.SUBGRAPH_AZRAEL_URL,
  },
  images: {
    domains: ['res.cloudinary.com', 'nft-cdn.alchemy.com', 'ipfs.io'],
  },
};
