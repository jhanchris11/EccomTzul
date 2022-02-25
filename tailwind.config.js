module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      gridAutoColumns: {
        '2fr': 'minmax("288px", 2fr)',
      },
      fontFamily:{
        fvolkhov : ['Volkhov', 'sanserif'],
        fmate: ['Mate', 'sanserif']
      },
      transitionProperty: {
        'height': 'height'
      },
    },
  },
  plugins: [],
}
