module.exports = {
  // mode: 'jit', // brand new "Just in time" compiler
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
