// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/robots',
    'nuxt-simple-sitemap',
    '@nuxt/ui'
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no',
      title: 'My App',
      meta: [
        { name: 'description', content: 'My amazing site.' }
      ],
    }
  },
  css: ['~/assets/style/app.scss'],
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },
  experimental: {
    writeEarlyHints: false,
  },
  vite: {
    server: {
      host: '0.0.0.0'
    }
  }
})
