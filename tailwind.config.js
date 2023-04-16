/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#0B0D17',
        white: '#FFFFFF',
        purple: '#D0D6F9',
      },
      fontFamily: {
        sans: ['Barlow Semi Condensed', 'sans-serif'],
        bellefair: ['Bellefair', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
      },
      fontSize: {
        shM: '14px',
        nav: '16px',
        body: '18px',
        hS: '28px',
        hM: '32px',
        hL: '56px',
        hXL: '100px',
        hXXL: '150px',
      },
      lineHeight: {
        S: '25px',
        M: '28px',
        L: '32px',
      },
      letterSpacing: {
        XS: '1.25px',
        S: '2.35px',
        M: '2.7px',
        L: '3.38px',
        XL: '4.75px',
      },
      backgroundImage: {
        'background-home-desktop': "url('../public/assets/home/background-home-desktop.jpg')",
        'background-home-tablet': "url('../public/assets/home/background-home-tablet.jpg')",
        'background-home-mobile': "url('../public/assets/home/background-home-mobile.jpg')",
        'background-destination-desktop': "url('../public/assets/destination/background-destination-desktop.jpg')",
        'background-destination-tablet': "url('../public/assets/destination/background-destination-tablet.jpg')",
        'background-destination-mobile': "url('../public/assets/destination/background-destination-mobile.jpg')",
        'background-crew-desktop': "url('../public/assets/crew/background-crew-desktop.jpg')",
        'background-crew-tablet': "url('../public/assets/crew/background-crew-tablet.jpg')",
        'background-crew-mobile': "url('../public/assets/crew/background-crew-mobile.jpg')",
        'background-technology-desktop': "url('../public/assets/technology/background-technology-desktop.jpg')",
        'background-technology-tablet': "url('../public/assets/technology/background-technology-tablet.jpg')",
        'background-technology-mobile': "url('../public/assets/technology/background-technology-mobile.jpg')",
      }
    },
  },
  darkMode: 'class',
}
