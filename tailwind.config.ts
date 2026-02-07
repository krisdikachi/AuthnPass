import type { Config } from 'tailwindcss'


const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './contexts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'pulse-light': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        'marquee-reviews': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // This assumes the flex container is twice the width of one set of items
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'pulse-light': 'pulse-light 5s ease-in-out infinite alternate',
        'marquee-reviews': 'marquee-reviews 40s linear infinite', // Adjust duration as needed
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: (arg0: { [x: string]: { 'animation-play-state': string } }) => void }) {
      const newUtilities = {
        '.animation-pause': {
          'animation-play-state': 'paused',
        },
        '.animation-running': {
          'animation-play-state': 'running',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
export default config
