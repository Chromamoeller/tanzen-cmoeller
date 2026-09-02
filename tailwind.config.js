/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rye: ['Rye', 'cursive'],
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-150%)' },
          '100%': { transform: 'translateX(150%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
