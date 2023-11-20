/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      '3rem': '3rem',
    },
    lineHeight: {
      'normal': 'normal',
    },
    padding: {
      '8rem': '8rem',
      '4rem': '4rem',
    },
    extend: {
      colors: {
        'primary-color': '#1E85E8',
        'text-color': '#222222',
        'bg-color': '#FFFFFF',
      },
      backgroundImage: {
        'opendoor': "url('img/opendoor.png')",
      },
      maxWidth: {
        'header-div': '960px',
      },
      height: {
        '80vh': '80vh',
      },
      borderRadius: {
        '10rem': '10rem',
      },
    },
  },
  plugins: [],
}