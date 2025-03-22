import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-28px)' },
        },
        minibounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      animation: {
        bounce: 'bounce 1.0s infinite',
        'bounce-delay-1': 'bounce 1.0s infinite 0.2s',
        'bounce-delay-2': 'bounce 1.0s infinite 0.4s',
        minibounce: 'minibounce 0.7s infinite',
        'minibounce-delay-1': 'minibounce 0.7s infinite 0.2s',
        'minibounce-delay-2': 'minibounce 0.7s infinite 0.4s',
      },
      colors: {
        ds_gray: {
          200: 'rgba(185, 180, 193, 1)',
          400: 'rgba(121, 120, 137, 1)',
          600: '#3A3744',
        },
        ds_overlay: 'rgba(58, 55, 68, 0.48)',
      },
    },
  },
  plugins: [],
} satisfies Config;
