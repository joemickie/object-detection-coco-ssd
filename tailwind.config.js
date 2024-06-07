module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#755ae2',
        secondary: '#e5e0ff',
        'body-text': '#333',
        'header-text': '#1a202c',
        'helper-text': '#a0aec0',
        violet: {
          50: '#ebe7ff',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
