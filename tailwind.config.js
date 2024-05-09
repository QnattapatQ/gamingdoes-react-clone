/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '360px',
      'md': '576px',
      'lg': '768px',
      'xl': '992px',
      '2xl': '1200px',
      '3xl': '1280px',
      '4xl': '1440px',        
    },
    extend: {
      colors: {
        'main-blue': '#085DFF',
      },
      keyframes: {
        mariomove: {
          '0%' : { transform: 'translate3d(-45px, 0px, 0px)' },
          '25%': { transform: 'translate3d(475px, 0px, 0px)' },
          '50%': { transform: 'translate3d(950px, 0px, 0px)' },
          '75%': { transform: 'translate3d(1425px, 0px, 0px)' },
          '100%': { transform: 'translate3d(1900px, 0px, 0px)' },
        }
      },
      animation: {
        'mario-move': 'mariomove 20s linear infinite',
      },
    },
    fontFamily: {
      'prompt': ['Prompt'],
    }
  },
  plugins: [],
}

