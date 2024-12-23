/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        zentry:['zentry','sanf-serif'],
        general:['general','sanf-serif'],
        circular_web:['circular-web','sanf-serif'],
        "robert-medium":['robert_medium','sanf-serif'],
        "robert-regular":['robert_regular','sanf-serif'],
      }
    },
  },
  plugins: [],
}