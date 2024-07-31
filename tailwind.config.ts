import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-green": "var(--primary-green)",
        "secondary-green": "var(--secondary-green)",
        "dark-green": "var(--dark-green)",
        "primary-grey": "var(--primary-grey)",
        "primary-bg": "var(--primary-bg)",
        grey: "var(--grey)",
      },
      boxShadow: {
        green: "0 4px 6px rgba(0, 255, 0, 0.1)",
      },
      borderColor: {
        "primary-blue": "#306DE8",
      },
      width: {
        "pera-width": "50.75rem",
      },
      blur: {
        circleBlur: "15rem",
      },
      border: {
        borderPx: "0.063rem",
      },
      borderWidth: {
        "0.063": "0.063rem",
        "0.5": "0.5px",
      },
      height: {
        "circle-large-height": "21.875rem",
        "1pixel": "2px",
      },
      margin: {
        "1px": "1px",
      },
      top: {
        circleTop: "70.625rem",
      },
      transitionDelay: {
        50: "50ms",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      spacing: {
        "xx-large": "var(--xx-large)",
      },
      fontSize: {
        h1: "var(--h1)",
        inter: [
          "var(--p-large)",
          {
            lineHeight: "1.625rem",
            letterSpacing: "0.2em",
          },
        ],
      },
    },
  },
  variants: {
    extend: {
      padding: ["responsive"],
      boxShadow: ["hover"],
    },
  },
  plugins: [require("tailwindcss-animated")],
};

export default config;
