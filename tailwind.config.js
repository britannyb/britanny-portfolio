/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "trans-black": "rgba(0, 0, 0, 0.4)",
      "trans-white": "rgba(255, 255, 255, 0.8)",
      "dark-trans-black": "rgba(0, 0, 0, 0.8)",
      "dark-trans-white": "rgba(255, 255, 255, 0.7)",
      black: "#000000",
      white: "#FFFFFF",
      pink: "#FEB9C6",
      teal: "#048399",
      "dark-pink": "#FF7DAC",
    },
    fontSize: {
      xsm: "0.8rem",
      base: "1.3rem",
      sm: "1.4rem",
      md: "1.7rem",
      lg: "2rem",
      xl: "2.4rem",
      "2xl": "2.6rem",
      "3xl": "4.8rem",
      "4xl": "6rem",
    },
    borderRadius: {
      md: "1.4rem",
      lg: "1.8rem",
      full: "100%",
    },
    animation: {
      wiggle: "wiggle 6s ease-in-out infinite",
      float: "float 4s ease-in-out infinite",
      bubble: "fly 10s ease-in-out infinite",
      circle: "circle 1s ease-in-out infinite",
    },
    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "rotate(-6deg) translateY(-40px)" },
        "50%": { transform: "rotate(6deg) translateY(0px)" },
      },
      float: {
        "0%, 100%": { transform: "translateY(40px)" },
        "50%": { transform: "translateY(0px)" },
      },
      fly: {
        "0%": {
          transform: "translateY(0) translateX(0)",
        },
        "50%": {
          transform: "translateY(-80vh) translateX(120vw)",
        },
        "100%": {
          transform: "translateY(0) translateX(0)",
        },
      },
      circle: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
    },
    extend: {},
  },
  plugins: [],
};
