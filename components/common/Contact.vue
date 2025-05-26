<template>
    <div class="bg-formBg">
        <CommonHeader classNames="sticky top-0 z-50 text-white bg-transparent" v-if="$route.path == '/contact'" />
        <div class=" p-8 md:p-16">

            <div class="mx-auto mt-5">
                <h2 class="text-4xl md:text-5xl font-bold text-textPrimary mb-12 text-center">
                    Change starts with a conversation
                </h2>

                <form @submit.prevent="submitForm" class="spaceange star-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- First Name -->
                        <div class="space-y-2">
                            <label for="firstName" class="text-white text-sm font-medium flex">
                                <span class="text-textPrimary">*</span>FIRST NAME
                            </label>
                            <input id="firstName" v-model="form.firstName" type="text"
                                class="w-full bg-inputBg border-inputBg text-white p-3 rounded" required />
                        </div>

                        <!-- Last Name -->
                        <div class="space-y-2">
                            <label for="lastName" class="text-white text-sm font-medium flex">
                                <span class="text-textPrimary">*</span>LAST NAME
                            </label>
                            <input id="lastName" v-model="form.lastName" type="text"
                                class="w-full bg-inputBg border-inputBg text-white p-3 rounded" required />
                        </div>

                        <!-- Company -->
                        <div class="space-y-2">
                            <label for="company" class="text-white text-sm font-medium flex">
                                <span class="text-textPrimary">*</span>COMPANY
                            </label>
                            <input id="company" v-model="form.company" type="text"
                                class="w-full bg-inputBg border-inputBg text-white p-3 rounded" required />
                        </div>

                        <!-- Job Title -->
                        <div class="space-y-2">
                            <label for="jobTitle" class="text-white text-sm font-medium flex">
                                <span class="text-textPrimary">*</span>JOB TITLE
                            </label>
                            <input id="jobTitle" v-model="form.jobTitle" type="text"
                                class="w-full bg-inputBg border-inputBg text-white p-3 rounded" required />
                        </div>

                        <!-- Email -->
                        <div class="space-y-2">
                            <label for="email" class="text-white text-sm font-medium flex">
                                <span class="text-textPrimary">*</span>EMAIL ADDRESS
                            </label>
                            <input id="email" v-model="form.email" type="email"
                                class="w-full bg-inputBg border-inputBg text-white p-3 rounded" required />
                        </div>

                        <!-- Phone Number -->
                        <div class="space-y-2">
                            <label for="phone" class="text-white text-sm font-medium flex">
                                <span class="text-textPrimary">*</span>PHONE NUMBER
                            </label>
                            <input id="phone" v-model="form.phone" type="tel"
                                class="w-full bg-inputBg border-inputBg text-white p-3 rounded" required />
                        </div>

                        <!-- Country -->
                        <div class="space-y-2">
                            <label for="country" class="text-white text-sm font-medium flex">
                                <span class="text-textPrimary">*</span>COUNTRY
                            </label>
                            <select id="country" v-model="form.country"
                                class="w-full bg-inputBg border-inputBg text-white p-3 rounded appearance-none"
                                required>
                                <option disabled value="">Select...</option>
                                <option v-for="country in allCountries" :key="country" :value="country">
                                    {{ country }}
                                </option>
                            </select>
                        </div>

                        <!-- How can we help -->
                        <div class="space-y-2">
                            <label for="helpType" class="text-white text-sm font-medium flex">
                                <span class="text-textPrimary">*</span>HOW CAN WE HELP YOU?
                            </label>
                            <select id="helpType" v-model="form.helpType"
                                class="w-full bg-inputBg border-inputBg text-white p-3 rounded appearance-none"
                                required>
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
                            <input id="consent" required type="checkbox" v-model="form.consent"
                                class="focus:ring-textPrimary h-4 w-4 text-textPrimary border-gray-300 rounded" />
                        </div>
                        <div class="ml-3 text-sm">
                            <label for="consent" class="text-white">
                                Yes, I Would Like To Receive Regular Updates On Thought Leadership, Industry Insights
                                And Upcoming Events From Hire Multiverse. I Understand That I May Withdraw My Consent At
                                Any Time. Review Hire Multiverse's Privacy Policy <a href="#"
                                    class="text-textPrimary underline">Here</a>.
                            </label>
                        </div>
                    </div>

                    <!-- Submit Button -->
                    <div class="flex justify-center mt-8">
                        <button type="submit"
                            class="bg-white text-primary px-8 py-3 font-medium rounded hover:bg-gray-100 transition">
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

const helpOptions = [
    'Job candidate seeking to be placed by Korn Ferry',
    'Interim Executives & Professionals',
    'Executive Search',
    'Board & CEO Services',
    'Professional Search',
    'Recruitment Process Outsourcing (RPO)',
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


const allCountries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua & Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia & Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo',
    'Congo Democratic Republic',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea South',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar (Burma)',
    'Namibia',
    'Nauru',
    'Nepal',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestinian State*',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Rwanda',
    'Samoa',
    'San Marino',
    'Sao Tome & Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'St. Kitts & Nevis',
    'St. Lucia',
    'St. Vincent & The Grenadines',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'The Netherlands',
    'The Philippines',
    'Togo',
    'Tonga',
    'Trinidad & Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States of America',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City (Holy See)',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
];



const submitForm = async () => {
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form.value)
        });

        const result = await response.json();

        if (result.success) {
            alert('Thank you for your submission! We will contact you soon.');
            // Reset form
            form.value = {
                firstName: '',
                lastName: '',
                company: '',
                jobTitle: '',
                email: '',
                phone: '',
                country: '',
                helpType: '',
                consent: false
            };
        } else {
            alert('Failed to send message. Please try again later.');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred. Please try again later.');
    }
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
