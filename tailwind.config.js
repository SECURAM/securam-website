/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        securam: {
          yellow: '#FFB800',
          navy: '#0A0054',
        },
      },
    },
  },
  plugins: [],
}