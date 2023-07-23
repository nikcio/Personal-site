// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: true,
  },
  typescript: {
    shim: false,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/css/transitions.css',
  ],
  app: {
    head: {
      title: 'Nikcio.com',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'A personal website for Nikolaj Brask-Nielsen showing projects, experience and social information.' },
        { hid: 'keywords', name: 'keywords', content: 'nikcio, Nikolaj Brask-Nielsen, Personal website, Portfolio, GitHub, LinkedIn, Nikcio, Umbraco' },
        { hid: 'robots', name: 'robots', content: 'index, follow' },
        { hid: 'http-equiv', "http-equiv": 'Content-Type', content: 'text/html; charset=utf-8' },
        { hid: 'language', name: 'language', content: 'English' },
        { hid: 'revisit-after', name: 'revisit-after', content: '7 days' },
        { hid: 'author', name: 'author', content: 'Nikolaj "Nikcio" Brask-Nielsen' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://nikcio.com/' },
        { hid: 'og:title', property: 'og:title', content: 'Nikcio' },
        { hid: 'og:description', property: 'og:description', content: 'A personal website for Nikolaj Brask-Nielsen showing projects, experience and social information.' },
        { hid: 'og:image', property: 'og:image', content: 'https://nikcio.com/SoMe.jpg' },
        { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:url', property: 'twitter:url', content: 'https://nikcio.com/' },
        { hid: 'twitter:title', property: 'twitter:title', content: 'Nikcio' },
        { hid: 'twitter:image', property: 'twitter:image', content: 'https://nikcio.com/SoMe.jpg' },
        { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#ef6fec' },
        { hid: 'msapplication-config', name: 'msapplication-config', content: '/favicon/browserconfig.xml' },
        { hid: 'theme-color', name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { hid: 'apple-touch-icon', rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { hid: 'icon-32', rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { hid: 'icon-16', rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
        { hid: 'manifest', rel: 'manifest', href: '/favicon/site.webmanifest' },
        { hid: 'mask-icon', rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#ef6f6c' },
        { hid: 'shortcut icon', rel: 'shortcut icon', href: '/favicon.ico' }
      ],
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/**': { prerender: true },
  },
  build: { 
    transpile: [
      '@fortawesome/vue-fontawesome'
    ], 
  }
})
