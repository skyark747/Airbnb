/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customgray: 'rgb(245, 241, 241)',  
        custompink: 'rgb(255, 0, 85)',
        
      },
      borderWidth: {
        '1': '1px',
      },
      width: {
        '95': '95%',
        '98':'28rem'
      },
      height: {
        '98': '28rem',
        '102': '34rem',
        '18':'4.5rem'
      }
  },
  },
  plugins: [],
}