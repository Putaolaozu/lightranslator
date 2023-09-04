/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        squize: {
          "0%": { transform: "scale(0.8)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        squizeOut: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "30%": { transform: "scale(1.1)", opacity: "0.7" },
          "100%": { transform: "scale(0)", opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "10%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
        dropDown: {
          "0%": { transform: "scaleY(0) translateY(-30%)", opacity: "0" },
          "50%": { transform: "scaleY(1) translateY(0%)", opacity: "0.7" },
          "70%": { transform: "scaleY(1.1) translateY(0%)", opacity: "0.8" },
          "100%": { transform: "scaleY(1) translateY(0%)", opacity: "1" },
        },
        pullUp: {
          "0%": { transform: "scaleY(1)", opacity: "1" },
          "30%": { transform: "scaleY(1.1) translateY(0%)", opacity: "0.7" },
          "100%": { transform: "scaleY(1) translateY(-20%)", opacity: "0" },
        },
      },
      animation: {
        squize: "0.4s ease-in-out 1 squize",
        squizeOut: "0.4s ease-in-out 1 squizeOut",
        fadeIn: "0.7s ease-in 1 fadeIn",
        fadeOut: "0.8s ease-in 1 reverse fadeIn forward",
        dropDown: "0.4s ease-in-out 1 dropDown",
        pullUp: "0.4s ease-in-out 1 pullUp",
      },
    },
  },
  plugins: [],
};
