// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  srcDir: 'src',
  css: ['~/assets/css/main.css'],
  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-runtime-config
  runtimeConfig: {
    public:{
      apiBase: 'http://localhost:3000'
    }
  }
})
