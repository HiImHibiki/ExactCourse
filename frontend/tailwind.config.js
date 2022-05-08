const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
        sen: ['Sen', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'green-primary': '#19C880',
        'green-secondary': '#00FF96',
        'green-tri': '#2EFFA9',
        'green-dark': '#128A59',
        'green-light': '#18D688',
        'ash-gray': '#5D6072',
        'black-greenish-faded': '#002717',
        'schedule-bg': '#F8F0F0',
      },
    },
  },
  plugins: [],
};
