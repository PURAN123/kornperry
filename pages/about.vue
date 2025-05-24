<template>
    <div class="about-page">
        <!-- Banner Section -->
        <section
            class="banner-section relative h-auto overflow-hidden min-h-[500px] before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-50">
            <CommonHeader classNames="sticky top-0 z-50 backdrop-blur-md bg-white/30" />

            <!-- Content -->
            <div
                class="min-h-[300px] relative px-4 flex flex-col justify-center items-center text-white h-full text-center">
                <div class="max-w-4xl h-full">
                    <h6 class="text-xl mb-4 font-medium tracking-wide">ABOUT</h6>
                    <h1 class="text-6xl font-bold my-8">OUR STORY</h1>
                    <div class="text-2xl space-y-2 font-semibold">
                        <p>History provides perspective.</p>
                        <p>Future inspires opportunity.</p>
                    </div>
                </div>
            </div>

            <!-- Timeline Section -->
        </section>
        <div class="timeline-section relative m-16  px-4 md:px-8 max-w-6xl mx-auto">
            <div class="flex flex-col items-center">


                <!-- Timeline Description -->
                <div class=" text-center mt-12 max-w-3xl">
                    <p class="text-lg leading-relaxed">
                        Today, from being in a global organization operating from strategic locations together
                        cutting-edge talent to
                        being a trusted partner for our clients, we have come a long way. With our deep industry
                        expertise and
                        capabilities, we cannot but admire at the powerful impact we create here. We not only
                        extended
                        our reach but also our commitment to delivering excellence.
                    </p>
                    <p class="text-lg leading-relaxed mt-4">
                        We set out not only to place fine executives but also to partner with like-minded
                        organizations to
                        help them find talented leaders functioning at complex and crucial decision levels. This
                        journey of
                        continuous evolution reflects our commitment to responding to changes worldwide through
                        leading-edge and thought-laden solutions.
                    </p>
                </div> <!-- Timeline Items -->
                <div class="flex flex-row justify-between w-full max-w-4xl mt-12">
                    <!-- Today-2015 -->
                    <div class="flex flex-col items-center">
                        <div class="bg-primary text-white px-4 py-2 rounded">TODAY-2015</div>
                    </div>

                    <!-- 2015-2009 -->
                    <div class="flex flex-col items-center">
                        <div class="bg-primary text-white px-4 py-2 rounded">2015-2009</div>
                    </div>

                    <!-- 2008-1997 -->
                    <div class="flex flex-col items-center">
                        <div class="bg-primary text-white px-4 py-2 rounded">2008-1997</div>
                    </div>

                    <!-- 1996 -->
                    <div class="flex flex-col items-center">
                        <div class="bg-primary text-white px-4 py-2 rounded">1996</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Our Team Section -->
        <section class="timeline-modern py-16 px-4 md:px-8 max-w-6xl mx-auto">
            <div class="relative">
                <!-- Vertical Line -->
                <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary"></div>

                <!-- Timeline Items -->
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

                            <!-- 2023 Item -->
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
            </div>


            <!-- banner section -->
            <div class="bg-white py-16">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-col items-center">
                        <div class="relative w-full max-w-2xl mx-auto">
                            <h2 class="text-6xl font-bold text-textPrimary text-center">1969</h2>
                            <h3 class="text-2xl font-semibold text-center mt-2">Hire Multiverse's beginnings</h3>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row items-center justify-between mt-16 gap-12">
                        <!-- Left side with text -->
                        <div class="w-full md:w-1/2 space-y-6">
                            <p class="text-gray-600 font-medium">
                                Hire Multiverse was founded in Los Angeles by Lester B. Korn and Richard M. Ferry
                            </p>
                            <p class="text-gray-600">
                                Hire Multiverse started as a small office in Century City Los Angeles. One phone,
                                one assistant, and a vision. From those humble beginnings, we've never lost sight of
                                everything Hire Multiverse International came to being about.
                            </p>
                            <p class="text-gray-600">
                                From the beginning, Hire Multiverse had a strong vision of looking to what was
                                possible.
                            </p>
                        </div>

                        <!-- Right side with images -->
                        <div class="w-full md:w-1/2 relative h-[400px]">
                            <img src="/images/about/photo1.avif" alt="Historical photo 1"
                                class="w-72 h-72 rounded-lg shadow-lg absolute left-0 top-0 z-10" data-aos="fade-up" />
                            <img src="/images/about/photo2.avif" alt="Historical photo 2"
                                class="w-72 h-72 rounded-lg shadow-lg absolute right-0 bottom-0" data-aos="fade-up"
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
        description: 'Hire Multiverse Acquires TwentyEighty Companies. The combination brought a world-class portfolio of learning, development, and performance improvement offerings and expertise to Hire Multiverse, bolstering the firm’s substantial leadership development capabilities'
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
        description: 'Futurestep, Hire Multiverse’s internet-based recruitment service targeted at professionals who were not the typical target of executive recruiting, is launched.'
    },


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
