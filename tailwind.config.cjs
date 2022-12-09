/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBackground: "#181818",
      },
      fontFamily: {
        title: "Karla",
        mainText: "Montserrat",
      },
    },
  },
  plugins: [],
};
