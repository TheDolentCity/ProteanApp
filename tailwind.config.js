const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // 'false' or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      primary: colors.lightBlue,
      green: colors.green,
      red: colors.red,
      cyan: colors.cyan,
      magenta: colors.fuchsia,
      yellow: colors.yellow,
      steelBlue: {
        "50": "#f8fafb",
        "100": "#ebf0f4",
        "200": "#d4dfe8",
        "300": "#b9cbda",
        "400": "#a2b9cd",
        "500": "#88a5bf",
        "600": "#577fa3",
        "700": "#3e5b74",
        "800": "#243442",
        "900": "#090d11",
      },
      forestGreen: {
        "50": "#f1f4f0",
        "100": "#e3eae1",
        "200": "#c9d7c7",
        "300": "#adc1a9",
        "400": "#93ae8e",
        "500": "#799b73",
        "600": "#5f7d59",
        "700": "#465c42",
        "800": "#2f3e2d",
        "900": "#171e15"
      },
      dirtBrown: {
        "50": "#f7f4f2",
        "100": "#ece3df",
        "200": "#d6c3bd",
        "300": "#bfa197",
        "400": "#aa8274",
        "500": "#8b6455",
        "600": "#725246",
        "700": "#553d34",
        "800": "#3c2b25",
        "900": "#201713"
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['Inconsolata', 'mono'],
    },
    minWidth: {
      '0': '0',
      '4': '1rem',
      '8': '2rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '60': '15rem',
      '72': '18rem',
      '84': '21rem',
      '96': '24rem',
      '1/12': '8%',
      '2/12': '16%',
      '3/12': '25%',
      '4/12': '33%',
      '5/12': '42%',
      '6/12': '50%',
      '7/12': '58%',
      '8/12': '66%',
      '9/12': '75%',
      '10/12': '83%',
      '11/12': '92%',
      'full': '100%',
      'screen': '100vw'
    },
    minHeight: {
      '0': '0',
      '4': '1rem',
      '8': '2rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '60': '15rem',
      '72': '18rem',
      '84': '21rem',
      '96': '24rem',
      '1/12': '8%',
      '2/12': '16%',
      '3/12': '25%',
      '4/12': '33%',
      '5/12': '42%',
      '6/12': '50%',
      '7/12': '58%',
      '8/12': '66%',
      '9/12': '75%',
      '10/12': '83%',
      '11/12': '92%',
      'full': '100%',
      'screen': '100vh'
    },
    maxWidth: {
      '0': '0',
      '4': '1rem',
      '8': '2rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '60': '15rem',
      '72': '18rem',
      '84': '21rem',
      '96': '24rem',
      '1/12': '8%',
      '2/12': '16%',
      '3/12': '25%',
      '4/12': '33%',
      '5/12': '42%',
      '6/12': '50%',
      '7/12': '58%',
      '8/12': '66%',
      '9/12': '75%',
      '10/12': '83%',
      '11/12': '92%',
      'full': '100%',
      'screen': '100vw'
    },
    maxHeight: {
      '0': '0',
      '4': '1rem',
      '8': '2rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '60': '15rem',
      '72': '18rem',
      '84': '21rem',
      '96': '24rem',
      '1/12': '8%',
      '2/12': '16%',
      '3/12': '25%',
      '4/12': '33%',
      '5/12': '42%',
      '6/12': '50%',
      '7/12': '58%',
      '8/12': '66%',
      '9/12': '75%',
      '10/12': '83%',
      '11/12': '92%',
      'full': '100%',
      'screen': '100vh'
    },
    opacity: {
      '0': '0',
      '2': '.02',
      '4': '.04',
      '5': '.05',
      '6': '.06',
      '8': '.08',
      '10': '.1',
      '15': '.15',
      '20': '.2',
      '25': '.25',
      '30': '.3',
      '40': '.4',
      '50': '.5',
      '60': '.6',
      '70': '.7',
      '75': '.75',
      '80': '.8',
      '85': '.85',
      '90': '.9',
      '92': '.92',
      '94': '.94',
      '95': '.95',
      '96': '.96',
      '98': '.98',
      '100': '1',
    },
    boxShadow: {
      sm: '0 0.8px 1.8px 0 rgba(0, 0, 0, 0.1)',
      DEFAULT: '0 1.6px 3.6px 0 rgba(0, 0, 0, 0.13), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 3.2px 7.2px 0px rgba(0, 0, 0, 0.13), 0 2px 4px 0px rgba(0, 0, 0, 0.1)',
      lg: '0 6.4px 14.4px 0px rgba(0, 0, 0, 0.13), 0 4px 6px 0px rgba(0, 0, 0, 0.1)',
      xl: '0 12.8px 28.8px 0px rgba(0, 0, 0, 0.13), 0 10px 10px 0px rgba(0, 0, 0, 0.1)',
      '2xl': '0 25.6px 57.6px 0px rgba(0, 0, 0, 0.25)',
      '3xl': '0 51.2px 105.2px 0px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    extend: {
      fontSize: {
        '5xs': '.25rem',
        '4xs': '.375rem',
        '3xs': '.5rem',
        '2xs': '.625rem',
      },
      outline: {
        white: '2px solid #ffffff',
        black: '2px solid #000000',
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  variants: {
    scrollbar: ['dark'],
    extend: {
      backgroundColor: ['checked'],
      outline: ['focus-visible'],
      ringColor: ['focus-visible'],
      ringWidth: ['focus-visible'],
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
