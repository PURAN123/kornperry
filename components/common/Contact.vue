<template>
    <div  class="bg-formBg">
    <CommonHeader classNames="sticky top-0 z-50 backdrop-blur-md bg-white/30" />
  <div class=" p-8 md:p-16">

    <div class="max-w-3xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold text-textPrimary mb-12">
        Change starts with a conversation
      </h2>
      
      <form @submit.prevent="submitForm" class="spaceange star-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- First Name -->
          <div class="space-y-2">
            <label for="firstName" class="text-white text-sm font-medium flex">
              <span class="text-textPrimary">*</span>FIRST NAME
            </label>
            <input 
              id="firstName" 
              v-model="form.firstName" 
              type="text" 
              class="w-full bg-inputBg border-inputBg text-white p-3 rounded"
              required
            />
          </div>

          <!-- Last Name -->
          <div class="space-y-2">
            <label for="lastName" class="text-white text-sm font-medium flex">
              <span class="text-textPrimary">*</span>LAST NAME
            </label>
            <input 
              id="lastName" 
              v-model="form.lastName" 
              type="text" 
              class="w-full bg-inputBg border-inputBg text-white p-3 rounded"
              required
            />
          </div>

          <!-- Company -->
          <div class="space-y-2">
            <label for="company" class="text-white text-sm font-medium flex">
              <span class="text-textPrimary">*</span>COMPANY
            </label>
            <input 
              id="company" 
              v-model="form.company" 
              type="text" 
              class="w-full bg-inputBg border-inputBg text-white p-3 rounded"
              required
            />
          </div>

          <!-- Job Title -->
          <div class="space-y-2">
            <label for="jobTitle" class="text-white text-sm font-medium flex">
              <span class="text-textPrimary">*</span>JOB TITLE
            </label>
            <input 
              id="jobTitle" 
              v-model="form.jobTitle" 
              type="text" 
              class="w-full bg-inputBg border-inputBg text-white p-3 rounded"
              required
            />
          </div>

          <!-- Email -->
          <div class="space-y-2">
            <label for="email" class="text-white text-sm font-medium flex">
              <span class="text-textPrimary">*</span>EMAIL ADDRESS
            </label>
            <input 
              id="email" 
              v-model="form.email" 
              type="email" 
              class="w-full bg-inputBg border-inputBg text-white p-3 rounded"
              required
            />
          </div>

          <!-- Phone Number -->
          <div class="space-y-2">
            <label for="phone" class="text-white text-sm font-medium flex">
              <span class="text-textPrimary">*</span>PHONE NUMBER
            </label>
            <input 
              id="phone" 
              v-model="form.phone" 
              type="tel" 
              class="w-full bg-inputBg border-inputBg text-white p-3 rounded"
              required
            />
          </div>

          <!-- Country -->
          <div class="space-y-2">
            <label for="country" class="text-white text-sm font-medium flex">
              <span class="text-textPrimary">*</span>COUNTRY
            </label>
            <select 
              id="country" 
              v-model="form.country" 
              class="w-full bg-inputBg border-inputBg text-white p-3 rounded appearance-none"
              required
            >
              <option disabled value="">Select...</option>
              <option v-for="country in countries" :key="country" :value="country">
                {{ country }}
              </option>
            </select>
          </div>

          <!-- How can we help -->
          <div class="space-y-2">
            <label for="helpType" class="text-white text-sm font-medium flex">
              <span class="text-textPrimary">*</span>HOW CAN WE HELP YOU?
            </label>
            <select 
              id="helpType" 
              v-model="form.helpType" 
              class="w-full bg-inputBg border-inputBg text-white p-3 rounded appearance-none"
              required
            >
              <option disabled value="">Select...</option>
              <option v-for="option in helpOptions" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
        </div>

        <!-- Consent Checkbox -->
        <div class="flex items-start mt-6">
          <div class="flex items-center h-5">
            <input
              id="consent"
              type="checkbox"
              v-model="form.consent"
              class="focus:ring-textPrimary h-4 w-4 text-textPrimary border-gray-300 rounded"
            />
          </div>
          <div class="ml-3 text-sm">
            <label for="consent" class="text-white">
              Yes, I Would Like To Receive Regular Updates On Thought Leadership, Industry Insights And Upcoming Events From Korn Ferry. I Understand That I May Withdraw My Consent At Any Time. Review Korn Ferry's Privacy Policy <a href="#" class="text-textPrimary underline">Here</a>.
            </label>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="flex justify-center mt-8">
          <button
            type="submit"
            class="bg-white text-primary px-8 py-3 font-medium rounded hover:bg-gray-100 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const countries = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'Japan',
  'China',
  'India',
  // Add more countries as needed
];

const helpOptions = [
  'General Inquiry',
  'Business Consulting',
  'Career Development',
  'Executive Search',
  'Leadership Development',
  // Add more options as needed
];

const form = ref({
  firstName: '',
  lastName: '',
  company: '',
  jobTitle: '',
  email: '',
  phone: '',
  country: '',
  helpType: '',
  consent: false
});

const submitForm = () => {
  // Add form submission logic here
  console.log('Form submitted:', form.value);
  // You might want to make an API call here
};
</script>

<style scoped>
/* Add any additional custom styles here if needed */
select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}
</style>
