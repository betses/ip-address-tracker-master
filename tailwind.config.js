/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Rubik', 'sans-serif'] },
      backgroundImage: {
        desktopBG: "url('./src/assets/pattern-bg-desktop.png')",
        mobileBG: "url('./src/assets/pattern-bg-mobile.png')",
      },
    },
  },
  plugins: [],
};
