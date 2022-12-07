/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}',
    './index.html',
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'hero': "url('/src/assets/images/vintage-ceiling-light-lamp.jpg')",
        'most-popular': "url('./src/assets/images/most-popular.jpg')",
        'blackpink': "url(./src/assets/images/bpink.jpg')",
        'tops': "url(./src/assets/images/tops.jpg')",
        'kdrama': "url(./src/assets/images/kdrama.jpeg')",

        // categories
        'all-products': "url('/src/assets/images/categories/all.jpg')",
        'ceilings': "url('/src/assets/images/categories/ceilings.jpg')",
        'chandeliers': "url('/src/assets/images/categories/chandeliers.jpg')",
        'lamps': "url('/src/assets/images/categories/lamps.jpg')",
        'bulbs': "url('/src/assets/images/categories/bulbs.jpg')",
      }
    },
  },
  plugins: [],
}