/** @type {import('tailwindcss').Config} */

/* eslint-env node */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      animation: {
        "zoom-fade-in":
          "fade-in 2s linear forwards, zoom-in 2s linear forwards",
        "fade-in": "fade-in 2s linear forwards",
        "zoom-in": "zoom 2s linear forwards",
        typewriter:
          "typing 5s steps(50,end) infinite, blink .5s step-end infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "zoom-in": {
          "0%": {
            transform: "scale(0)",
          },
          "25%": {
            transform: "scale(0.4)",
          },
          "50%": {
            transform: "scale(0.8)",
          },
          "75%": {
            transform: "scale(1.2)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        blink: {
          "0%, 100%": {
            "border-color": "transparent",
          },
          "50%": { "border-color": "orange" },
        },
        typing: {
          "0%": {
            width: "0%",
          },
          "50%": {
            width: "100%",
          },
          "100%": {
            width: "0%",
          },
        },
      },
    },
  },
  plugins: ["@tailwindcss/typography"],
};
