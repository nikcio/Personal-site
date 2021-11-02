module.exports = {
  mode: 'jit',
   purge: [
     './components/**/*.{js,jsx,ts,tsx,vue}',
     './pages/**/*.{js,jsx,ts,tsx,vue}',
   ],
    theme: {
      fontFamily: {
       'dubai': ['"Dubai Regular"'],
       'dubai-light': ['"Dubai Light"'],
       'dubai-medium': ['"Dubai Medium"'],
       'dubai-bold': ['"Dubai Bold"']
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'light-blue': '#94B0DA',
        'light-orange': '#FCDDBC',
        'light-red': '#EF959D',
      }),
      zIndex: {
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
        '-10': -10
      }
    }
  }
