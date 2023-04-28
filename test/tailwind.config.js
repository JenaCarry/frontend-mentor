/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "#d6e2f0",
        "h1-color": "#1f3251",
        "p-color": "#7b879d",
      },
      fontFamily: {
        outfit: '"Outfit", sans-serif',
      },
      fontSize: {
        pSize: "0.9375rem",
      },
    },
  },
  plugins: [],
};
