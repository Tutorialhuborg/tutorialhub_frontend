/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        off_white: {
          500: "#f3f3f3",
        },
        primary: {
          500: "#444CE7",
        },
        secondary: {
          500: "#6172F3",
        },
        dark: {
          500: "#101828",
        },
      },
    },
  },
  plugins: [],
};
