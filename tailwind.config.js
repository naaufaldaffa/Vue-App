/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      primary: "#0c356a",
      secondary: "#0174BE",
      third: "#FFC436",
      fourth: "#FFF0CE",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
