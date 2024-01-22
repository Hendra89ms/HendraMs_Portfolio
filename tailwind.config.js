/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A2E",
        primaryHover: "#484858",
        secondary: "#DD7224",
        secondaryHover: "#FF8B37",
      },
    },
  },
  plugins: [],
}