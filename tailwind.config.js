/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      animation:{
        'slide-flow': 'oxxo 3s ease-in-out infinite alternate'
      },
      backgroundImage: {
        "new-bg": "url('./img/section_new_bg.png')"
      },
    },
  },
  plugins: [],
}
