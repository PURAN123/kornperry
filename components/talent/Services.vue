<template>
  <section class="bg-primary min-h-screen py-16 px-4">
    <!-- Top Stats -->
    <div class="flex flex-col md:flex-row justify-center items-center gap-10 mb-16">
      <div class="flex flex-col items-center bg-white rounded-full shadow-lg w-60 h-60 justify-center mx-auto">
        <span class="text-5xl font-bold text-textPrimary mb-2">#1</span>
        <span class="text-center  px-6">CEOs say hiring the right talent is their number one challenge</span>
      </div>
      <div class="flex flex-col items-center bg-white rounded-full shadow-lg w-60 h-60 justify-center mx-auto">
        <span class="text-5xl font-bold text-textPrimary mb-2">68%</span>
        <span class="text-center  px-6">of professionals said they had or would put off retirement for a contract or interim role</span>
      </div>
      <div class="flex flex-col items-center bg-white rounded-full shadow-lg w-60 h-60 justify-center mx-auto">
        <span class="text-5xl font-bold text-textPrimary mb-2">55%</span>
        <span class="text-center  px-6">of professionals are looking forward to a new job or career this year</span>
      </div>
    </div>

    <!-- Services Section -->
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Our talent acquisition services</h2>
      <p class="text-lg text-white mb-12">Hire Multiverse talent acquisition specialists work with you to solve your most pressing needs at every stage of the talent journey.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div class="bg-primaryDark rounded-lg p-8 flex flex-col items-center shadow-md">
          <img src="https://img.icons8.com/ios-filled/100/05c690/manager--v1.png" alt="Executive Search" class="w-16 h-16 mb-4"/>
          <h3 class="text-xl font-semibold text-textPrimary mb-2">Executive Search</h3>
          <p class="text-white">Find the best leaders who connect with your culture and values to drive your business forward.</p>
        </div>
        <div class="bg-primaryDark rounded-lg p-8 flex flex-col items-center shadow-md">
          <img src="https://img.icons8.com/ios-filled/100/05c690/conference-call.png" alt="Professional Search" class="w-16 h-16 mb-4"/>
          <h3 class="text-xl font-semibold text-textPrimary mb-2">Professional Search</h3>
          <p class="text-white">Place future leaders and rising stars in middle and upper management roles across all sectors and industries.</p>
        </div>
        <div class="bg-primaryDark rounded-lg p-8 flex flex-col items-center shadow-md">
          <img src="https://img.icons8.com/ios-filled/100/05c690/business-group.png" alt="Interim Executives & Professionals" class="w-16 h-16 mb-4"/>
          <h3 class="text-xl font-semibold text-textPrimary mb-2">Interim Executives & Professionals</h3>
          <p class="text-white">Hire expert talent at any level, in any industry, from single just-in-time assignments to complex long-term projects, according to your timeline.</p>
        </div>
        <div class="bg-primaryDark rounded-lg p-8 flex flex-col items-center shadow-md">
          <img src="https://img.icons8.com/ios-filled/100/05c690/organization.png" alt="Recruitment Process Outsourcing" class="w-16 h-16 mb-4"/>
          <h3 class="text-xl font-semibold text-textPrimary mb-2">Recruitment Process Outsourcing (RPO)</h3>
          <p class="text-white">Hire the right people at scale, leveraging customized technology and talent insights while reducing costs.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TalentServices',
}
</script>
