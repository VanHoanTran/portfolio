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
        "scale-down": "zoom-out .2s ease-in forwards",
        "scale-up": "zoom-in .2s ease-out forwards",
        "slide-in":
          "slide-in .5s ease-in forwards, fade-in ease-in .5s forwards",
        "slide-out":
          "slide-out .5s ease-out forwards, fade-out ease-out .5s forwards",
        "zoom-fade-in":
          "fade-in 2s linear forwards, zoom-in 2s linear forwards",
        "zoom-fade-out":
          "fade-out 2s linear forwards, zoom-out 2s linear forwards",
        "fade-in": "fade-in 2s linear forwards",
        "zoom-in": "zoom-in 2s linear forwards",
        typewriter:
          "typing 5s steps(50,end) infinite, blink .5s step-end infinite",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            transform: "translateX(10px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        "slide-out": {
          "0%": {
            transform: "translateX(0px)",
          },

          "100%": {
            transform: "translateX(-10px)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },

          "100%": {
            opacity: "1",
          },
        },
        "fade-out": {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        "zoom-in": {
          "0%": {
            transform: "scaleX(0) scaleY(0)",
          },

          "100%": {
            transform: "scaleX(1) scaleY(1) ",
          },
        },
        "zoom-out": {
          "0%": {
            transform: "scale(1)",
          },
          "20%": {
            transform: "scale(0.8)",
          },
          "40%": {
            transform: "scale(0.6)",
          },
          "60%": {
            transform: "scale(0.4)",
          },
          "80%": {
            transform: "scale(0.2)",
          },

          "100%": {
            transform: "scale(0)",
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

      backgroundImage: {},
    },
  },
  plugins: ["@tailwindcss/typography"],
};
