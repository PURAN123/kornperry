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
    plugins: [
        '~/plugins/aos.client.ts',
        '~/plugins/emailjs.client.ts'
    ],   
    
    // Runtime config for environment variables
    runtimeConfig: {
        // Server-side environment variables
        SMTP_HOST: process.env.SMTP_HOST,
        SMTP_PORT: process.env.SMTP_PORT,
        SMTP_USER: process.env.SMTP_USER,
        SMTP_PASS: process.env.SMTP_PASS,
        SMTP_FROM_EMAIL: process.env.SMTP_FROM_EMAIL,
        SMTP_TO_EMAIL: process.env.SMTP_TO_EMAIL,
    },
    ssr: false,
})
