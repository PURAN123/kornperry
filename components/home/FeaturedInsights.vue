<template>
  <section class="py-16 bg-primary">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <h2 class="text-textPrimary text-3xl font-bold mb-12">FEATURED INSIGHTS</h2>
      
      <!-- Grid Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Main Featured Article -->
        <div class="relative group cursor-pointer overflow-hidden rounded-lg">
          <img 
            src="/images/home/1.webp" 
            alt="Workforce Survey" 
            class="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div class="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
            <span class="text-white bg-emerald-600 px-4 py-1.5 rounded-full text-sm font-medium">HIGHLIGHT</span>
            <h3 class="text-white text-2xl font-bold mt-4 group-hover:text-emerald-400 transition-colors">
              Korn Ferry's Workforce 2025 Survey: Power Shifts
            </h3>
          </div>
        </div>

        <!-- Right Side Articles -->
        <div class="space-y-8">
          <!-- First Article -->
          <div class="bg-white rounded-lg overflow-hidden group cursor-pointer shadow-lg">
            <div class="flex">
              <img 
                src="/images/home/2.webp" 
                alt="Beyond RPO" 
                class="w-1/3 object-cover"
              />
              <div class="p-8 flex-1">
                <span class="text-emerald-600 text-sm font-medium">TALENT RECRUITMENT</span>
                <h3 class="text-xl font-bold mt-3 group-hover:text-emerald-600 transition-colors">
                  Beyond RPO: Elevating Your Recruitment Strategy
                </h3>
              </div>
            </div>
          </div>

          <!-- Second Article -->
          <div class="bg-emerald-900 rounded-lg overflow-hidden group cursor-pointer shadow-lg">
            <div class="p-8">
              <span class="text-emerald-400 text-sm font-medium">TALENT RECRUITMENT</span>
              <h3 class="text-white text-xl font-bold mt-3 group-hover:text-emerald-400 transition-colors">
                6 Benefits of RPO: Unleashing Talent Potential
              </h3>
            </div>
          </div>

          <!-- Third Article -->
          <div class="bg-emerald-50 rounded-lg overflow-hidden group cursor-pointer shadow-lg">
            <div class="flex">
              <img 
                src="/images/home/3.webp" 
                alt="Attracting Top Talent" 
                class="w-1/3 object-cover"
              />
              <div class="p-8 flex-1">
                <span class="text-emerald-600 text-sm font-medium">TALENT RECRUITMENT</span>
                <h3 class="text-xl font-bold mt-3 group-hover:text-emerald-600 transition-colors">
                  Attracting Top Talent: A Workplace Revolution
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>
