import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ IMPORTANT
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: daisyui(),
};
