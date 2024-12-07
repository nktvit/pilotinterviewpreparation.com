<script>
    // Images
    import yellowHelicopter from '$lib/assets/yellow-helicopter.jpeg?as=run'
    import Img from '@zerodevx/svelte-img'
    import * as Card from "$lib/components/ui/card/index.js";

    // Carousel
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import Autoplay from "embla-carousel-autoplay";
    import {WheelGesturesPlugin} from 'embla-carousel-wheel-gestures'

    // Carousel slides
    const slides = [
        {
            title: "Slide 1",
            content: "Content 1",
            caption: "Caption 1"
        },
        {
            title: "Slide 2",
            content: "Content 2",
            caption: "Caption 2"
        },
        {
            title: "Slide 3",
            content: "Content 3",
            caption: "Caption 3"
        },
        {
            title: "Slide 4",
            content: "Content 4",
            caption: "Caption 4"
        },
        {
            title: "Slide 5",
            content: "Content 5",
            caption: "Caption 5"
        }
    ]

    // Carousel states
    let api = $state();

    const count = $derived(api ? api.scrollSnapList().length : 0);
    let current = $state(0);

    $effect(() => {
        if (api) {
            current = api.selectedScrollSnap() + 1;
            api.on("select", () => {
                current = api.selectedScrollSnap() + 1;
            });
        }
    });

    function gotoSlide(i) {
        return () => {
            if (api) {
                api.scrollTo(i - 1);
                api.plugins().autoplay.stop()
            }
        };
    }

</script>

<div class=" text-center bg-[rgb(1,23,55)]">
    <header class="container mx-auto flex flex-col h-[90vh]">
        <div id="logo" class="flex mt-5 items-center justify-center text-left">
            <svg width="38" height="41" viewBox="0 0 38 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_4010_6)" filter="url(#filter0_i_4010_6)">
                    <path d="M37.6869 28.2292L37.2597 23.5347L21.7694 14.7692C21.7694 14.7692 21.9077 11.7933 21.7694 7.40635C21.6157 4.64991 20.6296 2.03497 18.9741 -0.00610352L18.9817 0.00414647H18.7051C17.0589 2.03279 16.0758 4.63059 15.9174 7.37047L15.9159 7.40635C15.7776 11.7916 15.9159 14.7692 15.9159 14.7692L0.42712 23.5347L0 28.2292L10.4713 24.6861L15.7776 23.6919C15.5857 27.7997 15.9616 31.9161 16.8917 35.8945L16.837 35.6177L12.6905 37.4883V40.5599L18.0409 39.1933C18.2765 39.7263 18.4969 40.1602 18.734 40.5804L18.7021 40.5206V41.0024C18.7497 40.9227 18.7968 40.8412 18.8434 40.7581L18.9863 41.0024V40.5206C19.1915 40.1619 19.4119 39.728 19.6125 39.2804L19.6475 39.1933L24.9979 40.5599V37.4883L20.8513 35.6177C21.5551 32.6572 21.9579 29.2576 21.9579 25.7538C21.9579 25.0283 21.9407 24.3074 21.9062 23.5911L21.9108 23.6902L27.2186 24.6844L37.6884 28.2275L37.6869 28.2292Z"
                          fill="white"/>
                </g>
                <defs>
                    <filter id="filter0_i_4010_6" x="0" y="0" width="38" height="41" filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="0.7"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix"
                                       values="0 0 0 0 0.00392157 0 0 0 0 0.0901961 0 0 0 0 0.215686 0 0 0 0.69 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_4010_6"/>
                    </filter>
                    <clipPath id="clip0_4010_6">
                        <rect width="38" height="41" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            <span class="ml-1.5 text-white">Pilot<br/>Interview<br/>Preparation</span>
        </div>
        <div class="flex-1 flex flex-col justify-between mt-36 text-white">
            <h1 class=" ">Land your<br/>dream<br/>airline Job</h1>
            <div class="flex flex-col items-center mb-12">
                <h2 class="mb-6">Book Your Session with a<br/>Former Airline Assessor</h2>
                <a href="#">
                    <button id="btn-cta" class="bg-[rgb(255,164,46)] w-fit px-8 py-2"><span class="block mt-1.5">Book Now</span>
                    </button>
                    <hr class="h-0.5 w-full mt-0.5 bg-[rgb(255,164,46)] border-0">
                </a>

            </div>

        </div>
        <div id="links" class="flex flex-row justify-between mt-8 mb-12 text-white">
            <a class="px-3 py-2" href="#">Testimonials</a>
            <a class="px-3 py-2" href="#">Contact</a>
        </div>
    </header>
    <main class=" flex flex-col">
        <section class="py-6 relative h-[500px]">
            <Img
                    class="w-full h-[85%] absolute top-0 left-0 object-cover object-[55%_center]"
                    src={yellowHelicopter}
                    alt="A yellow helicopter"
            />
            <!--black overlay-->
            <div class="absolute h-[85%] inset-0 bg-black/35 -z-5"></div>
            <div class="h-full  flex flex-col relative  mt-12 justify-between">
                <h3 class="text-white">Trainings That<br/>Get Results</h3>
                <div class="backdrop-blur">
                    <div class="w-[70%] md:w-1/2 lg:w-1/3 mx-auto pt-4">
                        <p class="text-xl text-primary-foreground mb-6">From recent graduates to <strong>command
                            upgrades</strong>, we
                            prepare pilots for their <strong>target airlines</strong>. Our proven approach combines
                            current
                            industry knowledge with <strong>personalised guidance</strong>.</p>
                    </div>
                </div>


            </div>
        </section>
        <section class="container mx-auto pt-16 pb-8">
            <h3 class="text-white mt-8">About Us</h3>
            <Carousel.Root
                    setApi={(emblaApi) => (api = emblaApi)}
                    opts={{
                        align: "start",
                        loop: true,
                        duration: 30,
                        containScroll: "keepSnaps",
                      }}
                    plugins={[
                        Autoplay({
                          delay: 10000,
                        }),
                        WheelGesturesPlugin({
                            forceWheelAxis: 'x',
                        })
                      ]}
                    class="w-full max-w-sm"
            >
                <Carousel.Content>
                    {#each Array(5) as _, i (i)}
                        <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
                            <div class="p-1">
                                <Card.Root>
                                    <Card.Content
                                            class="flex aspect-square items-center justify-center p-6"
                                    >
                                        <span class="text-3xl font-semibold">{i + 1}</span>
                                    </Card.Content>
                                </Card.Root>
                            </div>
                            <span class="block text-left ml-4 mt-1 text-primary-foreground">Examination</span>

                        </Carousel.Item>
                    {/each}
                </Carousel.Content>
            </Carousel.Root>
            <div class="text-muted-foreground py-2 text-center text-sm">
                Slide {current} of {count}
            </div>
            <div class="flex flex-row space-x-2">
                {#each slides as slide, i (i)}
                    <button class={`text-white p-4 ${i+1 === current ? "bg-white/80" : ""}`} onclick={gotoSlide(i+1)}>{slide.title}</button>
                {/each}
            </div>
        </section>
    </main>
</div>
