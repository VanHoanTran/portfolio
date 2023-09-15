/** @type {import('tailwindcss').Config} */
/* eslint-env node */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: ["@tailwindcss/typography"],
};
