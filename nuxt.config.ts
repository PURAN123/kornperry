// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        config: {},
        viewer: true,
        exposeConfig: false,
    },
    plugins: ['~/plugins/aos.client.ts'],   
})
