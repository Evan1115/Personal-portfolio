/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'darkOrange': "#FD5F00",
        'milkyWhite': "#F6F6E9",
        'darkBlue': "#13334C",
        'mediumBlue': "#005792",
      }
    },
  },
  plugins: [],
};
