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
    },
    extend: {
      colors: {
        'linear-blue': 'linear-gradient(268.05deg, #080E40 11.64%, #085DFF 111.07%)',
      },
    },
  },
  plugins: [],
}

