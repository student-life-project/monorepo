const colors = require('tailwindcss/colors');

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
      montserrat: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif']
    },
  },
  variants: {},
  plugins: [],
  // xwind options
  xwind: {
    mode: 'objectstyles',
  },
};
