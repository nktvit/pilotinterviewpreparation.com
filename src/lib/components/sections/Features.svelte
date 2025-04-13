<script>
    import Img from '@zerodevx/svelte-img';
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import {ScrollArea} from "$lib/components/ui/scroll-area/index.js";
    import Autoplay from "embla-carousel-autoplay";
    import {WheelGesturesPlugin} from 'embla-carousel-wheel-gestures';

    // Images
    import examinationCenter from '$lib/assets/examination-center.png?normalize&as=run';
    import cvWriting from '$lib/assets/cv-writing.jpg?as=run';
    import planeIrish from '$lib/assets/plane-irish.jpg?as=run';
    import groupTraining from '$lib/assets/group-training.png?as=run';
    import professionalDevelopment from '$lib/assets/professional-development.jpg?as=run';

    // Data
    export const slides = [
        {
            title: "Strategies",
            content: `
            <span>Master proven&nbsp;</span><strong>structured interview techniques</strong>
            <span>&nbsp;that global airlines use today. Through one-to-one coaching, you'll develop the&nbsp;</span>
            <strong>competency-based answers</strong>
            <span>&nbsp;that assessors look for. Our approach combines current airline standards with your personal experience, ensuring you interview with confidence and authenticity.</span>
            `,
            caption: "Assessment Centre",
            image: examinationCenter
        },
        {
            title: "CV Enhancement",
            content: `
            <span>A powerful&nbsp;<strong>Curriculum Vitae</strong>&nbsp;that presents your&nbsp;<strong>career development</strong>&nbsp;in a professional manner is a great start to achieving your goals. Its important that a recruiter receives a CV that presents your complete personal history and flying experience in a way that identifies you a suitable candidate for the&nbsp;<strong>airlines needs</strong>.</span><p><br></p>
            `,
            caption: "CV development",
            image: cvWriting

        },
        {
            title: "Training",
            content: `
            <span>Walk into your&nbsp;</span><strong>airline assessment day</strong><span>&nbsp;fully prepared and confident. Our realistic&nbsp;</span><strong>group exercise practice</strong><span>&nbsp;mirrors what you'll face at major carriers. From technical questions to team scenarios, you'll be ready to demonstrate your capabilities naturally and effectively.</span>`,
            caption: "Group Training",
            image: groupTraining

        },
        {
            title: "Airline-Specific",
            content: `Gain valuable insights into current&nbsp;<strong>airline selection processes</strong>&nbsp;and requirements. Learn from recently successful&nbsp;<strong>pilot interviews</strong>&nbsp;what works right now. Our continuously updated guidance helps you understand each airline's priorities and culture, maximizing your interview success rate.`,
            caption: "Irish Air Corps aircraft",
            image: planeIrish

        },
        {
            title: "Professional Development",
            content: `<span>Master the key&nbsp;</span><strong>airline competencies</strong><span>&nbsp;that define successful candidates. Show deep understanding of modern&nbsp;</span><strong>commercial aviation</strong><span>&nbsp;operations and challenges. We'll help you demonstrate the natural&nbsp;</span><strong>leadership abilities</strong><span>&nbsp;that make you stand out as the ideal pilot for their team.</span>`,
            caption: "Virgin Atlantic aircraft",
            image: professionalDevelopment

        }
    ];

    //  States
    let api = $state(null);
    let countSlideFeatures = $state(0);
    let currentSlideFeatures = $state(0);
    let currentContentFeatures = $derived(slides[currentSlideFeatures]?.content ?? '');

    $effect(() => {
        if (api) {
            countSlideFeatures = api.scrollSnapList().length;
            currentSlideFeatures = api.selectedScrollSnap();

            api.on("select", () => {
                currentSlideFeatures = api.selectedScrollSnap();
            });
        }
    });

    function gotoSlide(i) {
        return () => {
            if (api) {
                api.scrollTo(i);
                api.plugins()?.autoplay?.stop();
            }
        };
    }

    function handleKeydown(i, e) {
        if (e.key === 'ArrowRight') {
            gotoSlide((i + 1) % countSlideFeatures)();
        } else if (e.key === 'ArrowLeft') {
            gotoSlide((i - 1 + countSlideFeatures) % countSlideFeatures)();
        }
    }
</script>

<section class="container mx-auto py-12 sm:max-w-xl xl:max-w-2xl">
    <!--desktop only-->
    <div class="hidden portrait:sm:block landscape:lg:block mt-12 mx-auto">
        <Carousel.Root
                setApi={(emblaApi) => (api = emblaApi)}
                opts={{
                    align: "center",
                    loop: true,
                    duration: 30,
                    containScroll: false,
                }}
                plugins={[
                    Autoplay({
                        delay: 6000,
                    }),
                    WheelGesturesPlugin({
                        forceWheelAxis: 'x',
                    })
                ]}
                class="px-8"
        >
            <Carousel.Content>
                {#each slides as slide, i (i)}
                    <Carousel.Item class="md:flex-[0_0_70%] min-w-0">
                        <div class="p-1">
                            <Img
                                    class="w-full h-full aspect-square object-cover"
                                    src={slide.image}
                                    alt={slide.caption}
                            />
                        </div>
                        <span class="block text-left ml-4 mt-1 text-primary-foreground">
                            {slide.caption}
                        </span>
                    </Carousel.Item>
                {/each}
            </Carousel.Content>
        </Carousel.Root>

        <div class="hidden text-muted-foreground py-2 text-center text-sm">
            Slide {currentSlideFeatures + 1} of {countSlideFeatures}
        </div>

        <ScrollArea class="whitespace-nowrap" orientation="horizontal">
            <div class="flex w-max p-4">
                {#each slides as slide, i (i)}
                    <button
                            class={`text-white box-content focus:ring-0 focus:outline-0 border-b border-muted-foreground py-4 px-3 focus: transition-colors
                ${i === currentSlideFeatures ? "border-b-[2.5px] bg-white/10 border-white" : ""}`}
                            onclick={gotoSlide(i)}
                            onkeydown={(e) => handleKeydown(i, e)}
                    >
                        {slide.title}
                    </button>
                {/each}
            </div>
        </ScrollArea>

        <div class="sm:h-[300px] w-[70%] mx-auto mt-6">
            {#if currentContentFeatures}
                <p class="text-primary-foreground text-2xl">{@html currentContentFeatures}</p>
            {/if}
        </div>
    </div>

    <!--mobile only-->
    <div class="portrait:sm:hidden landscape:lg:hidden">
        <div class="grid grid-cols-1 landscape:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {#each slides as slide, i (i)}
                <div class="min-w-0 {slides.length - 1 === i && (i+1) % 2 === 1 ? 'landscape:col-span-2' : ''}">
                    <div class="p-1 landscape:p-3">
                        <Img
                                class="w-full object-cover aspect-square {slides.length - 1 === i && (i+1) % 2 === 1 ? 'landscape:aspect-[16/9]' : ''}"
                                src={slide.image}
                                alt={slide.caption}
                        />
                    </div>
                    <span class="block text-left ml-4 mt-1 landscape:text-sm text-primary-foreground">
                        {slide.caption}
                    </span>
                    <div class="p-4">
                        <h4 class="text-white text-left text-3xl landscape:text-2xl font-medium mt-3 mb-4">{slide.title}</h4>
                        <p class="text-primary-foreground text-left text-xl landscape:text-lg">{@html slide.content}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
