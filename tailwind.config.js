/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colour: {
      blue: {
        950: '#1d1c4f',
        900: '#262782',
        800: '#2b29a4',
        700: '#2b2dca',
      }
    },
    extend: {

    },
  },
  plugins: [],
}

