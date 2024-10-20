// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["@/assets/css/styles.css"],
    postcss: {
        config: true,
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
    }
});