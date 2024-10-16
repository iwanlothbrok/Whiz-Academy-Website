/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mainGreen: '#0fea7f',  // Custom color
      },
    },
  },
  plugins: [],
};
