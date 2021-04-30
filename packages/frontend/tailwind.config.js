const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    extend: {
      colors,
    },
    colors: {
      crazy: '#543fea',
    },
    fontFamily: {
      maven: ['Maven Pro', 'Helvetica', 'Arial', 'sans-serif'],
      montserrat: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
    },
    screens: {
      xs: '375px',
      ...defaultTheme.screens,
    },
  },
  variants: {},
  plugins: [],
  // xwind options
  xwind: {
    mode: 'objectstyles',
  },
};
