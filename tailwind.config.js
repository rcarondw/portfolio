/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgGray: "#090909",
        bgGrayLighter: "#212121",
      },
      boxShadow: {
        inShadow: "inset 0px 0px 20px 8px rgba(0,0,0,0.65)",
      },
    },
  },
  plugins: [],
};
