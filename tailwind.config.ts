import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0a0a',
          secondary: '#141414',
          tertiary: '#1f1f1f',
        },
        fg: {
          primary: '#ffffff',
          secondary: '#a3a3a3',
          tertiary: '#666666',
        },
        brand: {
          from: '#3b82f6',
          to: '#06b6d4',
        },
        accent: {
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
        },
        border: {
          subtle: '#262626',
          default: '#404040',
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #3b82f6, #06b6d4)',
        'gradient-hero': 'radial-gradient(ellipse at top, #1a1a2e, #0a0a0a)',
      },
      boxShadow: {
        sm: '0 2px 8px rgba(0, 0, 0, 0.3)',
        md: '0 4px 16px rgba(0, 0, 0, 0.4)',
        lg: '0 8px 32px rgba(0, 0, 0, 0.5)',
        glow: '0 0 20px rgba(59, 130, 246, 0.3)',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Noto Sans SC',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};

export default config;
