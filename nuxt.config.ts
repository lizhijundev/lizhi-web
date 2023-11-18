// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    'nuxt-icon',
    'nuxt-simple-sitemap',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/device'
  ],
  // @ts-ignore
  app: {
    head: {
      title: 'My App',
      htmlAttrs: {
        lang: 'zh-CN'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: 'My amazing site.' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no' },
      ],
    }
  },
  plugins: [{
    src: '~/plugins/scroller.js',
    mode: 'client',
  }],
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
    storageKey: 'lzj-color-mode'
  },
  css: ['~/assets/style/app.scss'],
  tailwindcss: {
    exposeConfig: true
  },
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
  devServer: {
    host: '0.0.0.0',
    port: 3001
  }
})
