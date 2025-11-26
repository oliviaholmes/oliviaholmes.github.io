/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // White & Gold Theme - LEGO-inspired
        gold: {
          50: '#FFFEF5',
          100: '#FEF9E7',
          200: '#F4E5C2',
          300: '#E5C158',
          400: '#D4AF37',
          500: '#C9A942',
          600: '#B8941C',
          700: '#9D7E19',
          800: '#7A6114',
          900: '#5A470F',
          primary: '#D4AF37',
          light: '#F4E5C2',
          dark: '#B8941C',
          bright: '#FFD700',
        },
        // LEGO-inspired accent colors
        lego: {
          red: '#D11E1E',
          blue: '#0055BF',
          yellow: '#FFCB05',
          green: '#00852B',
        },
        // Neutral backgrounds
        neutral: {
          white: '#FFFFFF',
          smoke: '#FAFAFA',
          light: '#F5F5F5',
          gray: '#E5E5E5',
          dark: '#1A1A1A',
          charcoal: '#242424',
        }
      },
      boxShadow: {
        'gold-sm': '0 2px 8px rgba(212, 175, 55, 0.15)',
        'gold-md': '0 4px 16px rgba(212, 175, 55, 0.25)',
        'gold-lg': '0 8px 24px rgba(212, 175, 55, 0.35)',
        'gold-xl': '0 12px 32px rgba(212, 175, 55, 0.4)',
        'brick': '0 4px 0 rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)',
        'brick-hover': '0 8px 0 rgba(0, 0, 0, 0.1), 0 12px 24px rgba(212, 175, 55, 0.3)',
      },
      borderRadius: {
        'brick': '8px',
      },
      fontFamily: {
        'clean': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
        'snap-together': 'snap-together 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'build-up': 'build-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'shimmer-gold': 'shimmer-gold 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}