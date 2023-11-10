/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //font family
      fontFamily: {
        montserratPrimary: ["sans-serif"],
        interSecondary: ["sans-serif"],
      },
      color: {
        primaryBlack: "#12141a",
        secondaryGray: "#606778",
        buttonblack: "#121316",
        backgroundColor: "#121316",
        backgroundError: "#f78da7",
        errorColor: "#cf2e2e",
        highlightedText: "#0074db",
        freeplan: "#3183CC",
        goodplan: "#194266",
      },
    },
  },
  plugins: [],
};
