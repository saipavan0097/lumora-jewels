/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#C9A227',
        ivory: '#FAF7F2',
        noir: '#111111',
        charcoal: '#2E2E2E',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};
