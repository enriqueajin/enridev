/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#179AFC",
        secondaryBlue: "#004AC0",
        darkBlue: "#061028",
        gradientPurple: "#260D52",
        gradientDarkPurple: "#180F3A",
        primaryGray: "#1E2021",
        darkGray: "#111014",
        primaryPurple: "#272868",
        darkPurple: "#1F1549",
        secondaryDarkBlue: "#070913",
        cardBlue: "#0d0f19",
        cardBorder: "#242832"
      }
    },
  },
  plugins: [],
}

