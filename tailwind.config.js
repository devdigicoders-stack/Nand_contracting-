/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nand: {
          blue: '#0798E8',
          orange: '#FF7900',
          navy: '#071B2D',
          dark: '#17212B',
          muted: '#667085',
          light: '#F5F8FA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
