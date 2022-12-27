/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'gray-color': '#474B56',
        'primary': '#00105C',
        'secondary': '#BBE54A',
        'btn-color': '#E2FDFF',
        'link': '#E2FDFF',
        'blue-color': '#082AC8',
        'social-media-bg': '#BFD7FF'

      },
      inset: {
        '85px': '87px',
        '252px': '252px',
        '235px': '337px',
        '340px': '330px',
        '650px': '650px',
      },
      backgroundImage: {
        'blue-cart': "url('/src/images/blue-card.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      width: {
        '540px': '540px',
        '355px': '400px',
        '90%': '90%',
        '920px': '920px'
      },
      height: {
        '295px': '295px',
        '243px':'243px',
        '300px': '300px',
        '380px': '470px',
      },
      margin: {
        '14px': '14px',
        '400px': '400px',
      },
      padding:{
        '420px': '420px'
      },
      lineHeight: {
        'extra-sung': '1.2',
        '12': '3rem',
      }

    },
  },
  plugins: [],
}
