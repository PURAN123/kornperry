<template>
    <section class="relative w-full overflow-hidden lg:min-h-[600px] bg-formBg">
        <CommonHeader classNames="max-w-[90%] mx-auto sticky top-0 z-50 text-white bg-transparent" />

        <div class="relative flex flex-col-reverse md:flex-row max-w-7xl mx-auto py-10" >
           
            <div class="w-full md:w-1/2 relative z-10  mx-auto px-4 sm:px-6 lg:px-8 h-full py-5">
                <div class="flex flex-col justify-center max-w-2xl">
                    <span class="inline-block text-lg sm:text-xl text-green-400 font-medium mb-3 animate-fade-in">
                        Talent Acquisition Services
                    </span>

                    <h1
                        class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight animate-fade-in-up text-textPrimary">
                        Your trusted partner throughout the talent lifecycle
                    </h1>

                    <div class="animate-fade-in-up">
                        <a href="/contact"
                            class="inline-flex items-center px-6 py-3 text-base sm:text-lg font-medium bg-primary text-white rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                            Let's Talk.
                        </a>
                    </div>
                </div>
            </div> 
            <div class="w-full md:w-1/2">   
            <img src="/images/contact/trust.jpg" alt="Professional consultant in a business setting"
                class="w-full h-full object-cover x]" loading="eager" />
            </div>
        </div>

    </section>
</template>

<script>
export default {
    name: 'TalentBanner'
}
</script>

<style scoped>
.animate-fade-in {
    animation: fadeIn 0.8s ease-in;
}

.animate-fade-in-up {
    animation: fadeInUp 1s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>