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
        primary: "#6A097D",
        secondary: "#3C0753",
        tertiary: "#9A0680",
        accent: "#F638DC",
      },
      fontFamily: {
        sans: ["Roboto", "Montserrat", "sans-serif"],
        serif: ["Suranna"],
      },
      backgroundImage: {
        site: "url('./assets/asia-bg6.jpg')",
        // cover: "url('./assets/bg-black6.jpg')",
      },
    },
  },
  plugins: [],
};
