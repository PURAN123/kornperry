<template>
    <div class="bg-primary text-textPrimary p-8 w-full">

        <h2 class="text-lg font-semibold mb-4">THIS WEEK IN LEADERSHIP</h2>
        <div class="border-t border-textPrimary/30 mb-8"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <div v-for="(item, index) in leadershipItems" :key="index"
                class="flex flex-col pl-6 relative before:content-['/'] before:absolute before:left-0 before:text-2xl before:font-light before:text-textPrimary">
                <div class="flex gap-2 text-textPrimary text-sm mb-2">
                    <span class="font-medium">{{ item.type }}</span>
                    <span class="font-light">{{ item.date }}</span>
                </div>
                <a :href="item.link"
                    class="text-textPrimary text-xl font-medium no-underline hover:opacity-80 transition-opacity duration-200">{{
                    item.title }}</a>
            </div>
        </div>
    </div>
</template>

<script setup>
const leadershipItems = [
    {
        type: 'PODCAST',
        date: 'MAY 21, 2025',
        title: 'Briefings Podcast #49: The New Era of Job Hiring',
        link: '#'
    },
    {
        type: 'ARTICLE',
        date: 'MAY 20, 2025',
        title: 'Corporate Babble: Phrases Leaders Tend to Overuse',
        link: '#'
    },
    {
        type: 'ARTICLE',
        date: 'MAY 20, 2025',
        title: 'Unplug at Your Own Peril',
        link: '#'
    },
    {
        type: 'ARTICLE',
        date: 'MAY 20, 2025',
        title: 'Board Focus: Dealmaking Amid Tariffs',
        link: '#'
    },
    {
        type: 'ARTICLE',
        date: 'MAY 19, 2025',
        title: 'Don\'t Forget Creativity Training',
        link: '#'
    }
]
</script>
