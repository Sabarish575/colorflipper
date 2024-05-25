/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.{html,js}"],
  theme: {
    extend: {},
    screens:{
      'sm':'640px',
      'md': '740px',
    }
    },
  plugins: [],
}

