/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    colors: {
      primary: "#007FFF",
      white: "white",
      black: "black",
    },
    fontFamily: {
      mons: ["montserrat"],
    },
  },
  plugins: [],
};
