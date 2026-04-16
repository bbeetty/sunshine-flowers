/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8EE',
        blush: '#F9D5D3',
        peach: '#FBD9B8',
        butter: '#FCEBA4',
        mint: '#CCE6D0',
        lilac: '#DCD0EC',
        sky: '#CFE3EF',
        ink: '#3B322C',
        muted: '#8A7F76',
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
