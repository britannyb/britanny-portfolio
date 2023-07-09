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
      shine: "shine 8s ease-in-out infinite",
      glow: "glow 8s ease-in-out infinite",
    },
    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "rotate(-6deg) translatey(-40px)" },
        "50%": { transform: "rotate(6deg) translatey(0px)" },
      },
      float: {
        "0%, 100%": { transform: "translatey(40px)" },
        "50%": { transform: "translatey(0px)" },
      },
      shine: {
        "0%, 100%": {
          borderRadius: "40px",
          boxShadow:
            "0 0 10px 5px #fff, 0 0 20px 10px #f0f, 0 0 20px 10px #0ff; inset 2px 2px 0 #fff;",
        },
        "50%": {
          borderRadius: "10px",
          boxShadow: "none",
        },
      },
      glow: {
        "0%, 100%": {
          textShadow:
            "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #f0f, 0 0 20px #0ff, 0 0 20px #fff",
        },
        "50%": {
          textShadow: "none",
        },
      },
    },
    extend: {},
  },
  plugins: [],
};
