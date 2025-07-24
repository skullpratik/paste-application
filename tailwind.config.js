/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        modern: ['Poppins', 'Inter', 'sans-serif'],
      },
      colors: {
        primary: '#6366f1',
        accent: '#f472b6',
        glass: 'rgba(255,255,255,0.15)',
        darkGlass: 'rgba(30,41,59,0.7)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        neumorph: '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

