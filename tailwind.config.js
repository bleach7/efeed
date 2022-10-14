/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "25px",
      },
      fontFamily: {
        "noto-sans": "Noto Sans, sans-serif",
      },
    },
  },
  plugins: [],
};
