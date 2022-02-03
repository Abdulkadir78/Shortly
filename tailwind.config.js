const defaultColors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
    colors: {
      ...defaultColors,
      primary: "hsl(180, 66%, 49%)",
      primary2: "hsl(257, 27%, 26%)",
      secondary: "hsl(0, 87%, 67%)",
      light: {
        1: "hsl(0, 0%, 75%)",
        2: "hsl(257, 7%, 63%)",
      },
      dark: {
        1: "hsl(255, 11%, 22%)",
        2: "hsl(260, 8%, 14%)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "10rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
