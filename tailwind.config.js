/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Agrega aquí tu paleta personalizada
        // ejemplo:
        primary: '#F0F4F8',
        //gris azulado claro 60
        secondary: '#6B7280',
        //gris medio 30
        accent: '#10B981',
        //verde menta 10
        //NAVBAR COLORS
        hexagonShadowColor:'#334155',
        hexagonMainColor:'#e2e8f0',
        hexagonTopColor:'#f1f5f9',
        gradientColorLeft: '#f59e0b',
        gradientColorRight: '#ef4444',
        navLinkHover:'#f59e0b',
        //HOUSE CARD COLORS
        cardText: '#6B7280',
        cardPriceTextHover: '#f59e0b',
        locationTextBg:'#212121ab',
      },
    },
  },
  plugins: [],
};
