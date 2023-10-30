// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js,ts}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui"),require("@tailwindcss/line-clamp")],
// }

// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/line-clamp")
  ],
};
