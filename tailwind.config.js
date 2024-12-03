/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Open Sans"', "sans-serif"],
        secondary: ['"Source Sans 3"', "sans-serif"],
      },
      colors: {
        primary: {
          light: "var(--color-primary-light)",
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
          background: "var(--background-light)",
        },
        secondary: {
          light: "var(--color-secondary-light)",
          DEFAULT: "var(--color-secondary)",
          dark: "var(--color-secondary-dark)",
        },
      },
      screens: {
        xl: "1200px",
      },
      boxShadow: {
        "custom-light": "4px 0px 10px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
