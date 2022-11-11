module.exports = {
  presets: [
    ['next/babel', { 'preset-react': { runtime: 'automatic' } }], 
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": true
        }
      }
    ],
  ],
  plugins: [
    'babel-plugin-macros',
    ['babel-plugin-styled-components', { ssr: true }],
  ],
}