<template>
    <section class="bg-primary py-24 px-4">
        <!-- Top Stats -->
        <!-- <div class="flex flex-col md:flex-row justify-center items-center gap-10 mb-16">
            <div class="flex flex-col items-center bg-white rounded-full shadow-lg w-60 h-60 justify-center mx-auto">
                <span class="text-5xl font-bold text-textPrimary mb-2">#1</span>
                <span class="text-center  px-6">CEOs say hiring the right talent is their number one challenge</span>
            </div>
            <div class="flex flex-col items-center bg-white rounded-full shadow-lg w-60 h-60 justify-center mx-auto">
                <span class="text-5xl font-bold text-textPrimary mb-2">68%</span>
                <span class="text-center  px-6">of professionals said they had or would put off retirement for a
                    contract or interim role</span>
            </div>
            <div class="flex flex-col items-center bg-white rounded-full shadow-lg w-60 h-60 justify-center mx-auto">
                <span class="text-5xl font-bold text-textPrimary mb-2">55%</span>
                <span class="text-center  px-6">of professionals are looking forward to a new job or career this
                    year</span>
            </div>
        </div> -->

        <!-- Services Section -->
        <div class="max-w-7xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4" aria-label="Our specialized recruitment solutions">Our
                specialized recruitment solutions</h2>
            <p class="text-lg text-white mb-12"
                aria-label="Partner with our expert recruitment team to find exceptional talent that drives your organization's success">
                Partner with our expert recruitment team to find exceptional talent that drives
                your organization's success.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="hover:scale-105 transition-all duration-300 ease-in-out py-10 bg-primaryDark rounded-lg p-8 flex flex-col items-center shadow-md" role="article"
                    aria-label="Executive Search service">
                    <img src="https://img.icons8.com/ios-filled/100/05c690/manager--v1.png"
                        alt="Executive Search icon: A professional silhouette representing leadership and management expertise" class="w-16 h-16 mb-4" />
                    <h3 class="text-xl font-semibold text-textPrimary mb-2">Executive Search</h3>
                    <p class="text-white" aria-label="Executive Search description: Find the best leaders who connect with your culture and values to drive your business forward">Find the best leaders who connect with your culture and values to drive your
                        business forward.</p>
                </div>
                <div class="hover:scale-105 transition-all duration-300 ease-in-out py-10 bg-primaryDark rounded-lg p-8 flex flex-col items-center shadow-md" role="article"
                    aria-label="Professional Search service">
                    <img src="https://img.icons8.com/ios-filled/100/05c690/conference-call.png"
                        alt="Icon depicting a group of people in a conference call" class="w-16 h-16 mb-4" />
                    <h3 class="text-xl font-semibold text-textPrimary mb-2">Professional Search</h3>
                    <p class="text-white" aria-label="Professional Search description: Place future leaders and rising stars in middle and upper management roles across all sectors and industries">Place future leaders and rising stars in middle and upper management roles
                        across all sectors and industries.</p>
                </div>
                <div class="hover:scale-105 transition-all duration-300 ease-in-out py-10 bg-primaryDark rounded-lg p-8 flex flex-col items-center shadow-md" role="article"
                    aria-label="Recruitment Process Outsourcing service">
                    <img src="https://img.icons8.com/ios-filled/100/05c690/organization.png"
                        alt="Icon representing organizational structure and hierarchy" class="w-16 h-16 mb-4" />
                    <h3 class="text-xl font-semibold text-textPrimary mb-2">Recruitment Process Outsourcing (RPO)</h3>
                    <p class="text-white" aria-label="Recruitment Process Outsourcing description: Hire the right people at scale, leveraging customized technology and talent insights while reducing costs">Hire the right people at scale, leveraging customized technology and talent
                        insights while reducing costs.</p>
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
