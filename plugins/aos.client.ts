import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
    if (typeof window !== 'undefined') {
        nuxtApp.vueApp.use({
            install() {
                AOS.init({
                    duration: 800,
                    easing: 'ease-out-cubic',
                    once: true,
                    offset: 50,
                })
            }
        })
    }
}) 