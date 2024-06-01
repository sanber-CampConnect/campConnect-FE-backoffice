const colors = require("tailwindcss/colors");

module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      baseColor: "#4B5563",
      primary: "#064f3b",
      "primary-50": "e6edeb",
      navy: "#005F8F",
      warning: "#FACC15",
      secondary: "#9CA3AF",
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      red: colors.red,
      purple: colors.purple,
      green: "#2DABA0",
      darkGreen: "#166534",
      "green-50": "#F0FDF4",
      success: "#4ADE80",
      "success-50": "#D5EEEC",
      danger: "#EF4444",
      "danger-50": "#FEF2F2",
      "dark-red": "#991B1B",
      indigo: "#E0E7FF",
      amber: "#FEF3C7",
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
