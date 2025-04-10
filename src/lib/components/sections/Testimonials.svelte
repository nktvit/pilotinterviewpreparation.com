<script>
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import {ChevronLeft, ChevronRight, Quote} from "lucide-svelte";
    import Autoplay from "embla-carousel-autoplay";
    import {WheelGesturesPlugin} from 'embla-carousel-wheel-gestures';

    export const testimonials = [
        {
            content: "<p class='text-xl'>+1 recommendation for @Denis Cassidy, really useful for pre-interview prep. Good luck 👍🤞</p>",
            role: "First Officer",
            name: "Oliver Campbell",
            airline: "Virgin Atlantic",
        },
        {
            content: "<p>Hi all, just a small review for @Denis Cassidy. Interviews for me have been a bit of a struggle, but Denis was a <strong>fantastic help</strong> for me. He helped me gain confidence for the interview in general and helped me get into the right mindset going into the interview.</p>" +
                "<p>Highly recommend for anyone approaching final interview or the Zenon interview to give Denis a shout.</p>",
            role: "First Officer",
            name: "Angus Hayes",
            airline: "Virgin Atlantic",
        },
        {
            content: "<p class='text-lg'>If anyone is preparing for their final interview I do strongly recommend contacting @Denis Cassidy. He was a fantastic help to gain confidence and to put me in the right mindset to face the final interview.</p>",
            role: "First Officer",
            name: "G. Adriani",
            airline: "Cathay Pacific Airways",
        },
        {
            content: "<p>I recently had a session with Denis Cassidy about preparation for my interview with one of the best airlines worldwide, Virgin Atlantic. The session with him not only <strong>changes your mindset</strong> to gain the position you are applying for, but gives a lot of advice, tips, points of view and suggestions that will make you perform in a unique way at your interview.</p>" +
                "<p>All the useful things I learned from him are so crucial that I will bring with me and apply for most of the career goals I will want to achieve in the future. To contact him was a <strong>great choice</strong> that was fundamental for my successful interview. Thank you Denis!</p>",
            role: "First Officer",
            name: "Manuel Simone",
            airline: "ITA Airways SuPra. - Italy",
        },
        {
            content: "<p>I cannot express how grateful I am for the <strong>exceptional interview preparation</strong> I received from Denis Cassidy for my First Officer position. His experience gave me a thorough and insightful view of the aviation industry. The guidance I received was tailored to me and my CV giving me an insight into the skills already present from my experiences.</p>" +
                "<p>This preparation boosted my confidence and helped me articulate my thoughts more clearly in the interview. Thanks to the fantastic prep I was able to secure the position I wanted. I would <strong>highly recommend</strong> Denis Cassidy's services to anyone looking to excel in their aviation interviews.</p>",
            role: "First Officer",
            name: "Richard O'Brien",
            airline: "AerLingus Regional",
        },
        {
            content: "<p>I recently had the incredible opportunity to work with Denis Cassidy for my interview preparation with Virgin Atlantic. Through this experience, it became crystal clear that Denis possesses a <strong>wealth of knowledge and expertise</strong> that spans decades and continents in the aviation industry. His deep understanding of pilot placement, especially for prestigious airlines like Virgin Atlantic, is both enlightening and motivating.</p>" +
                "<p>Denis's approach to interview preparation is unparalleled. He emphasizes the critical importance of being thoroughly prepared, making it evident that going into such a process unprepared is a serious disadvantage. The Virgin Atlantic interview, as I learned firsthand from Denis, is unlike any other in the airline industry. It requires not just knowledge and skill but a profound understanding of the company's culture and values, something that Denis was exceptionally equipped to provide guidance on.</p>" +
                "<p>His mentorship was not just about preparation but about building confidence, fine-tuning strengths, and addressing weaknesses with a positive and constructive outlook. Denis's dedication to aviation and to the success of his candidates shines brightly, offering not just advice but <strong>genuine support and encouragement</strong>.</p>" +
                "<p>Despite the inherent challenges of the interview process, Denis's guidance was instrumental in my preparedness and mindset. His talent for making complex concepts accessible, combined with his sincere commitment to my success, was a source of inspiration and positivity.</p>" +
                "<p>For anyone aspiring to a career in aviation, especially with an eye on Virgin Atlantic, Denis Cassidy's guidance is invaluable. His expertise, commitment, and the personalized support he offers are second to none. A heartfelt thank you to Denis for not just preparing me for the interview but for highlighting the importance of comprehensive preparation in facing the unique challenges posed by Virgin Atlantic. Your impact on my journey has been profound.</p>",
            role: "First Officer",
            name: "Justin Butler",
            airline: "Ryanair",
        },
        {
            content: "<p>Hi all. I was recently successful for a different airline. I used Dennis to help me with this. I highly recommend him, even for last minute prep. He has vast knowledge and experience in recruiting airline pilots. And he will give a valuable insight as to what the interviewers are looking for in your interview.</p>" +
                "<p>All the best and good luck.</p>",
            role: "First Officer",
            name: "Karl Trigwell",
            airline: "DHLI",
        }
    ];

    //  States
    let testimonialApi = $state(null);
    const expandedStates = $state(new Array(testimonials.length).fill(false));

    function scrollPrev() {
        if (testimonialApi) testimonialApi.scrollPrev();
    }

    function scrollNext() {
        if (testimonialApi) testimonialApi.scrollNext();
    }
</script>

<section class="container mx-auto flex flex-col py-8 sm:py-12 md:py-16">
    <div class="relative group touch-pan-y">
        <Carousel.Root
                setApi={(emblaApi) => (testimonialApi = emblaApi)}
                opts={{
                align: "center",
                loop: true,
                duration: 30,
                containScroll: false,
                slidesInView: 3
            }}
                plugins={[
                Autoplay({
                    delay: 6000,
                }),
                WheelGesturesPlugin({
                    forceWheelAxis: 'x',
                })
            ]}
                class="w-full px-2 sm:px-4 md:px-8"
        >

            <Carousel.Content role="region" aria-label="Testimonials carousel" class="gap-4">
                {#each testimonials as testimonial, i (i)}
                    <Carousel.Item
                            class="min-w-0 portrait:md:basis-1/2 landscape:xl:basis-1/3 md:p-4"
                            role="group"
                            aria-label={`Testimonial ${i + 1} of ${testimonials.length}`}
                    >
                        <Card.Root class="h-full bg-[rgb(1,23,55)] transition-shadow hover:shadow-lg">
                            <Card.Content class="h-full flex flex-col p-3 sm:p-6 md:p-8">
                                <figure class="flex flex-col h-full">
                                    <blockquote class="flex-1 text-primary-foreground text-left">
                                        <div class="flex justify-start mb-2 sm:mb-4" aria-hidden="true">
                                            <Quote class="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-[hsl(var(--accent))]"/>
                                        </div>
                                        <div class="custom-scrollbar space-y-2 overflow-y-auto max-h-[250px] sm:max-h-[300px] landscape:sm:max-h-[15vw] pr-2">
                                            <div class="text-base sm:text-lg leading-relaxed px-2 pt-2">
                                                {@html testimonial.content}
                                            </div>
                                        </div>
                                    </blockquote>

                                    <figcaption
                                            class="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-[hsl(var(--accent))]/20">
                                        <cite class="not-italic">
                                            <div class="text-base sm:text-lg md:text-xl roboto-medium text-white">
                                                {testimonial.name}
                                            </div>
                                            <div class="text-sm sm:text-base md:text-lg text-[hsl(var(--accent))] roboto-medium">
                                                {testimonial.role}
                                            </div>
                                            <div class="text-xs sm:text-sm md:text-base text-primary-foreground/80 roboto-regular">
                                                {testimonial.airline}
                                            </div>
                                        </cite>
                                    </figcaption>
                                </figure>
                            </Card.Content>
                        </Card.Root>
                    </Carousel.Item>
                {/each}
            </Carousel.Content>
            <div class="absolute -left-2 top-1/2 -translate-y-1/2 z-10">
                <button
                        class="p-2 rounded-full bg-[rgb(1,23,55)]/80 text-white hover:bg-[rgb(1,23,55)] transition-colors duration-200 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
                        onclick={scrollPrev}
                        aria-label="Previous testimonial"
                >
                    <ChevronLeft class="h-6 w-6"/>
                </button>
            </div>

            <div class="absolute right-2 top-1/2 -translate-y-1/2 z-10">
                <button
                        class="p-2 rounded-full bg-[rgb(1,23,55)]/80 text-white hover:bg-[rgb(1,23,55)] transition-colors duration-200 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
                        onclick={scrollNext}
                        aria-label="Next testimonial"
                >
                    <ChevronRight class="h-6 w-6"/>
                </button>
            </div>
        </Carousel.Root>
    </div>
</section>

<style>
    /* Custom scrollbar styles */
    .custom-scrollbar {
        scrollbar-width: thin;
        scrollbar-color: hsl(var(--accent)) transparent;
    }

    .custom-scrollbar::-webkit-scrollbar {
        width: 8px;
        background-color: transparent;
    }

    .custom-scrollbar::-webkit-scrollbar-thumb {
        background-color: hsl(var(--accent));
        border-radius: 4px;
    }

    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background-color: hsl(var(--accent) / 0.8);
    }

    .custom-scrollbar::-webkit-scrollbar-track {
        background-color: transparent;
    }
</style>
