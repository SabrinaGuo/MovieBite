// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    tmdbAccessToken: process.env.TMDB_API_ACCESS_TOKEN,
    public: {
      tmdbBaseUrl: "https://api.themoviedb.org/3",
      imageBaseUrl: "https://image.tmdb.org/t/p/",
    },
  },
  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/_color.scss";`,
        },
      },
    },
  },
  css: ["~/assets/main.scss"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
});
