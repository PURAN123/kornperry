<template>
    <section class="bg-primary text-white py-16 px-8 text-center">
        <div class="max-w-7xl mx-auto">
            <div class="mb-12">
                <h2 class="text-4xl mb-4 font-bold text-textPrimary leading-tight">
                    Transforming the Future of Work <br />
                    Through <span class="text-white font-bold">Innovation</span>
                </h2>
                <!-- <p class="text-base mb-8 leading-normal">
                    Across the globe, the companies we partner with are driving <br />
                    business transformation through people.
                </p> -->
            </div>

            <div class="flex flex-wrap justify-around mb-12">
                <div class="flex flex-col items-center mx-4 mb-8 max-w-[250px]">
                    <div class="w-[150px] h-[150px] rounded-full flex justify-center items-center mb-6 relative">
                        <svg class="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="8"
                                stroke-dasharray="283" stroke-dashoffset="28.3" class="text-textPrimary" />
                        </svg>
                        <span class="text-5xl font-bold relative">90%</span>
                    </div>
                    <p class="text-sm leading-relaxed">
                        Trusted by 90% of <br />
                        Fortune's Most Innovative <br />
                        Global Leaders
                    </p>
                </div>

                <div class="flex flex-col items-center mx-4 mb-8 max-w-[250px]">
                    <div class="w-[150px] h-[150px] rounded-full flex justify-center items-center mb-6 relative">
                        <svg class="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="8"
                                stroke-dasharray="283" stroke-dashoffset="56.6" class="text-textPrimary" />
                        </svg>
                        <span class="text-5xl font-bold relative">80%</span>
                    </div>
                    <p class="text-sm leading-relaxed">
                        Empowering 80% of <br />
                        Fortune's Best Workplaces <br />
                        to Scale Their Talent
                    </p>
                </div>

                <div class="flex flex-col items-center mx-4 mb-8 max-w-[250px]">
                    <div class="w-[150px] h-[150px] rounded-full flex justify-center items-center mb-6 relative">
                        <svg class="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="8"
                                stroke-dasharray="283" stroke-dashoffset="42.45" class="text-textPrimary" />
                        </svg>
                        <span class="text-5xl font-bold relative">85%</span>
                    </div>
                    <p class="text-sm leading-relaxed">
                        Driving Growth for 85% <br />
                        of Top-Performing <br />
                        Tech Companies
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
