/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#6495ED",
      },
      gridTemplateColumns: {
        // Simple 16 column grid

        // Complex site-specific column configuration
        solution: "minmax(100px, auto)   1fr ",
        news: "1fr 3fr 1fr",
      },
    },
    plugins: [require("@tailwindcss/forms")],
  },
};
