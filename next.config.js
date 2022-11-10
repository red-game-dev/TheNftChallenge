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
    DEFAULT_IMAGE_FALLBACK: process.env.DEFAULT_IMAGE_FALLBACK
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'nft-cdn.alchemy.com',
      'ipfs.io',
      'metadata.ens.domains',
      'lh3.googleusercontent.com',
      'assets.polkamon.com',
      'assets.f1deltatime.com',
      'mooncat-data-api.herokuapp.com',
      'virus.folia.app',
      'api.sandbox.game',
      'peer-ec1.decentraland.org',
      'go.fission.app',
      's3.us-east-2.amazonaws.com',
      'gateway.pinata.cloud',
      '',
      'dizzydragons.s3.amazonaws.com',
      '45309735-files.gitbook.io',
      'api.thegraph.com'
    ],
  },
};
