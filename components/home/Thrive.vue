<template>
    <section class="bg-primary text-white py-16 px-8 text-center">
        <div class="max-w-7xl mx-auto">
            <div class="mb-12">
                <h2 class="text-4xl mb-4 font-bold text-textPrimary leading-tight">
                    Transforming the Future of Work <br />
                    Through <span class="text-white font-bold">Innovation</span>
                </h2>
            </div>

            <div class="flex flex-wrap justify-around mb-12">
                <div class="flex flex-col items-center mx-4 mb-8 max-w-[250px]">
                    <div class="w-[150px] h-[150px] rounded-full flex justify-center items-center mb-6 relative">
                        <svg class="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="8"
                                stroke-dasharray="283" stroke-dashoffset="99.05" class="text-textPrimary" />
                        </svg>
                        <span class="text-4xl font-bold relative">65%</span>
                    </div>
                    <p class="text-sm leading-relaxed">
                        Trusted by 65% of Growing Businesses<br />
                        Helping mid-sized companies streamline HR processes

                    </p>
                </div>

                <div class="flex flex-col items-center mx-4 mb-8 max-w-[250px]">
                    <div class="w-[150px] h-[150px] rounded-full flex justify-center items-center mb-6 relative">
                        <svg class="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="8"
                                stroke-dasharray="283" stroke-dashoffset="79.24" class="text-textPrimary" />
                        </svg>
                        <span class="text-4xl font-bold relative">72%</span>
                    </div>
                    <p class="text-sm leading-relaxed">
                        Boosting Efficiency for 72% of Clients<br />
                        Reducing hiring costs and improving team productivity

                    </p>
                </div>

                <div class="flex flex-col items-center mx-4 mb-8 max-w-[250px]">
                    <div class="w-[150px] h-[150px] rounded-full flex justify-center items-center mb-6 relative">
                        <svg class="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="8"
                                stroke-dasharray="283" stroke-dashoffset="56.6" class="text-textPrimary" />
                        </svg>
                        <span class="text-4xl font-bold relative">80%</span>
                    </div>
                    <p class="text-sm leading-relaxed">
                        Achieving 80% Client Satisfaction<br />
                        Delivering tailored recruitment and workforce solutions

                    </p>
                </div>
            </div>

            <div class="mt-4">
                <button @click="navigateTo('/about')"
                    class="bg-transparent text-white border-2 border-white rounded-full py-3 px-6 text-base cursor-pointer transition-all duration-300 hover:bg-white/10">
                    See Our Impact Stories
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Thrive'
}
</script>
