<script>
    import {FxParallax as ImgParallax} from '@zerodevx/svelte-img';
    import planeIrish from '$lib/assets/plane-irish.jpg?as=run';
    import {fly, fade} from 'svelte/transition';
</script>

<section id="parallax" class="relative h-[450px] md:h-[600px] lg:h-[700px] xl:h-[800px] overflow-hidden">
    <div class="absolute inset-0">
        <div class="relative w-full h-full transform scale-110">
            <ImgParallax
                class="w-full h-full object-cover parallax-img"
                factor="0.75"
                src={planeIrish}
                alt="Aircraft"
            />
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[rgb(1,23,55)]"></div>
    </div>
    <div class="relative z-10 h-full flex flex-col justify-center items-center px-4 md:px-6 lg:px-8">
        <div in:fly={{y: 30, duration: 800, delay: 200}} class="text-center">
            <h3 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold mb-8 md:mb-12 tracking-tight">
                Training That<br/>
                <span class="text-white">Gets Results</span>
            </h3>
            <div class="max-w-sm md:max-w-xl lg:max-w-2xl mx-auto" in:fade={{delay: 400, duration: 400}}>
                <p class="text-lg md:text-xl lg:text-2xl text-primary-foreground text-center leading-relaxed">
                    From recent graduates to <strong class="text-white">command upgrades</strong>, we
                    prepare pilots for their <strong class="text-white">airline interview</strong>. Our proven approach combines
                    current industry knowledge with <strong class="text-white">personalised guidance</strong>.
                </p>
            </div>
            <div class="mt-10 md:mt-12" in:fade={{delay: 600, duration: 400}}>
                <a
                    href="tel:+353868167242"
                    class="inline-flex items-center bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 text-black font-bold py-3 px-4 rounded-md transition-colors duration-300"
                >
                    <span class="mr-2">☎️</span> Call Now: +353 868 167 242
                </a>
            </div>
        </div>
    </div>
</section>

<style>
    #parallax {
        isolation: isolate;
    }
</style>
