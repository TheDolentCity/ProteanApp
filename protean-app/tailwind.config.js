const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // 'false' or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      cyan: {
        '100': '#f8fdfe',
        '200': '#e2f6fc',
        '300': '#caeefa',
        '400': '#96ddf4',
        '500': '#69ceef',
        '600': '#54c7ec',
        '700': '#4db3d5',
        '800': '#4197b4',
        '900': '#307085',
      },
      magenta: {
        '100': '#fdf8fe',
        '200': '#f7e2fc',
        '300': '#f0cafa',
        '400': '#e296f4',
        '500': '#d469ef',
        '600': '#cf55ed',
        '700': '#ba4dd5',
        '800': '#9d41b4',
        '900': '#743085',
      },
      yellow: {
        '100': '#fefef8',
        '200': '#fcf9e2',
        '300': '#faf4ca',
        '400': '#f4e996',
        '500': '#efe069',
        '600': '#eddb55',
        '700': '#d5c54d',
        '800': '#b4a741',
        '900': '#857b30',
      }
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
