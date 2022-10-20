/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "sans": ['Jost', 'Helvetica Neue', ...defaultTheme.fontFamily.sans],
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
      black: 900,
    },
    extend: {
      colors: {
        neutral: colors.slate,
        positive: colors.green,
        urge: colors.violet,
        warning: colors.yellow,
        info: colors.blue,
        critical: colors.red,
        texth: '#4F4F4F',
        'color1': '#FF3333',
        color1: '#FF3333',
        color2: '#B10E0E',
      },
      container: {
        center: true,
        padding: defaultTheme.spacing[4],
        screens: {
          sm: '100%',
          md: '640px',
          lg: '960px',
          xl: '1220px',
        },
      },
      screens: {
      },
      boxShadow: {
        '3xl': '0px 4px 44px rgb(0 0 0 / 8%)',
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
        '5000': '5000ms',
      },
      spacing: {

      },
      maxWidth: {
        'min-content': 'min-content',
        'max-content': 'max-content',
        '85': '360px',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
      },
      maxHeight: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
      },
      minWidth: {
        'min-content': 'min-content',
        'max-content': 'max-content',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '4/5': '80%',
      },
      minHeight: {
        'min-content': 'min-content',
        'max-content': 'max-content',
        '1/4': '25vh',
        '1/2': '50vh',
        '3/4': '75vh',
        '4/5': '80vh',
      },
      inset: {
        '1/2': '50%',
        '-1/2': '-50%',
      },
    },
    screens: {
      'xs': '460px',
      // => @media (min-width: 460px) { ... }

      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '960px',
      // => @media (min-width: 960px) { ... }

      'xl': '1220px',
      // => @media (min-width: 1220px) { ... }
    },
  },
  plugins: [],
}
