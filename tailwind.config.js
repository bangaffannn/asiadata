/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#AA14F0",
        secondary: "#810CA8",
        tertiary: "#79018C",
        accent: "#B030B0",
      },
      fontFamily: {
        sans: ["Roboto", "Montserrat", "sans-serif"],
        serif: ["Suranna"],
      },
    },
  },
  plugins: [],
};
