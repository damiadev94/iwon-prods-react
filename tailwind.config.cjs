/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGreen: "#0c6f20",
        lightGreen: "#5FFC7B",
        darkGray: "#0f0f0f",
        lightGray: "#e3e3e3",
        lighterGray: "#f7f7f7",
      },
      fontFamily: {
        montserrat: [
          'Montserrat',
          'sans-serif'
        ],
      }
    },
  },
  plugins: [],
};
