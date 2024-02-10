/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'bg-hero': "url('../public/assets/bg-hero.jfif')",
      },
      fontSize:{
        '20rem': "11.1rem",
      },
      colors: {
        'primary': "#4D2D18",
        'secondary': "#8A6240",
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },           
    },
  },
  
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#3b82f6",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  
  plugins: [
    require("daisyui"),
    require('@shrutibalasa/tailwind-grid-auto-fit'),
  ],
}