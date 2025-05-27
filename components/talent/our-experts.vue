<template>
    <section class="bg-emerald-800 py-16 px-4 md:px-8">
        <!-- Header Section -->
        <div class="max-w-7xl mx-auto text-white mb-16 text-center">
            <h2 class="text-4xl md:text-5xl font-light mb-6">Let us be part of your success story</h2>
            <p class="text-lg mb-8">Contact us to explore how our talent acquisition services can help you achieve your
                business goals.</p>
            <button class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition duration-300"
                @click="navigateTo('/contact')">
                Discuss your needs
            </button>
        </div>

        <!-- Experts Section -->
        <div class="max-w-7xl mx-auto">

            <div class="grid grid-cols-1  gap-8 mt-8 max-w-4xl mx-auto">
                <!-- Expert Cards - Row 2 -->
                <div v-for="expert in expertsRow2" :key="expert.name" class="text-center">
                    <div class="mb-4">
                        <img :src="`${expert.image}`" :alt="expert.name"
                            class="w-48 h-48 rounded-full mx-auto object-cover">
                    </div>
                    <h3 class="text-white text-xl font-medium mb-2">{{ expert.name }}</h3>
                    <p class="text-white text-sm">{{ expert.title }}</p>
                </div>
            </div>

            <!-- <div class="text-center mt-12">
                <button
                    class="border border-white bg-white text-primary font-semibold px-6 py-3 rounded-md hover:text-textPrimary transition duration-300">
                    View all our experts
                </button>
            </div> -->
        </div>
    </section>
</template>

<script setup>

const expertsRow2 = [
    {
        name: 'Subhan Saifi',
        title: 'Founder & Global Ops Head, Hire Multiverse',
        image: '/images/talent/expert.jpg'
    }
]
</script>
