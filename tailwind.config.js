/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}',
  ],
  theme: {
    screens: {
      tl: {max: "1100px"},
      ms: { max: "950px" },
      cs: { max: "780px" },
      sm: { max: "639px" }
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
