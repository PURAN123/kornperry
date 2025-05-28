<template>
    <div class="about-page">
        <!-- Banner Section -->
        <section
            class="banner-section relative h-auto overflow-hidden min-h-[500px] before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-50">
            <CommonHeader classNames="max-w-[90%] mx-auto sticky top-0 z-50 text-white bg-transparent" />

            <!-- Content -->
            <div
                class="min-h-[300px] relative px-4 flex flex-col justify-center items-center text-white h-full text-center">
                <div class="max-w-4xl h-full">
                    <h6 class="text-xl mb-4 font-medium tracking-wide">ABOUT</h6>
                    <h1 class="text-6xl font-bold my-8">OUR STORY</h1>
                    <div class="text-2xl space-y-2 font-semibold">
                        <p>In 2023, we didn't just start a recruitment consultancy — we started a movement.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Timeline Section -->
        </section>
        <div class="timeline-section relative m-16  px-4 md:px-8 max-w-6xl mx-auto">
            <div class="flex flex-col items-center">


                <!-- Timeline Description -->
                <div class=" text-center mt-12 max-w-3xl space-y-4 text-xl">
                    <p>
                        Born from the frustration of cookie-cutter hiring and robotic processes, our story began with a
                        bold
                        question:
                        "What if recruitment could be human again?"


                        At a time when AI and automation dominate inboxes, we chose a different route — people-first
                        hiring.
                        We built our consultancy on the belief that talent isn't just a resume; it's potential, passion,
                        and
                        personality.
                    </p>


                    <p> With years of experience in high-volume hiring, start-up agility, and enterprise precision,
                        we've
                        turned hiring into a craft. Whether you're a growing startup or a scaling enterprise, we don't
                        just
                        find people — we find your people.

                    </p>
                    <div>
                        From tech wizards to sales rainmakers, from design minds to strategic leaders — we've placed
                        them
                        all. But what makes us truly different is our obsession with:
                    <ul>
                        <li>Culture-fit over checkbox-fit</li>
                        <li>Speed without compromise</li>
                        <li>Candidate experience that mirrors your brand</li>
                    </ul>
                    </div>
                    <p>
                        We've helped companies cut time-to-hire by 30%, boost offer conversion, and build pipelines that
                        don't just fill roles — they future-proof your business.

                        At our core, we aren't just recruiters.
                        We're matchmakers, storytellers, brand custodians, and business enablers.

                        Because hiring isn't just a function.
                        It's the heartbeat of your company.
                        And we're here to make sure it beats stronger, smarter, and faster.

                        Would you like to add your company name, tagline, or specific industry focus so I can tailor
                        this even further?
                    </p>

                </div>
                 <!-- Timeline Items -->
                <!-- <div class="flex flex-row justify-between w-full max-w-4xl mt-12">
                
                    <div class="flex flex-col items-center">
                        <div class="bg-primary text-white px-4 py-2 rounded">TODAY-2015</div>
                    </div>

                    <div class="flex flex-col items-center">
                        <div class="bg-primary text-white px-4 py-2 rounded">2015-2009</div>
                    </div>

                    <div class="flex flex-col items-center">
                        <div class="bg-primary text-white px-4 py-2 rounded">2008-1997</div>
                    </div>

                    <div class="flex flex-col items-center">
                        <div class="bg-primary text-white px-4 py-2 rounded">1996</div>
                    </div>
                </div> -->
            </div>
        </div>

        <!-- Our Team Section -->
        <section class="timeline-modern py-16 px-4 md:px-8 max-w-6xl mx-auto">
            <!-- <div class="relative">
                <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary"></div>

                <div class="space-y-10">
                    <div v-for="(item, index) in timelineItems" :key="item.year">
                        <div class="relative"
                            style="background-image: url('/images/about/timeline-bg.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; min-height: 200px;">
                            <div class="relative flex items-center justify-between" v-if="index % 2 === 0"
                                style="background-color: rgba(255, 255, 255, 0.8);">
                                <div class="w-6/12">
                                    <div class="text-right p-6" data-aos="fade-right">
                                        <h3 class="text-3xl font-bold text-textPrimary mb-2">{{ item.year }}</h3>
                                        <p class="text-gray-600">
                                            {{ item.description }}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full">
                                </div>
                                <div class="w-5/12 flex justify-start">
                                    <img src="/images/about/photo1.avif" :alt="'Image for ' + item.year"
                                        class="w-48 h-48 object-cover rounded-lg shadow-md relative right-0"
                                        data-aos="fade-up" />
                                </div>
                            </div>

                            <div class="relative flex items-center justify-between" v-else
                                style="background-color: rgba(255, 255, 255, 0.8);">
                                <div class="w-5/12 flex justify-end">
                                    <img src="/images/about/photo1.avif" :alt="'Image for ' + item.year"
                                        class="w-48 h-48 object-cover rounded-lg shadow-md relative right-0"
                                        data-aos="fade-up" />
                                </div>
                                <div class="w-6/12">
                                    <div class="bg-white p-6" data-aos="fade-left">
                                        <h3 class="text-3xl font-bold text-textPrimary mb-2">{{ item.year }}</h3>
                                        <p class="text-gray-600">
                                            {{ item.description }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div> -->


            <!-- banner section -->
            <div class="bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-col items-center">
                        <div class="relative w-full max-w-2xl mx-auto">
                            <h2 class="text-6xl font-bold text-textPrimary text-center">2023</h2>
                            <h3 class="text-3xl font-semibold text-center mt-2">Hire Multiverse's beginnings</h3>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row items-center justify-between mt-16 gap-12 text-xl">
                        <!-- Left side with text -->
                        <div class="w-full md:w-1/2 space-y-6">
                            <p class="text-gray-600 font-medium">
                                Our company emerged as a disruptive force in talent acquisition when two visionary entrepreneurs with a shared dream launched their groundbreaking venture.
                            </p>
                            <p class="text-gray-600">
                                Our genesis story began in a lean startup environment. Armed with minimal infrastructure but maximum ambition - just one phone line, one executive assistant, and an innovative mindset. This bootstrapped beginning shaped our DNA, and today, our global organization continues to embody that entrepreneurial spirit.
                            </p>
                            <p class="text-gray-600">
                                Since day one, our north star has been innovation and transformation in the talent ecosystem. We've consistently pushed the boundaries of what's achievable in human capital solutions.
                            </p>
                        </div>

                        <!-- Right side with images -->
                        <div class="w-full md:w-1/2 relative h-[400px]">
                            <img src="/images/home/1.jpg" alt="Historical photo 1"
                                class="w-72 h-72 rounded-lg shadow-lg absolute left-0 top-0 z-10" data-aos="fade-up" />
                            <img src="/images/home/3.jpg" alt="Historical photo 2"
                                class="w-72 h-72 rounded-lg shadow-lg absolute right-0 bottom-0 object-cover" data-aos="fade-up"
                                data-aos-delay="200" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>

const timelineItems = [
    {
        year: '2024',
        description: 'Hire Multiverse acquires Trilogy International, a leading provider of digital talent, serving clients in technology, financial services, healthcare, and other industries across EMEA.'
    },
    {
        year: '2023',
        description: 'Hire Multiverse acquires Salo, a talent firm specializing in finance, accounting and HR. Salo connects experienced professionals to flexible and fulfilling careers and matches them with organizations in need of their expertise.'
    },
    {
        year: '2022',
        description: 'Hire Multiverse acquires ICS (Infinity Consulting Solutions), a leading provider of interim workforce staffing solutions. ICS helps organizations fill professional-level roles in IT, compliance, legal, accounting, finance and human resources.'
    },
    {
        year: '2021',
        description: 'Hire Multiverse acquires Patina Solutions Group, a leading interim solutions firm. Patina provides senior level professional and executive interim solutions to the private equity manufacturing, healthcare, food & consumer packaged goods and professional services markets.'
    },
    {
        year: '2019',
        description: 'Hire Multiverse Acquires TwentyEighty Companies. The combination brought a world-class portfolio of learning, development, and performance improvement offerings and expertise to Hire Multiverse, bolstering the firm\'s substantial leadership development capabilities'
    },
    {
        year: '2019',
        description: 'Launch of Hire Multiverse Advance, our business-to-consumer offering.'
    },
    {
        year: '2015',
        description: 'Hire Multiverse unites with Hay Group, the largest global, independent premier Human Resources consultancy, creating a combined firm with the ability to address the entire talent continuum.'
    },
    {
        year: '2010 - 2006',
        description: 'During this time, Hire Multiverse acquires Lominger, Newman Group, LeaderSource, Lore, Whitehead Mann, Sensa, Global Novations, PDI Ninth House, and Pivot Leadership.'
    },
    {
        year: '2008',
        description: 'Our research and analytics arm, Hire Multiverse Institute, is first established, to share intelligence and expert points of view on talent and leadership.'
    },
    {
        year: '2000',
        description: 'Our research and analytics arm, Hire Multiverse Institute, is first established, to share intelligence and expert points of view on talent and leadership.'
    },
    {
        year: '1998',
        description: 'Futurestep, Hire Multiverse\'s internet-based recruitment service targeted at professionals who were not the typical target of executive recruiting, is launched.'
    }
]   
</script>

<style scoped>
.banner-section {
    background-image: url('/images/about/banner.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-opacity: 0.5;
}
</style>
