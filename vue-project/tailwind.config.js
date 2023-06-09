/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    textFillColor: theme => theme('borderColor'),
    textStrokeColor: theme => theme('borderColor'),
    textStrokeWidth: theme => theme('borderWidth'),
    paintOrder: {
      'fsm': { paintOrder: 'fill stroke markers' },
      'fms': { paintOrder: 'fill markers stroke' },
      'sfm': { paintOrder: 'stroke fill markers' },
      'smf': { paintOrder: 'stroke markers fill' },
      'mfs': { paintOrder: 'markers fill stroke' },
      'msf': { paintOrder: 'markers stroke fill' },
    },
    variants: { // all the following default to ['responsive']
      textFillColor: ['responsive'],
      textStrokeColor: ['responsive'],
      textStrokeWidth: ['responsive'],
      paintOrder: ['responsive'],
    },
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [require('tailwindcss-text-fill-stroke'),
  require('tailwind-scrollbar'),

],
};
