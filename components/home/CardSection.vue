<template>

    <div class="h-auto flex justify-center items-center max-w-7xl mx-auto">
        <div
            class="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-start ">
            <div v-for="card in cardData" :key="card.title" class=" h-full min-h-[180px] group hover:-translate-y-2 transition-all duration-300">
                <div class="bg-gradient-to-br from-primary to-emerald-800 text-white rounded-lg p-4 uppercase shadow-lg h-full text-center hover:from-emerald-800 hover:to-primary transition-all duration-300 flex flex-col justify-center items-center">
                    <h3 class="sm:text-lg font-semibold hidden group-hover:block text-md text-textPrimary">{{ card.title }}</h3>
                    <p class="text-sm sm:text-lg font-semibold text-xs mt-1">{{ card.header }}</p>
                    <p class="text-sm sm:text-xl font-semibold text-sm mt-3">{{ card.text }}</p>
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
        header: "Latest News",
        text: "Company announcements and updates"
    },


]
</script>
