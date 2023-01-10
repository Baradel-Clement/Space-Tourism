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
        bellefair: ['Bellefair', 'sans-serif']
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
        M: '32px',
      },
      letterSpacing: {
        S: '2.35px',
        M: '2.7px',
        L: '4.75px',
      }
    },
  },
  darkMode: 'class',
}
