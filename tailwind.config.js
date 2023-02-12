/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: { skin: { base: "var(--color-text-base)" } },
    },
    fontFamily: { sans: ["Helvetica", "sans-serif"] },
    screens: {
      md: "1024px",
    },
  },
  plugins: [],
};
