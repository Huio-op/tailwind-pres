/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'react-blue': '#087EA4',
        'react-grey': {
          light: 'rgba(153,161,179,.2)',
          normal: 'rgba(153,161,179)',
        },
        'dark-text': '#f6f7f9',
        dark: '#23272f',
        'light-link': '#087ea4',
        'dark-link': '#149eca',
      },
    },
    fontFamily: {
      sans: ['"Optimistic Text"', 'sans-serif'],
    },
  },
  plugins: [],
};
