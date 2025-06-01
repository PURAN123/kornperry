<template>
    <div class="bg-primary">
        <CommonHeader classNames="sticky top-0 z-50 text-white" />
        <div class="mx-auto py-16 px-4 sm:px-6 lg:px-8 ">
            <!-- Header -->
            <h1 class="text-4xl font-bold text-center text-white mb-16">
                SEARCH OPPORTUNITIES
            </h1>

            <!-- Search Form -->
            <div class="space-y-6">
                <!-- Main Search Fields -->
                <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div class="md:col-span-4">
                        <input v-model="searchQuery" type="text" placeholder="Job Title, Keyword(s) or Company Name"
                            class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
                    </div>
                    <div class="md:col-span-4">
                        <input v-model="locationQuery" type="text" placeholder="Location"
                            class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
                    </div>
                    <div class="md:col-span-4 grid grid-cols-2 gap-2">
                        <button @click="handleSearch"
                            class="bg-emerald-700 text-white px-6 py-3 rounded-md hover:bg-emerald-800 transition-colors duration-200">
                            SEARCH
                        </button>
                        <button @click="handleReset"
                            class="bg-gray-400 text-white px-6 py-3 rounded-md hover:bg-gray-500 transition-colors duration-200">
                            RESET
                        </button>
                    </div>
                </div>

                <!-- Advanced Search Toggle -->
                <!-- <div>
                    <button class="text-emerald-700 font-medium flex items-center gap-2">
                        Advanced Search
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div> -->

                <!-- Filter Section -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div class="relative">
                        <select v-model="selectedCategory"
                            class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 appearance-none">
                            <option v-for="category in categories" :key="category" :value="category">
                                {{ category }}
                            </option>
                        </select>
                    </div>
                    <div class="relative">
                        <select v-model="selectedCountry"
                            class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 appearance-none">
                            <option v-for="country in countries" :key="country" :value="country">
                                {{ country }}
                            </option>
                        </select>
                    </div>
                    <div class="relative">
                        <select v-model="selectedState"
                            class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 appearance-none">
                            <option v-for="state in states" :key="state" :value="state">
                                {{ state }}
                            </option>
                        </select>
                    </div>
                    <div class="relative">
                        <select v-model="selectedCity"
                            class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 appearance-none">
                            <option v-for="city in cities" :key="city" :value="city">
                                {{ city }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Results Table -->
            <div class="mt-8 bg-white shadow-sm rounded-lg overflow-auto">
                <table class="min-w-full divide-y divide-gray-200" v-if="jobs.length > 0">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-md font-semibold text-gray-500 tracking-wider">
                                Title</th>
                            <th class="px-6 py-3 text-left text-md font-semibold text-gray-500 tracking-wider">
                                Location</th>
                            <th class="px-6 py-3 text-left text-md font-semibold text-gray-500 tracking-wider">
                                Date Opened</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="job in jobs" :key="job.title" class="hover:bg-gray-50">
                            <td class="px-6 py-4">
                                <div class="text-sm font-medium text-emerald-700">{{ job.title }}</div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-900">{{ job.location }}</div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-900">{{ job.dateOpened }}</div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-900 cursor-pointer hover:text-primary" @click="navigateTo('/contact')">
                                        Apply
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block ml-1"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- Empty State -->
                <div v-else class="flex flex-col items-center justify-center py-12 px-4">
                    <svg class="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                        </path>
                    </svg>
                    <h3 class="text-lg font-medium text-gray-900 mb-2">No matching jobs found</h3>
                    <p class="text-gray-500 text-center max-w-sm">
                        We couldn't find any jobs matching your current filters. Try adjusting your search criteria or
                        clearing the filters.
                    </p>
                    <button @click="handleReset"
                        class="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-700 hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                        Clear all filters
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Filter options
const categories = [
    'All Categories',
    'Legal',
    'Technology',
    'Executive',
    'Finance',
    'Human Resources'
]

const countries = [
    'All Countries',
    'United States',
    'Pakistan',
    'Kenya'
]

const states = [
    'All States',
    'New York',
    'Texas',
    'Washington DC'
]

const cities = [
    'All Cities',
    'Manhattan',
    'New York',
    'Deer Park',
    'Washington DC',
    'Karachi',
    'Nairobi'
]

// Filter states
const selectedCategory = ref('All Categories')
const selectedCountry = ref('All Countries')
const selectedState = ref('All States')
const selectedCity = ref('All Cities')
const searchQuery = ref('')
const locationQuery = ref('')

const baseJobs = [
    {
        title: 'Restructuring Associate – NY',
        location: 'Manhattan NY',
        dateOpened: 'May 23, 2025',
        category: 'Legal'
    },
    {
        title: 'Investment Funds Regulatory Associate',
        location: 'NY/Manhattan, NY or Washington DC',
        dateOpened: 'May 23, 2025',
        category: 'Legal'
    },
    {
        title: 'The Vice President and Chief Digital Information Officer (CDIO)',
        location: 'Karachi, Pakistan or Nairobi, Kenya',
        dateOpened: 'May 23, 2025',
        category: 'Technology'
    },
    {
        title: 'Chief Executive Officer - Girl Scouts of Greater NY',
        location: 'New York, NY',
        dateOpened: 'May 23, 2025',
        category: 'Executive'
    },
    {
        title: 'System Testing Analyst',
        location: 'Deer Park TX (E. Houston area)',
        dateOpened: 'May 21, 2025',
        category: 'Technology'
    }
]

// Computed filtered jobs
const jobs = computed(() => {
    return baseJobs.filter(job => {
        const matchesSearch = !searchQuery.value ||
            job.title.toLowerCase().includes(searchQuery.value.toLowerCase())

        const matchesLocation = !locationQuery.value ||
            job.location.toLowerCase().includes(locationQuery.value.toLowerCase())

        const matchesCategory = selectedCategory.value === 'All Categories' ||
            job.category === selectedCategory.value

        const matchesCountry = selectedCountry.value === 'All Countries' ||
            job.location.includes(selectedCountry.value)

        const matchesState = selectedState.value === 'All States' ||
            job.location.includes(selectedState.value)

        const matchesCity = selectedCity.value === 'All Cities' ||
            job.location.includes(selectedCity.value)

        return matchesSearch && matchesLocation && matchesCategory &&
            matchesCountry && matchesState && matchesCity
    })
})

// Search and reset functions
const handleSearch = () => {
    // The computed property will automatically update based on the reactive refs
}

const handleReset = () => {
    searchQuery.value = ''
    locationQuery.value = ''
    selectedCategory.value = 'All Categories'
    selectedCountry.value = 'All Countries'
    selectedState.value = 'All States'
    selectedCity.value = 'All Cities'
}
</script>