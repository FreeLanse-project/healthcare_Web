/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0C1B2F",
        secondary: "#fff",
        text_blue: "#66CCFF",
        text_gray: "#9CA3AF",
      },
    },
  },
  plugins: [],
};
