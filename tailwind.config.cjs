/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['San Francisco', 'sans-serif'],
      },
      boxShadow: {
        neuromorphic: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff',
      },
      colors: {
        primary: '#9d5cff',
        secondary: '#C299FF',
        background: '#e0e0e0',
      }
    },
  },
}
