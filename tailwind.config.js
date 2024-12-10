import { transform } from 'typescript';

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
      },
      keyframes: {
        sliding: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        'slide-in': 'sliding 2s'
      }
    },
  },
  plugins: [],
}

