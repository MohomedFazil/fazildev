/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: "#032A30",
        secondary: "#033F47",
        light: "#E0F77F"
      },
      fontFamily:{
        fontmain: ['Bai Jamjuree', 'sans-serif'],
      },
      fontWeight:{
        400: "400",
        500: "500",
        600: "600",
        700: "700"
      },
      height:{
        header:"3.5rem"
      },
      width:{
        navw: "initial"
      },
      padding:{
        sectiontop: "8rem",
        sectionbottom: "2rem"
      },
      keyframes:{
        wiggle:{
          '0%, 100%': { transform: 'translateY(-1rem)' },
          '50%': { transform: 'translateY(3rem)' },
        }
      }
    },
  },
  plugins: [],
}

