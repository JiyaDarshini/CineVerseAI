/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cine: {
          black: '#0A0A0B',
          graphite: '#141416',
          panel: '#1B1B1E',
          panel2: '#202023',
          line: '#302f33',
          linesoft: '#232326',
          fog: '#96959c',
          fogdim: '#6d6c72',
          offwhite: '#F1F0EC',
          gold: '#C6A24D',
          golddim: '#8a763c',
          goldbright: '#E8C878',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', '"Cinzel"', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(198, 162, 77, 0.35)',
        'gold-glow-lg': '0 0 45px rgba(198, 162, 77, 0.45)',
        'gold-subtle': '0 0 15px rgba(198, 162, 77, 0.15)',
      },
      animation: {
        'gold-sheen': 'goldSheen 4s ease-in-out infinite',
        'spotlight-drift': 'spotlightDrift 12s ease-in-out infinite alternate',
        'camera-bob': 'cameraBob 6s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.2s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        goldSheen: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        spotlightDrift: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(30px, -20px) scale(1.08)' },
          '100%': { transform: 'translate(-20px, 25px) scale(0.95)' },
        },
        cameraBob: {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(0.8deg)' },
          '100%': { transform: 'translateY(6px) rotate(-0.5deg)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        }
      }
    },
  },
  plugins: [],
}
