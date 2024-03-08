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
        primary: "#EF4040",
        secondary: "#3C0753",
        tertiary: "#FC4F00",
        accent: "#5E1675",
      },
      fontFamily: {
        sans: ["Roboto", "Montserrat", "sans-serif"],
        serif: ["Suranna"],
      },
    },
  },
  plugins: [],
};
