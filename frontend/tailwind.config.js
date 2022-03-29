const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Bree Serif', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
