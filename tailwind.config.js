/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Agrega aquí tu paleta personalizada
        // ejemplo:
        // primary: '#1D4ED8',
        // secondary: '#64748B',
        // accent: '#F59E42',
      },
    },
  },
  plugins: [],
};
