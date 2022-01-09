import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        }
    },
    nitro: {
        preset: 'server'
    },
    server: {
        https: true
    },
    publicRuntimeConfig: {
        BASE_URL: process.env.BASE_URL
    },
})
