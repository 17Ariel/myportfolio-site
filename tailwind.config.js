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
        81: "80vh",
        nav: "3.98rem",
        footer: "4.1rem",
      },
      width: {
        90: ["400px"],
      },
      minHeight: {
        101: "90vh",
        81: "80vh",
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
