/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      white: '#FFFFFF;',
      gray: '#E7E7E7',
      gray2: '#C2C2C2',
      purple: '#603EBE',
      lightpurple: '#F5F4F9',
      navy: '#090C35',
      black: '#000000'
    },
    fontSize: {
      '15': '0.9375rem',
      '18': '1.125rem',
      '20': '1.25rem',
      '28': '1.75rem',
      '36': '2.25rem',
      '50': '3.125rem', 
      '90' : '5.625rem' 
    },
    letterSpacing: {
      'wide': '1.5px',
      'wider': '2.5px',
      'content-mobile': '0.74px',
      'content-tablet': '0.837px'
    },
    extend: {},
  },
  plugins: [],
})
