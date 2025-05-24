<template>
  <section class="relative overflow-hidden">
    
    <!-- Background Image and Content Container -->
    <div class="flex flex-col lg:flex-row items-center">
      <!-- Left side - Image -->
      <div class="w-full lg:w-1/2 h-[500px]">
        <img 
          src="/public/images/contact/global-offices.webp" 
          alt="Global Offices Building" 
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Right side - Content -->
      <div class="w-full lg:w-1/2 p-8 lg:p-16 bg-white">
        <h2 class="text-4xl lg:text-5xl font-light text-primary mb-6">
          Global offices
        </h2>
        <p class="text-lg mb-8">
          We have a global footprint. Our organizational consulting services synchronize strategy and talent to drive superior performance for our clients. Our 10,000+ colleagues serve clients in more than 50 countries.
        </p>
        <a 
          href="#" 
          class="inline-flex items-center text-[#7BC143] hover:text-[#69A439] transition-colors duration-300"
        >
          Find a Hire Multiverse office
          <svg 
            class="w-4 h-4 ml-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>
