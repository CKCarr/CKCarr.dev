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
        // Portfolio V3 design colors.
        // Keep the existing V2 colors until every component has been migrated.
        v3: {
  // FOUNDATION COLORS
  // The core colors used throughout the portfolio.
  ink: "#241d31",
  muted: "#625b6b",
  paper: "#faf8f5",
  plum: "#261744",
  violet: "#6952c7",
  lavender: "#efebfa",
  teal: "#08736b",
  mint: "#e1f4ef",
  line: "#e4dfea",

  // SEMANTIC TEXT COLORS
  // These describe purpose rather than a particular component.
  text: {
    primary: "#241d31",
    secondary: "#625b6b",
    inverse: "#ffffff",
    inverseMuted: "#e5dff0",
    accent: "#08736b",
    accentInverse: "#b9f3e9",
  },

  // INTERACTIVE COLORS
  // Shared by buttons, links, and other interactive elements.
  action: {
    primary: "#261744",
    primaryHover: "#42305f",
    secondary: "#e1f4ef",
    secondaryHover: "#c7fff3",
  },
},
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
