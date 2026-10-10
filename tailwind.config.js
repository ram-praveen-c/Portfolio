/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 950: '#04060d', 900: '#070b17', 800: '#0b1226', 700: '#111a33' },
        electric: '#3b82f6',
        cyan: { glow: '#22d3ee' },
        violet: { soft: '#8b5cf6' },
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk Variable"', '"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        wave: { '0%,100%': { transform: 'scaleY(.25)' }, '50%': { transform: 'scaleY(1)' } },
        scan: { '0%': { transform: 'translateY(0)' }, '100%': { transform: 'translateY(100%)' } },
        drift: { '0%': { backgroundPosition: '0 0' }, '100%': { backgroundPosition: '64px 64px' } },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        wave: 'wave 1.2s ease-in-out infinite',
        scan: 'scan 3s linear infinite',
        drift: 'drift 12s linear infinite',
      },
    },
  },
  plugins: [],
}
