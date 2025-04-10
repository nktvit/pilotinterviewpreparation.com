<script>
    import {FxParallax as ImgParallax} from '@zerodevx/svelte-img';
    import planeIrish from '$lib/assets/plane-irish.jpg?as=run';
</script>

<section id="parallax" class="relative h-[400px] md:h-[600px] lg:h-[650px] overflow-hidden">
    <div class="absolute inset-0">
        <div class="relative w-[140%] sm:w-full -left-[40%] sm:left-0 h-full">
            <ImgParallax
                    class="w-full h-full object-cover parallax-img"
                    factor="0.75"
                    src={planeIrish}
                    alt="Aircraft"
            />
        </div>
        <div class="absolute inset-0 bg-black/50"></div>
    </div>
    <div class="relative z-10 h-full flex flex-col justify-center items-center px-4 md:px-6 lg:px-8">
        <h3 class="text-3xl md:text-4xl lg:text-5xl text-white text-center font-bold mb-8 md:mb-16">
            Training That<br/>Gets Results
        </h3>
        <div class="max-w-xs lg:max-w-lg">
            <p class="text-xl md:text-xl lg:text-2xl text-primary-foreground text-center font-bold">
                From recent graduates<br class="md:hidden"/> to <strong>command upgrades</strong>, we
                prepare pilots for their <strong>airline interview</strong>. Our proven approach combines
                current industry knowledge with <strong>personalised guidance</strong>.
            </p>
        </div>
    </div>
</section>

<style>
    #parallax {
        isolation: isolate;
    }
</style>
