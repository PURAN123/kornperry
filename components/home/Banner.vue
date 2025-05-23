<template>
    <section class="header-banner">
        <CommonHeader classNames="sticky top-0 z-50 backdrop-blur-md bg-white/30" />
        <div>
            <video class="video-background w-full h-auto object-cover" autoplay loop muted playsinline>
                <source src="/banner-video.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div
                class="banner-overlay absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 bg-black/50">
                <div class="text-center">
                    <h1
                        class="text-[2rem] sm:text-3rem lg:text-[4rem] leading-[5rem] xl:text-[8rem]  xl:leading-[10rem] font-medium text-white">
                        BE <span class="font-bold">MORE </span>THAN </h1>
                    <p class="text-2xl font-semibold text-white px-20">The impact we create spans entire organizations, but
                        always starts with people.</p>
                    <div class="w-auto mt-4">
                        <button type="button" class="capitalize bg-white text-primary px-4 py-1 rounded-sm font-semibold">
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
    min-height: 70vh;
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
