const colors = require("tailwindcss/colors");

module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#064f3b",
      secondary: "#e6edeb",
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      red: colors.red,
      purple: colors.purple,
      green: "#2DABA0",
      success: "#4ADE80",
      danger: "#EF4444",
    },
    fontSize: {
      sm: [
        "12px",
        {
          lineHeight: "16px",
        },
      ],
      base: [
        "14px",
        {
          lineHeight: "17.5px",
        },
      ],
      lg: [
        "20px",
        {
          lineHeight: "28px",
        },
      ],
      xl: [
        "24px",
        {
          lineHeight: "32px",
        },
      ],
      "2xl": [
        "28px",
        {
          lineHeight: "36px",
        },
      ],
    },
  },
  plugins: [],
};
