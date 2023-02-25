/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple": "#A12BFD",
        "aqua": "#4BEEE5",
        "magenta": "#CB81E4",
        "indigo": "#6B54DE",
        "lilac": "#AA7AF2",
        "navy": "#4A51B4"
        
      },
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },
  plugins: [],
}
