<template>
  <section class="bg-primary text-white py-16 px-8 text-center">
    <div class="max-w-7xl mx-auto">
      <div class="mb-12">
        <h2 class="text-4xl mb-4 font-bold text-textPrimary leading-tight">
          We help businesses and the <br />
          people in them <span class="text-white font-bold">thrive</span>.
        </h2>
        <p class="text-base mb-8 leading-normal">
          Across the globe, the companies we partner with are driving <br />
          business transformation through people.
        </p>
      </div>

      <div class="flex flex-wrap justify-around mb-12">
        <div class="flex flex-col items-center mx-4 mb-8 max-w-[250px]">
          <div class="w-[150px] h-[150px] rounded-full flex justify-center items-center mb-6 relative">
            <svg class="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                fill="none"
                stroke="currentColor"
                stroke-width="8"
                stroke-dasharray="283"
                stroke-dashoffset="11.32"
                class="text-textPrimary"
              />
            </svg>
            <span class="text-5xl font-bold relative">96%</span>
          </div>
          <p class="text-sm leading-relaxed">
            We work with 96% <br />
            of Fortune's top 50 world's <br />
            most admired companies
          </p>
        </div>

        <div class="flex flex-col items-center mx-4 mb-8 max-w-[250px]">
          <div class="w-[150px] h-[150px] rounded-full flex justify-center items-center mb-6 relative">
            <svg class="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                fill="none"
                stroke="currentColor"
                stroke-width="8"
                stroke-dasharray="283"
                stroke-dashoffset="70.75"
                class="text-textPrimary"
              />
            </svg>
            <span class="text-5xl font-bold relative">75%</span>
          </div>
          <p class="text-sm leading-relaxed">
            3 in every 4 of Fortune's <br />
            best companies to work for <br />
            are Hire Multiverse clients
          </p>
        </div>

        <div class="flex flex-col items-center mx-4 mb-8 max-w-[250px]">
          <div class="w-[150px] h-[150px] rounded-full flex justify-center items-center mb-6 relative">
            <svg class="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                fill="none"
                stroke="currentColor"
                stroke-width="8"
                stroke-dasharray="283"
                stroke-dashoffset="56.6"
                class="text-textPrimary"
              />
            </svg>
            <span class="text-5xl font-bold relative">80%</span>
          </div>
          <p class="text-sm leading-relaxed">
            We work with 80% of <br />
            the Drucker Institute's top <br />
            performing companies
          </p>
        </div>
      </div>

      <div class="mt-4">
        <button class="bg-transparent text-white border-2 border-white rounded-full py-3 px-6 text-base cursor-pointer transition-all duration-300 hover:bg-white/10">
          Explore our business impact
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Thrive'
}
</script>
