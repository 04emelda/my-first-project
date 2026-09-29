/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        wine: {
          50: '#fdf2f4', 100: '#fce7eb', 200: '#f9d0d9', 300: '#f4a8b8',
          400: '#ec7191', 500: '#e04971', 600: '#d12a5a', 700: '#b01c49',
          800: '#921a40', 900: '#7b1a3a', 950: '#430b1f',
        },
        gold: {
          50: '#fefbe8', 100: '#fef6c3', 200: '#fdeb8a', 300: '#fcd956',
          400: '#f9c431', 500: '#efab1c', 600: '#d08712', 700: '#a96313',
          800: '#8a4d16', 900: '#723f17',
        },
        charcoal: {
          50: '#f6f6f6', 100: '#e7e5e4', 200: '#d7d3d0', 300: '#bfb8b3',
          400: '#a39892', 500: '#8a7d76', 600: '#726561', 700: '#5d5350',
          800: '#443d3b', 900: '#2d2826', 950: '#1c1817',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideDown: { '0%': { opacity: '0', transform: 'translateY(-10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        scaleIn: { '0%': { opacity: '0', transform: 'scale(0.95)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
        shimmer: { '0%': { backgroundPosition: '-1000px 0' }, '100%': { backgroundPosition: '1000px 0' } },
      },
    },
  },
  plugins: [],
};
