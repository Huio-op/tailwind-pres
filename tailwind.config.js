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
        black: '#23272f',
        'light-link': '#087ea4',
        'dark-link': '#149eca',
        secondary: '#404756',
        'secondary-dark': '#ebecf0',
        tertiary: '#5e687e',
        'tertiary-dark': '#99a1b3',
      },
    },
    fontFamily: {
      sans: ['"Optimistic Text"', 'sans-serif'],
      display: ['"Optimistic Display"', 'sans-serif'],
    },
    boxShadow: {
      'secondary-button': 'inset 0 0 0 1px #d9dbe3',
      'secondary-button-dark': 'inset 0 0 0 1px #404756',
      nav: '0 0 #0000, 0 0 #0000, 0px 16px 32px -16px rgba(0,0,0,.1), 0 0 0 1px #d9dbe3',
      'nav-dark': '0 16px 32px -16px rgba(0,0,0,.1),0 0 0 1px hsla(0,0%,100%,.05)',
    },
    backgroundImage: {
      step: 'conic-gradient(from 90deg at -10% 100%,#bcc1cd 0deg,#bcc1cd 90deg,#fff 1turn)',
      'step-dark': 'conic-gradient(from 90deg at -10% 100%,#2b303b 0deg,#2b303b 90deg,#16181d 1turn)',
      'meta-gradient': "url('~/assets/img/meta-gradient.png')",
      'meta-gradient-dark': "url('~/assets/img/meta-gradient-dark.png')",
    },
  },
  plugins: [],
};
