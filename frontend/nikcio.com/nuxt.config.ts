// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: true,
  },
  typescript: {
    shim: false,
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: [
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
        { hid: 'description', name: 'description', content: 'A personal website for Nikolaj Brask-Nielsen' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/**': { prerender: true },
  },
})
