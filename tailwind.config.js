module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    borderRadius: {
      'sm': '0.19rem',
    },
    extend: {
      gridTemplateColumns: {
        'a-1-a': 'auto 1fr auto',
      },
      height: {
        '1px': '1px',
      },
      width: {
        '97': '97%;',
      },
    },
    fontFamily: {
      'code': ['Source Code Pro', 'Sans-serif'],
      'sans': ['Source Sans Pro', 'Sans-serif'],
    },
  },
  variants: {
    extend: {
      borderWidth: ['last'],
      margin: ['last', 'first'],
      padding: ['first', 'last'],
    },
  },
  plugins: [],
};
