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
        glass: 'rgba(30,41,59,0.85)', // dark glass
        darkGlass: 'rgba(17,24,39,0.95)', // even darker glass
        textMain: '#f8fafc', // light text
        textLight: '#f8fafc', // light text
        bgMain: '#1e293b', // dark slate
        bgDark: '#0f172a', // very dark slate
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

