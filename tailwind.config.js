/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FFF9EF',
        cream: '#F3E8D5',
        'dusty-rose': '#D9A6A6',
        'muted-blush': '#F2D6D0',
        'sage-green': '#9EAD91',
        'botanical-green': '#455B45',
        'vintage-brown': '#8A6A52',
        'soft-gold': '#C7A46A',
        'dark-wood': '#2C1E19',
        'vintage-ink': '#33231B',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        bodoni: ['"Bodoni Moda"', 'serif'],
        dancing: ['"Dancing Script"', 'cursive'],
        greatvibes: ['"Great Vibes"', 'cursive'],
        caveat: ['"Caveat"', 'cursive'],
        lora: ['"Lora"', 'serif'],
        baskerville: ['"Libre Baskerville"', 'serif'],
      },
      boxShadow: {
        'book-outer': '0 25px 60px -15px rgba(44, 30, 25, 0.4), 0 0 0 1px rgba(138, 106, 82, 0.15)',
        'book-spine': 'inset 12px 0 16px -8px rgba(44, 30, 25, 0.35)',
        'vintage-paper': 'inset 0 0 40px rgba(138, 106, 82, 0.08), 0 2px 8px rgba(0,0,0,0.06)',
        'sticker': '2px 4px 12px rgba(44, 30, 25, 0.15), 0 1px 3px rgba(44, 30, 25, 0.1)',
      }
    },
  },
  plugins: [],
}

