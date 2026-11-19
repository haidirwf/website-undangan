/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        krem: {
          DEFAULT: '#F5EFE6',
          light: '#FAF6F0',
          dark: '#E8DFD1',
        },
        soga: {
          DEFAULT: '#4A2E1B',
          dark: '#351F11',
          deep: '#231309',
        },
        emas: {
          DEFAULT: '#B08968',
          light: '#C9A788',
          dark: '#8C6746',
        },
        janur: {
          DEFAULT: '#D4AF37',
          light: '#E5C158',
          dark: '#B39126',
        },
        charcoal: {
          DEFAULT: '#2C1A0E',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        lora: ['"Lora"', 'Georgia', 'serif'],
        sans: ['"Poppins"', 'sans-serif'],
      },
      keyframes: {
        swayLeft: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        swayRight: {
          '0%, 100%': { transform: 'rotate(2deg)' },
          '50%': { transform: 'rotate(-2deg)' },
        },
        floatSoft: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        }
      },
      animation: {
        'sway-left': 'swayLeft 4s ease-in-out infinite',
        'sway-right': 'swayRight 4.5s ease-in-out infinite',
        'float-soft': 'floatSoft 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
