// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image"],
  tailwindcss:{
    cssPath: ["./assets/css/tailwind.css", 
      {injectPosition: "first"}],
      configPath: "tailwind.config",
      config:{},
      viewer: true,
      exposeConfig: true
  },
  nitro: {
    preset: 'vercel-edge',
  },
  app: {
    head: {
      title: "Merishaw School"
    }
  }
})