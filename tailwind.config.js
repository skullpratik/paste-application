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
        primary: '#2563eb', // deep blue
        accent: '#f59e42', // orange accent
        glass: 'rgba(255,255,255,0.85)',
        darkGlass: 'rgba(30,41,59,0.85)',
        textMain: '#1e293b', // dark slate
        textLight: '#f8fafc', // near white
        bgMain: '#f1f5f9', // light gray
        bgDark: '#1e293b', // dark slate
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.17)',
        neumorph: '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

