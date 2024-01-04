/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        circleanimatelight: 'circleanimatelight 5s linear infinite',
        backanimate: 'backanimate 15s linear infinite',
      },
      keyframes: {
        circleanimatelight: {
          '0%': {
            'box-shadow': '0 0 50px #0f0, inset 0 0 50px #0f0',
            filter: 'hue-rotate(0deg)'
          },
          '20%': {
            'box-shadow': '0 0 60px #0f0, inset 0 0 60px #0f0',
          },
          '40%': {
            'box-shadow': '0 0 80px #0f0, inset 0 0 80px #0f0',
          },
          '60%': {
            'box-shadow': '0 0 100px #0f0, inset 0 0 100px #0f0',
          },
          '80%': {
            'box-shadow': '0 0 40px #0f0, inset 0 0 40px #0f0',
          },
          '100%': {
            'box-shadow': '0 0 50px #0f0, inset 0 0 50px #0f0',
            filter: 'hue-rotate(100deg)'
          }
        },
        backanimate: {
          '0%': { transform: 'scale(0)', opacity: '1', bottom: '0' ,},
          '100%': { transform: 'scale(10)', opacity: '0', bottom: '80vh' }
        }
      },
    },
  },
  plugins: [],
}

