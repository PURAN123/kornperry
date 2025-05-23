<template>
  <div class="bg-emerald-800 text-white p-8 flex flex-col md:flex-row items-center">
    <div class="w-full md:w-1/2 pr-0 md:pr-8">
      <h2 class="text-3xl font-bold mb-4">Talent Acquisition Trends 2025</h2>
      <p class="mb-6">
        Progress Over Perfection. Experts predict the five biggest talent 
        acquisition trends you need to know about for 2025.
      </p>
      <button class="bg-yellow-500 hover:bg-yellow-600 font-bold py-2 px-6 rounded-md">
        Get ahead now
      </button>
    </div>
    <div class="w-full md:w-1/2 mt-6 md:mt-0">
      <div class="relative">
        <img 
          src="/images/talent/trends25.webp" 
          alt="Talent Acquisition Trends" 
          class="w-full rounded-md z-10 relative"
        />
        <div class="absolute -top-4 -right-4 w-full h-full bg-yellow-300 rounded-md z-0"></div>
      </div>    
    </div>
  </div>
</template>

<script>
export default {
  name: 'Trends25'
}
</script>
