module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'pt-serif-bold-italic': ['PT Serif Bold Italic', 'serif'],
        'futura-condensed-extra-bold': ['Futura Condensed Extra Bold', 'sans-serif'],
        'palatino': ['Palatino', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

