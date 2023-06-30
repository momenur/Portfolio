/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bodyColor: "#212428",
        lightText: "#c4cfde",
        boxBG: "linier-gradient(14deg, #le2024, #23272b)",
        designColor: "#ff014f"
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e"
      },
    },
  },
  plugins: [],
}

