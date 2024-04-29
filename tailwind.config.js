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
    },
    fontFamily: {
      'prompt': ['Prompt'],
    }
  },
  plugins: [],
}

