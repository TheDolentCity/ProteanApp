module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // 'false' or 'media' or 'class'
  theme: {
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
