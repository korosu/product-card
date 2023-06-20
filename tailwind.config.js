/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Dark_cyan: "hsl(158, 36%, 37%)",
        Cream: "hsl(30, 38%, 92%)",
        Very_dark_blue: "hsl(212, 21%, 14%)",
        Dark_grayish_blue: "hsl(228, 12%, 48%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
