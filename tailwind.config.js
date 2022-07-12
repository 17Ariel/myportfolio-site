/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
      height: {
        101: "90vh",
        98: ["420px"],
        87: ["87vh"],
        81: "90vh",
        78: "70vh",
        75: "75vh",
        nav: "10vh",
        footer: "20vh",
      },
      width: {
        90: ["400px"],
        project: ["34rem"],
      },
      minHeight: {
        101: "90vh",
        81: "90vh",
      },
      colors: {
        modalbg: ["rgba(0, 0, 0, 0.7)"],
      },
      spacing: {
        nav: "-2000px",
      },
      colors: {
        grayish: "#707070",
      },
    },
  },
  plugins: [],
};
