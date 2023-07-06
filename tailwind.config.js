import { colors } from 'tailwindcss/colors'
import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export const darkMode = ['class']
export const content = [
  './app/**/*.{js,ts,jsx,tsx}',
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',

  // Or if using `src` directory:
  './src/**/*.{js,ts,jsx,tsx}',
]
export const theme = {
  container: {
    center: true,
    padding: '1.5rem',
    screens: {
      '2xl': '1360px',
    },
  },
  extend: {
    fontFamily: {
      sans: ['var(--font-inter)', ...fontFamily.sans],
    },
    colors: {
      ...colors,
      'light-gold': '#f5bc51',
      'dark-gold': '#533519',
    },
  },
}
export const plugins = [require('tailwindcss-animate'), require('@tailwindcss/typography')]