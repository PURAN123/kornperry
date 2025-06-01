<template>
    <section class="header-banner">
        <CommonHeader classNames="max-w-[90%] mx-auto sticky top-0 z-50 text-white bg-transparent" />
        <div>
            <video class="video-background w-full h-auto object-cover" autoplay loop muted playsinline>
                <source src="/banner-video.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div
                class="banner-overlay absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 bg-black/40">
                <div class="text-center">
                    <h1
                        class="text-[3rem] leading-[3.5rem] sm:text-[3rem] sm:leading-[3.5rem] lg:text-[4rem] lg:leading-[4.5rem] 2xl:text-[8rem] xl:leading-[9rem] font-semibold text-white font-bold">
                        Empowering Businesses </h1>
                    <p class="text-2xl font-semibold text-white px-20 mt-10">to reach their full potential. It always starts with people.</p>
                    <div class="w-auto mt-7">
                        <button type="button" class="capitalize bg-white text-primary px-4 py-1 rounded-full font-semibold" @click="navigateTo('/contact')">
                            How can we help you?
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
.header-banner {
    position: relative;
    min-height: 80vh;
    height: auto;
}

.video-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
