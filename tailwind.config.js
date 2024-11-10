/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#179AFC",
        darkBlue: "#061028",
        gradientPurple: "#260D52",
        gradientDarkPurple: "#180F3A"
      }
    },
  },
  plugins: [],
}

