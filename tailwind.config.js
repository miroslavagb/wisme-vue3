/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
        montserrat: ['Montserrat', 'sans-serif'], 
        openSans: ['Open Sans', 'sans-serif'], 
      },
    },
  },
  daisyui: {
    themes: [
      {
        projecttheme: {
          primary: '#503C72', 
        secondary: '#A4B46B', 
        accent: '#F0A7A0', // Fuchsia ir this?
        neutral: '#2F2F2F',
        light: '#EBEAF6', 
        warning: '#F07A70', 
        success: '#A4B46B',
        },
      },
      'light',
    ],
  },

  plugins: [require('daisyui')],
};
