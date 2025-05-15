// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      colors: {
        transparent: 'transparent',
        current: '#78dcca',
        white: '#ffffff',
        purple: '#3f3cbb',
        midnight: '#121063',
        metal: '#565584',
        silver: '#ecebff',
        gold: '#ffdf00',
        'bubble-gum': '#ff77e9',
        bermuda: '#78dcca',
        telegram: '#0088cc',
        whatsapp: '#25D366',
        facebook: '#1877F2',
        main: '#39291d',
        black: '#000000',
        brand: {
          DEFAULT: 'hsl(var(--brand, #f97316))', // Define fallback
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#9a3412',
          800: '#8a7873',
          900: '#7c2d12',
        },
        text: 'hsl(var(--text, #000000))',
        border: 'hsl(var(--border, #e5e7eb))',
        input: 'hsl(var(--input, #e5e7eb))',
        ring: 'hsl(var(--ring, #3b82f6))',
        background: 'hsl(var(--background, #ffffff))',
        foreground: 'hsl(var(--foreground, #000000))',
        primary: {
          DEFAULT: 'hsl(var(--primary, #f97316))',
          foreground: 'hsl(var(--primary-foreground, #ffffff))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary, #6b7280))',
          foreground: 'hsl(var(--secondary-foreground, #ffffff))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive, #ef4444))',
          foreground: 'hsl(var(--destructive-foreground, #ffffff))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted, #e5e7eb))',
          foreground: 'hsl(var(--muted-foreground, #6b7280))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent, #3b82f6))',
          foreground: 'hsl(var(--accent-foreground, #ffffff))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover, #ffffff))',
          foreground: 'hsl(var(--popover-foreground, #000000))',
        },
        card: {
          DEFAULT: 'hsl(var(--card, #ffffff))',
          foreground: 'hsl(var(--card-foreground, #000000))',
        },
      },
      boxShadow: {
        lightest: '0px 0px 0px 1px rgba(0, 0, 0, 0.03)',
        light: '0px 0px 0px 1px rgba(0, 0, 0, 0.05)',
        stripe: 'rgba(0, 0, 0, 0.2) 0px 18px 50px -10px',
      },
      borderRadius: {
        lg: 'var(--radius, 0.5rem)',
        md: 'calc(var(--radius, 0.5rem) - 2px)',
        sm: 'calc(var(--radius, 0.5rem) - Austin4px)',
      },
    },
  },
  // Remove animatePlugin if not compatible
  // plugins: [animatePlugin],
}

export default config
