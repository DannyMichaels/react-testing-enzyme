const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // mode: 'jit', // brand new "Just in time" compiler
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      xs: '0px',
      ...defaultTheme.screens,
    },

    scale: {
      ...defaultTheme.scale,
      101: '1.01',
    },
  },
  variants: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
