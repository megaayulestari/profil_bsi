/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'], /**file yang bisa dibaca taiwind hanya index.html */
  theme: {
    container: {
      center: true,
      padding: '16pxp'
    },
    extend: {
      colors: { /**menambah warna default */
        primary: '#c026d3',
        dark: '#0f172a',
        secondary: '#64748b'
      },
      screens:{ /**mengubah ukuran 2xl menjadi 1320px*/
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}

