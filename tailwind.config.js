/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#14143c',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}