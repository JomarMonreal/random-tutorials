import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: [ "Rubik", "sans-serif"],
        sans: ["Rubik", "sans-serif"]
      },
      colors: {
        primary: {
          100: "#0f0f52",
          200: "#101070",
          300: "#1b1b74",
          400: "#1b1b8a",
          500: "#272796",
          600: "#2727a5",
          700: "#3333b8",
          800: "#3333c0",
          900: "#3f3fdb"
        },
        secondary: {
          500: "#ffb703",
          700: "#fb8500"
        },
        backdrop: "#542A"
      }
    },
  },
  plugins: [],
};
export default config;
