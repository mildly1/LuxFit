/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        'cream-dark': '#F0EBE1',
        brown: {
          50: '#FAF5EE',
          100: '#F0E6D3',
          200: '#E0C9A6',
          300: '#C9A87C',
          400: '#B08855',
          500: '#9B6E38',
          600: '#7D5528',
          700: '#5E3D1A',
          800: '#3E280E',
          900: '#1F1407',
        },
        sage: '#E8EDE4',
        'sage-dark': '#D1DAC9',
        lavender: '#EDE9F5',
        'lavender-dark': '#D9D1EE',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(0,0,0,0.06)',
        'medium': '0 8px 40px rgba(0,0,0,0.10)',
        'brown': '0 4px 20px rgba(155, 110, 56, 0.2)',
      }
    },
  },
  plugins: [],
}
