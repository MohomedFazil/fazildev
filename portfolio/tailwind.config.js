/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        background: "#86469C",
        primary: "#FB9AD1",
        secondary: "#BC7FCD"
      },
      fontFamily:{
        main: ["Courgette", "cursive"],
        primary: ["Roboto", "sans-serif"],
        secondary: ["Great Vibes", "cursive"]
      },
      fontWeight:{
        400: "400",
        500: "500",
        700: "700"
      }
    },
  },
  plugins: [],
}