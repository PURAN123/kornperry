<template>
    <header :class="classNames" class="py-2 max-w-[90%] mx-auto pt-4">
        <!-- Hamburger button for md and below -->
        <div class="flex items-center justify-between gap-2 md:hidden text-black">

            <button @click="drawerOpen = !drawerOpen" class="p-2 focus:outline-none text-white">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                    </path>
                </svg>
            </button>
            <div class="flex items-center gap-2" @click="navigateTo('/')">
                <img src="/logo.png" alt="Hire Multiverse Logo" class="w-16 h-16">
                <h1 class="text-xl font-bold text-white">Hire<br /> Multiverse</h1>
                <!-- <h1 class="text-4xl font-bold">Talent</h1> -->
            </div>
            <div></div>
        </div>
        <!-- Navigation links for desktop -->
        <div class="hidden md:flex space-x-4 text-xl gap-1 justify-between items-center px-5">
            <div class="flex items-center gap-2 text-white cursor-pointer" @click="navigateTo('/')">
                <img src="/logo.png" alt="Hire Multiverse Logo" class="w-12 h-12">
                <h1 class="text-xl font-bold">Hire<br /> Multiverse</h1>
                <!-- <h1 class="text-4xl font-bold">Talent</h1> -->
            </div>
            <div>
                <NuxtLink class="px-3 py-3 hover:bg-textPrimary/30 hover:backdrop-blur-md  rounded-md hover:text-white font-semibold text-white" :to="item.path"
                    v-for="item in navMenus">{{ item.name }}</NuxtLink>
            </div>
        </div>
        <!-- Drawer for mobile -->
        <transition name="fade">
            <div v-if="drawerOpen" class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                @click.self="drawerOpen = false">
                <div class="absolute left-0 top-0 h-full w-64 bg-white shadow-lg p-4 z-50 flex flex-col space-y-4">
                    <button @click="drawerOpen = false" class="self-end text-black">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <NuxtLink class="font-semibold text-black hover:text-primary" :to="item.path" v-for="item in navMenus"
                        @click="drawerOpen = false">{{ item.name }}</NuxtLink>
                </div>
            </div>
        </transition>
    </header>
</template>

<script setup>
import { ref } from 'vue'
const drawerOpen = ref(false)

defineProps({
    classNames: {
        type: String,
        default: ''
    }
})

const navMenus = ref([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Solution', path: '/talent-acquisition' },
    { name: 'Role', path: '/role' },
    { name: 'Contact', path: '/contact' }
])


</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>