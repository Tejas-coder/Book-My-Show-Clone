module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{ 
      navCol: {
        50: '#e8efff',
        100: '#c3d0f0',
        200: '#9db0e1',
        300: '#7790d4',
        400: '#5171c8',
        500: '#3857ae',
        600: '#2b4488',
        700: '#1e3062',
        800: '#101d3d',
        900: '#030a1a',
      }
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
