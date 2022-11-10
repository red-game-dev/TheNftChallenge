/** @type {import('tailwindcss').Config} */

let plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    border: {
      'b-dashed': 'border-bottom-style: dashed'
    }
  },
  plugins: [
    plugin(function ({ addVariant, addUtilities, variants }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
      addUtilities([{
        '.border-b-dashed': {
          'border-bottom-style': 'dashed'
        }
      }], variants('borderStyle'))
    }),
  ]
}
