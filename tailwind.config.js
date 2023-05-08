/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slcOrange: "#ff3e00",
        slcBlue: "#007cff",
      },
      textColor: { skin: { base: "var(--color-text-base)" } },
    },
    fontFamily: { sans: ["Helvetica", "sans-serif"] },
  },
  plugins: [],
};
