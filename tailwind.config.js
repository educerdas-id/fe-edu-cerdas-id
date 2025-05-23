/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        biru1: "#E4EEFF",
      },
      fontFamily: {
        poppins: [, "Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      transitionDuration: {
        2000: "2000ms",
      },
    },
  },

  plugins: [
    daisyui,
    require("tailwindcss-animated"),
    require("tw-elements/dist/plugin.cjs"),
  ],
};
