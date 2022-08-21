/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid

        // Complex site-specific column configuration
        solution: "minmax(100px, auto)   1fr ",
      },
    },
    plugins: [require("@tailwindcss/forms")],
  },
};
