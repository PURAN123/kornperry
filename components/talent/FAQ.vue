<template>
  <section class="py-16 px-4 max-w-6xl mx-auto">
    <h2 class="text-5xl font-light text-teal-700 text-center mb-12">How we can help</h2>
    
    <p class="text-lg text-center mb-16 max-w-4xl mx-auto">
      Looking for exceptional talent? Our specialists excel in attracting and sourcing the perfect candidates for your needs. Whether it's immediate staffing solutions or building your long-term dream team, we're here to make it happen.
    </p>

    <div class="space-y-4">
      <!-- Accordion Items -->
      <div v-for="(item, index) in faqItems" :key="index" class="border-b border-gray-200">
        <button 
          @click="toggleItem(index)"
          class="w-full py-6 flex justify-between items-center text-left"
          :aria-expanded="activeIndex === index"
        >
          <span class="text-xl font-medium text-lime-500">{{ item.title }}</span>
          <span class="text-lime-500 text-2xl">
            {{ activeIndex === index ? '−' : '+' }}
          </span>
        </button>
        
        <div 
          v-show="activeIndex === index"
          class="pb-6 prose max-w-none"
        >
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(null)

const props = defineProps(['faqItems'])

const toggleItem = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<style scoped>
/* Optional: Add any custom transitions or animations here */
</style>
