/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        midnightblue: '#06053e',
        white: '#ffffff',
        cornflowerblue: '#8080d7',
        peachpuff: '#ffc2b0',
        paleturquoise: '#82f8f8',
        pink: '#e19ee5',
        plum: '#c499f3',
        darkcyan: '#009b9b',
        purple: '#7500ac',
        darkpurple: '#2d0042',
        brightpink: '#f700ff',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        h1: ['56px', { lineHeight: '64px' }],
        h2: ['48px', { lineHeight: '56px' }],
        h3: ['40px', { lineHeight: '48px' }],
        base: ['16px', { lineHeight: '24px' }], // Default font size
      },
    },
  },
  plugins: [],
});
