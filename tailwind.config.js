/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        '2xl': 24,
        '3xl': 30,
        '4xl': 36,
        '5xl': 48,
      },
    },
  },
  plugins: [],
};
