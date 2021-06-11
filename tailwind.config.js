const colors = require('tailwindcss/colors')

module.exports = {
  plugins: [],
  mode: 'jit',

  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}'
    ]
  },

  darkMode: false,

  theme: {
    extend: {
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(1,-0.05,.37,.71)'
        }
    },
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'

    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0px 4px 16px rgba(20, 20, 43, 0.08)',
      none: 'none'
    },
    colors: {
      transparent: 'transparent',
      currentColor: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.blue,
      green: colors.emerald,
      purple: colors.purple,
      pink: colors.pink,
      yellow: colors.amber
    }
  },

  variants: {
    extend: {
      backgroundColor: ['active'],
      backgroundOpacity: ['active'],
      scale: ['hover', 'group-hover'],
      padding: ['hover', 'focus'],
      inset: ['group-hover', 'hover'],
      opacity: ['group-hover', 'hover']
    }
  }
}
