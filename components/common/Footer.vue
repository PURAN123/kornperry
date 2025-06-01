<template>
    <footer class="bg-primary text-white">
        <!-- Main footer content -->
        <div class="container mx-auto px-4 py-10">
            <!-- Logo and social icons -->
            <div class="flex flex-col sm:flex-row justify-between items-center mb-8 border-b border-gray-700 pb-4">
                <div class="flex-shrink-0 mb-4 sm:mb-0">
                    <!-- Text logo as fallback -->
                    <div class="flex items-center gap-2 cursor-pointer" @click="navigateTo('/')">
                        <img src="/logo.png" alt="Hire Multiverse Logo" class="w-16 h-16">
                        <h1 class="text-xl font-bold text-white">Hire<br /> Multiverse</h1>
                        <!-- <h1 class="text-4xl font-bold">Talent</h1> -->
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <!-- LinkedIn -->
                    <a href="#" aria-label="LinkedIn" class="text-white hover:text-textPrimary w-5 h-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z">
                            </path>
                        </svg>
                    </a>
                    <!-- Facebook -->
                    <a href="#" aria-label="Facebook" class="text-white hover:text-textPrimary w-5 h-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z">
                            </path>
                        </svg>
                    </a>
                    <!-- Twitter/X -->
                    <a href="#" aria-label="Twitter" class="text-white hover:text-textPrimary w-5 h-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z">
                            </path>
                        </svg>
                    </a>
                    <!-- Instagram -->
                    <a href="#" aria-label="Instagram" class="text-white hover:text-textPrimary w-5 h-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.352.3-.882.344-1.857.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.04-.058zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.672a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z">
                            </path>
                        </svg>
                    </a>
                    <!-- YouTube -->
                    <a href="#" aria-label="YouTube" class="text-white hover:text-textPrimary w-5 h-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022zM10 15.5l6-3.5-6-3.5v7z">
                            </path>
                        </svg>
                    </a>
                    <!-- Email -->
                    <a href="#" aria-label="Email" class="text-white hover:text-textPrimary w-5 h-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z">
                            </path>
                        </svg>
                    </a>
                    <!-- RSS -->
                    <a href="#" aria-label="RSS" class="text-white hover:text-textPrimary w-5 h-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M6.18 15.64a2.18 2.18 0 0 1 0 4.36 2.18 2.18 0 0 1 0-4.36zM4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44zm0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93v-2.83z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Footer links -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 gap-y-10">
                <!-- Capabilities column -->
                <div class="col-span-1">
                    <h3 class="text-lg font-bold mb-4">Capabilities</h3>
                    <ul class="space-y-2">
                        <li><a href="/contact" class="hover:text-textPrimary">Digital Transformation</a></li>
                        <li><a href="/contact" class="hover:text-textPrimary">Talent Demands</a></li>
                        <li><a href="/contact" class="hover:text-textPrimary">Leadership & Professional</a></li>
                    </ul>
                </div>

                <!-- Industries column -->
                <div class="col-span-1">
                    <h3 class="text-lg font-bold mb-4">Industries</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="hover:text-textPrimary">Financial Services</a></li>
                        <li><a href="#" class="hover:text-textPrimary">Healthcare & Life Sciences</a></li>
                        <li><a href="#" class="hover:text-textPrimary">Technology</a></li>
                        <li><a href="#" class="hover:text-textPrimary">Government</a></li>
                    </ul>
                </div>


                <!-- Careers column -->
                <div class="col-span-1">
                    <h3 class="text-lg font-bold mb-4">Careers</h3>
                    <ul class="space-y-2">
                        <li><a href="/talent-acquisition" class="hover:text-textPrimary">Work with our Clients</a></li>
                        <li><a href="/talent-acquisition" class="hover:text-textPrimary">Advance your Career</a></li>
                        <li><a href="/talent-acquisition" class="hover:text-textPrimary">Join Hire Multiverse</a></li>
                        <li><a href="/talent-acquisition" class="hover:text-textPrimary">Find an office</a></li>
                        <li><a href="/talent-acquisition" class="hover:text-textPrimary">Business Support</a></li>
                        <li><a href="/talent-acquisition" class="hover:text-textPrimary">EMEA Support</a></li>
                        <li><a href="/talent-acquisition" class="hover:text-textPrimary">Investor Relations</a></li>
                        <li><a href="/talent-acquisition" class="hover:text-textPrimary">Press Releases</a></li>
                    </ul>
                </div>

                <!-- Our Story column -->
                <div class="col-span-1">
                    <h3 class="text-lg font-bold mb-4">Our Story</h3>
                    <ul class="space-y-2">
                        <li><a href="/about" class="hover:text-textPrimary">Who We Are</a></li>
                        <li><a href="/about" class="hover:text-textPrimary">Our History</a></li>
                    </ul>
                </div>
                <div class="col-span-1">
                    <h3 class="text-lg font-bold mb-4">Contact</h3>
                    <ul class="space-y-2">
                        <li>Email : <a href="mailto:info@hiremultiverse.space"
                                class="hover:text-textPrimary">info@hiremultiverse.space</a></li>
                        <li>Phone : <a href="tel:+917983488175" class="hover:text-textPrimary">+91 7983488175</a></li>
                        <li>Address : Meerut, Uttar Pradesh</li>
                        <li>GSTIN : 09KCCPS1705L1Z6</li>

                    </ul>
                </div>
            </div>
        </div>

        <!-- Footer bottom / copyright -->
        <div class="bg-primaryDark border-t border-gray-700 py-4">
            <div class="container mx-auto px-4">
                <div class="flex flex-col md:flex-row justify-between items-center text-sm">
                    <div class="mb-4 md:mb-0 text-center md:text-left">
                        &copy; 2023 Hire Multiverse. All rights reserved.
                    </div>
                    <div class="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2">
                        <a href="/contact" class="hover:text-textPrimary">Contact</a>
                        <a href="/terms" class="hover:text-textPrimary">Terms</a>
                        <!-- <a href="/contact" class="hover:text-textPrimary">Privacy</a> -->
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
// Footer component
</script>
