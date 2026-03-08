import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf8f6',
          100: '#f9f0eb',
          200: '#f2e0d6',
          300: '#e8c9b8',
          400: '#d4a88c',
          500: '#c48966',
          600: '#b3724a',
          700: '#955a3d',
          800: '#7a4b35',
          900: '#643f2e',
        },
        accent: {
          gold: '#c9a227',
          warm: '#d4a574',
          sky: '#7eb8da',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-crimson)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(12px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0,0,0,0.06)',
        card: '0 4px 24px rgba(0,0,0,0.06)',
        lift: '0 8px 32px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
