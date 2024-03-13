/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "Playfair":["Playfair Display","serif"],
      "Lato":["Lato", "sans-serif"]
    },
    boxShadow:{
      'cardShadow':"rgba(102, 178, 255, 0.2) 0px 7px 29px 0px"
    },
    extend: {},
  },
  plugins: [],
}



