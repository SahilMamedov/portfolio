/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    minWidth: {
      '700': '700px',
      '600': '600px',
      '500': '500px',
      '400': '400px',
      '300': '300px',
    },
    extend: {},
  },
  plugins: [],
}

