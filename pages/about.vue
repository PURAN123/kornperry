<template>
  <div class="about-page">
    <!-- Banner Section -->
    <section class="banner-section relative h-auto overflow-hidden min-h-[500px]">
        <CommonHeader />
      
      <!-- Content -->
      <div class="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
        <div class="max-w-4xl">
          <h6 class="text-xl mb-4 font-medium tracking-wide">ABOUT</h6>
          <h1 class="text-6xl font-bold mb-8">OUR STORY</h1>
          <div class="text-2xl space-y-2">
            <p>History provides perspective.</p>
            <p>Future inspires opportunity.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Component imports can be added here
</script>

<style scoped>
.banner-section {
  background-image: url('/public/images/about/banner.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-opacity: 0.5;
}
</style>
