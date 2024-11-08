/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customgray: 'rgb(245, 241, 241)',  
        
      },
      borderWidth: {
        '1': '1px',
      },
      width: {
        '95':'95%'
      },
      height: {
        '98':'28rem'
      }
  },
  },
  plugins: [],
}