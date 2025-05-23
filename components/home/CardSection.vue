<template>

    <div class="h-auto z-10 flex justify-center items-center">
        <div
            class="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-start ">
            <div v-for="card in cardData" :key="card.title" class=" h-full group hover:-translate-y-2 transition-all duration-300">
                <div class="bg-primary text-white rounded-lg p-4 uppercase shadow-lg h-full text-center ">
                    <h3 class="text-lg font-semibold hidden group-hover:block text-xs text-textPrimary">{{ card.title }}</h3>
                    <p class="text-sm text-md font-semibold text-xs mt-1">{{ card.header }}</p>
                    <p class="text-sm text-lg font-semibold text-sm mt-3">{{ card.text }}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-2 mx-auto text-white hidden group-hover:block" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>


const cardData = [
    {
        title: "global insights report",
        header: 'Explore',
        text: "What people want from work"
    },
    {
        title: "Talent Trends report",
        header: "Dive into this year's",
        text: "Talent Acquisition Trends"
    },
    {
        title: "Press release",
        header: "Build on work days",
        text: "Brand new app streamline talent acquisition and talenet management"
    },


]
</script>
