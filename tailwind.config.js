/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./pages/**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "primary-dark": "#1a202c",
        "primary-light": "#f7fafc",
        "secondary-dark": "#2d3748",
        "secondary-light": "#edf2f7",
      },
      boxShadow: {
        card: "0 10px 20px rgba(0, 0, 0, 0.1)",
        "card-dark": "0 10px 20px rgba(99, 102, 241, 0.3)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
