<template>
  <div class="relative h-[500px] overflow-hidden">
    <!-- Background Image -->
    <CommonHeader classNames="sticky top-0 z-50 backdrop-blur-md bg-white/30" />
    <div class="absolute inset-0">
      <img src="/images/talent/girl.webp" alt="Talent Acquisition" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent"></div>
    </div>
    
    <!-- Content -->
    <div class="relative z-10 flex flex-col justify-center h-full max-w-2xl px-8 md:px-16">
      <p class="text-lg text-green-400 font-medium mb-2">Talent Acquisition Services</p>
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
        We consult clients at every stage of the talent journey
      </h1>
      <div>
        <a href="#contact" class="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300">
          Discuss your needs
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TalentBanner'
}
</script> 