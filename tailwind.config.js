/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      "black-900": "#000000",
      "gray-900": "#121214",
      "gray-800": "#202024",
      "gray-400": "#7C7C8A",
      "gray-200": "#E1E1E6",
      "gray-100": "#C4C4CC",
      "cyan-500": "#81D8F7",
      "cyan-300": "#98E1FB",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
