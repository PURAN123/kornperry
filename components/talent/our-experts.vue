<template>
  <section class="bg-emerald-800 py-16 px-4 md:px-8">
    <!-- Header Section -->
    <div class="max-w-7xl mx-auto text-white mb-16">
      <h2 class="text-4xl md:text-5xl font-light mb-6">Let us be part of your success story</h2>
      <p class="text-lg mb-8">Contact us to explore how our talent acquisition services can help you achieve your business goals.</p>
      <button class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition duration-300">
        Discuss your needs
      </button>
    </div>

    <!-- Experts Section -->
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-4xl text-white mb-12">Our experts</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Expert Cards - Row 1 -->
        <div v-for="expert in expertsRow1" :key="expert.name" class="text-center">
          <div class="mb-4">
            <img :src="`${expert.image}`" 
                 :alt="expert.name"
                 class="w-48 h-48 rounded-full mx-auto object-cover">
          </div>
          <h3 class="text-white text-xl font-medium mb-2">{{ expert.name }}</h3>
          <p class="text-white text-sm">{{ expert.title }}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
        <!-- Expert Cards - Row 2 -->
        <div v-for="expert in expertsRow2" :key="expert.name" class="text-center">
          <div class="mb-4">
            <img :src="`${expert.image}`" 
                 :alt="expert.name"
                 class="w-48 h-48 rounded-full mx-auto object-cover">
          </div>
          <h3 class="text-white text-xl font-medium mb-2">{{ expert.name }}</h3>
          <p class="text-white text-sm">{{ expert.title }}</p>
        </div>
      </div>

      <div class="text-center mt-12">
        <button class="border border-white bg-white text-primary font-semibold px-6 py-3 rounded-md hover:text-textPrimary transition duration-300">
          View all our experts
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const expertsRow1 = [
  {
    name: 'Michael Distefano',
    title: 'Chief Executive Officer, Professional Search & Interim',
    image: '/images/talent/expert1.webp'
  },
  {
    name: 'Bob Carlson',
    title: 'President, Korn Ferry Executive Interim, North America',
    image: '/images/talent/expert2.webp'
  },
  {
    name: 'Jeanne MacDonald',
    title: 'Chief Executive Officer, Recruitment Process Outsourcing (RPO)',
    image: '/images/talent/expert3.webp'
  },
  {
    name: 'JP Sniffen',
    title: 'Practice Leader, Military COE & Physical Security',
    image: '/images/talent/expert4.webp'
  }
]

const expertsRow2 = [
  {
    name: 'Courtney Cook',
    title: 'Senior Vice President of Global Client Solutions, Korn Ferry RPO',
    image: '/images/talent/expert5.webp'
  },
  {
    name: 'Nick Gust',
    title: 'COO, Salo, a Korn Ferry Company',
    image: '/images/talent/expert6.webp'
  }
]
</script>
