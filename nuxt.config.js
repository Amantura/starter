export default {

  head: require('./configs/head'),

  server: {
    port: 4001
  },

  css: [
    '@/assets/css/app.css',
    '@/assets/css/tailwind.css',
    '@/assets/css/fontawesome.css',
  ],

  router: {
    async scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      }

      // eslint-disable-next-line require-await
      const findEl = async (hash, x = 0) => {
        return (
          document.querySelector(hash) ||
          new Promise((resolve) => {
            if (x > 50) {
              return resolve(document.querySelector('body'))
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1))
            }, 100)
          })
        )
      }

      if (to.hash) {
        const el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }

      return { x: 0, y: 0 }
    }
  },

  plugins: [
    { src: '@/plugins/v-mask', ssr: false },
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-fonts', {
      families: {
        Manrope: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      },
      display: 'swap'
    }]

  ],

  modules: [
    '@nuxtjs/axios'
  ],

  axios: {},

  build: {
  }

}
