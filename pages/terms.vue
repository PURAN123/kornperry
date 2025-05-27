<template>
    <div class="min-h-screen bg-primary">
        <CommonHeader classNames="max-w-[90%] mx-auto sticky top-0 z-50 text-white bg-transparent" />
        <!-- Header Section with improved styling -->
        <div class="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
            <div class="container mx-auto px-4">
                <h1 class="text-5xl font-bold mb-4 animate-fade-in">Terms and Conditions</h1>
                <p class="text-lg opacity-90">Last updated: {{ currentDate }}</p>
            </div>
        </div>

        <!-- Table of Contents - New Addition -->
        <div class="container mx-auto px-4 py-8">
            <div class="max-w-4xl mx-auto">
                <nav class=" rounded-lg shadow-sm p-6 mb-8">
                    <h2 class="text-xl font-semibold mb-4 text-white">Table of Contents</h2>
                    <ul class="space-y-2">
                        <li v-for="(section, index) in sections" :key="index">
                            <a :href="'#section-' + (index + 1)" class="text-white hover:text-white-dark transition-colors duration-200 flex items-center">
                                <span class="mr-2 text-sm font-medium">{{ index + 1 }}.</span>
                                {{ section }}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        <!-- Content Section with improved styling -->
        <div class="container mx-auto px-4 pb-16 text-white">
            <div class="max-w-4xl mx-auto">
                <!-- Introduction -->
                <section id="section-1" class="mb-12 bg-formBg rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow duration-200">
                    <h2 class="text-3xl font-bold mb-6 text-white">1. Introduction</h2>
                    <p class=" leading-relaxed text-white">
                        Welcome to Hire Multiverse. By accessing and using our website and services, you agree to be bound by these Terms and Conditions. Please read them carefully before using our services.
                    </p>
                </section>

                <!-- Definitions -->
                <section id="section-2" class="mb-12 bg-formBg rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow duration-200">
                    <h2 class="text-3xl font-bold mb-6 text-white">2. Definitions</h2>
                    <ul class="space-y-4 text-white">
                        <li v-for="(definition, index) in definitions" :key="index" 
                            class="flex items-start p-4 rounded-lg transition-colors duration-200">
                            <span class="text-white mr-3">•</span>
                            <span class="">{{ definition }}</span>
                        </li>
                    </ul>
                </section>

                <!-- Services -->
                <section id="section-3" class="mb-12 bg-formBg rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow duration-200">
                    <h2 class="text-3xl font-bold mb-6 text-white">3. Services</h2>
                    <p class=" mb-6 leading-relaxed">
                        Hire Multiverse provides recruitment and talent acquisition services, including but not limited to:
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                        <div v-for="(service, index) in services" :key="index" 
                             class="p-4  rounded-lg transition-colors duration-200">
                            <span class="flex items-center ">
                                <span class="text-white mr-2">✓</span>
                                {{ service }}
                            </span>
                        </div>
                    </div>
                </section>

                <!-- User Obligations -->
                <section id="section-4" class="mb-12 bg-formBg rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow duration-200">
                    <h2 class="text-3xl font-bold mb-6 text-white">4. User Obligations</h2>
                    <p class=" mb-6 leading-relaxed">
                        Users of our Service agree to:
                    </p>
                    <div class="space-y-4">
                        <div v-for="(obligation, index) in obligations" :key="index" 
                             class="flex items-center p-4  rounded-lg transition-colors duration-200">
                            <span class="text-white mr-3">⚡</span>
                            <span class="">{{ obligation }}</span>
                        </div>
                    </div>
                </section>

                <!-- Privacy -->
                <section id="section-5" class="mb-12 bg-formBg rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow duration-200">
                    <h2 class="text-3xl font-bold mb-6 text-white">5. Privacy and Data Protection</h2>
                    <div class=" border-l-4 border-blue-500 p-6 rounded-r-lg">
                        <p class=" leading-relaxed">
                            We are committed to protecting your privacy. Our collection and use of personal data is governed by our Privacy Policy, which is incorporated into these Terms and Conditions by reference.
                        </p>
                    </div>
                </section>

                <!-- Limitation of Liability -->
                <section id="section-6" class="mb-12 bg-formBg rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow duration-200">
                    <h2 class="text-3xl font-bold mb-6 text-white">6. Limitation of Liability</h2>
                    <div class=" border-l-4 border-yellow-500 p-6 rounded-r-lg">
                        <p class=" leading-relaxed">
                            To the maximum extent permitted by law, Hire Multiverse shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
                        </p>
                    </div>
                </section>

                <!-- Changes to Terms -->
                <section id="section-7" class="mb-12 bg-formBg rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow duration-200">
                    <h2 class="text-3xl font-bold mb-6 text-white">7. Changes to Terms</h2>
                    <div class=" p-6 rounded-lg">
                        <p class=" leading-relaxed">
                            We reserve the right to modify these Terms and Conditions at any time. We will notify users of any material changes through our website or via email.
                        </p>
                    </div>
                </section>

                <!-- Contact Information -->
                <section id="section-8" class="bg-formBg rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow duration-200">
                    <h2 class="text-3xl font-bold mb-6 text-white">8. Contact Information</h2>
                    <p class=" mb-6 leading-relaxed">
                        If you have any questions about these Terms and Conditions, please contact us at:
                    </p>
                    <div class=" p-6 rounded-lg space-y-2">
                        <div class="flex items-center ">
                            <span class="text-white mr-3">📧</span>
                            <span>Email: <a href="mailto:info@hiremultiverse.com" class="text-white hover:underline">info@hiremultiverse.com</a></span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup>
const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

// Data for the table of contents and sections
const sections = [
    'Introduction',
    'Definitions',
    'Services',
    'User Obligations',
    'Privacy and Data Protection',
    'Limitation of Liability',
    'Changes to Terms',
    'Contact Information'
];

const definitions = [
    '"Service" refers to the website and services provided by Hire Multiverse',
    '"User" refers to anyone who accesses or uses our Service',
    '"Client" refers to businesses or organizations that use our recruitment services',
    '"Candidate" refers to individuals seeking employment through our Service'
];

const services = [
    'Digital transformation consulting',
    'Talent acquisition and placement',
    'Professional development services',
    'Industry-specific recruitment solutions'
];

const obligations = [
    'Provide accurate and truthful information',
    'Maintain the confidentiality of their account credentials',
    'Not engage in any unauthorized or illegal activities',
    'Respect intellectual property rights'
];
</script>

<style scoped>
.animate-fade-in {
    animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Smooth scroll behavior */
html {
    scroll-behavior: smooth;
}
</style> 