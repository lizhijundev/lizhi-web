// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/robots',
    'nuxt-simple-sitemap',
    '@nuxt/ui'
  ],
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
  colorMode: {
    storageKey: 'lzj-color-mode'
  },
  css: ['~/assets/style/app.css'],
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@use "@/assets/app.scss" as *;'
  //       }
  //     }
  //   }
  // },
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
