/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // This specifies which files Tailwind should scan for classes
  theme: {
    extend: {}, // This allows you to extend the default theme
  },
  plugins: [], // This allows you to add Tailwind plugins
};
