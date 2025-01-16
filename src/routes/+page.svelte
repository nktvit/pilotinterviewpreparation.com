<script>
    // Images
    import yellowHelicopter from '$lib/assets/yellow-helicopter.jpeg?as=run'
    import examinationCenter from '$lib/assets/examination-center.png?normalize&as=run'
    import cvWriting from '$lib/assets/cv-writing.jpg?as=run'
    import planeIrish from '$lib/assets/plane-irish.jpg?as=run'
    import groupTraining from '$lib/assets/group-training.png?as=run'
    import professionalDevelopment from '$lib/assets/professional-development.jpg?as=run'
    import planeDenis from '$lib/assets/plane-denis.jpg?as=run'
    import planeDenis2 from '$lib/assets/plane-denis2.jpg?as=run'

    // Logos
    import aerLingus from '$lib/assets/logos/aer-lingus.png?as=run:0'
    import britishAirways from '$lib/assets/logos/british-airways.png?as=run:0'
    import cathayPacific from '$lib/assets/logos/cathay-pacific.png?as=run:0'
    import dhl from '$lib/assets/logos/dhl.png?as=run:0'
    import easyJet from '$lib/assets/logos/easy-jet.png?as=run:0'
    import jet2 from '$lib/assets/logos/jet2.png?as=run:0'
    import ryanair from '$lib/assets/logos/ryanair.png?as=run:0'
    import virginAtlantic from '$lib/assets/logos/virgin-atlantic.png?as=run:0'

    import Img, {FxParallax as ImgParallax} from '@zerodevx/svelte-img'

    // Components
    import * as Card from "$lib/components/ui/card/index.js";
    import {Separator} from "$lib/components/ui/separator/index.js";
    import {ScrollArea} from "$lib/components/ui/scroll-area/index.js";
    import * as Accordion from "$lib/components/ui/accordion/index.js";
    import * as AlertDialog from "$lib/components/ui/alert-dialog/index.js";
    import {Plane, Phone, Mail, Quote, ChevronLeft, ChevronRight} from "lucide-svelte";
    import Logo from "$lib/components/logo.svelte";
    import CtaButton from "$lib/components/cta-button.svelte";
    import CtaModal from "$lib/components/cta-modal.svelte";
    import {fade} from "svelte/transition";


    // Carousel
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import Autoplay from "embla-carousel-autoplay";
    import {WheelGesturesPlugin} from 'embla-carousel-wheel-gestures'

    // Data
    const slides = [
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
            <span>Powerful&nbsp;<strong>airline pilot CV</strong>&nbsp;that aligns with recruitment systems and catches attention. Your flying experience will be presented to match exactly what airlines want to see. We'll transform your career highlights into compelling achievements that showcase your true potential as a candidate.</span><p><br></p>
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
    ]
    const airlines = [
        {
            title: "British Airways",
            image: britishAirways
        },
        {
            title: "Virgin Atlantic",
            image: virginAtlantic
        },
        {
            title: "Cathay Pacific",
            image: cathayPacific
        },
        {
            title: "DHL",
            image: dhl
        },
        {
            title: "EasyJet",
            image: easyJet
        },
        {
            title: "Jet2",
            image: jet2
        },
        {
            title: "Ryanair",
            image: ryanair
        },
        {
            title: "Aer Lingus",
            image: aerLingus
        }
    ]
    const faqs = [
        {
            question: "How long is the preparation session?",
            answer: "Each preparation session lasts up to 2 hours, with additional time for follow-up questions. This allows for comprehensive coverage of airline-specific scenarios, competency framework, and personalized feedback on your responses."
        },
        {
            question: "When should I schedule my preparation?",
            answer: "Ideally, schedule your session 2-3 weeks before your airline interview. This gives you enough time to implement feedback, practice techniques, and refine your responses while keeping the material fresh in your mind."
        },
        {
            question: "Is online preparation effective?",
            answer: "Yes. Teams sessions have proven highly effective for pilot interview preparation. They allow for dynamic interaction, document sharing, and realistic interview simulation. Our track record shows successful placements at major carriers using this format."
        },
        {
            question: "What airlines do you prepare pilots for?",
            answer: "We provide preparation for major European and Middle Eastern carriers, including flag carriers, low-cost operators, and regional airlines. Our interview scenarios and competency frameworks are regularly updated through our network of successful candidates."
        },
        {
            question: "Do you help with technical preparation?",
            answer: "While we focus on interview technique and competency demonstration, we can guide you on presenting technical knowledge effectively. This includes structuring answers about systems knowledge, SOPs, and operational scenarios."
        },
        {
            question: "What experience level do you cater to?",
            answer: "We support pilots at all career stages: newly qualified pilots seeking their first airline position, experienced pilots transitioning between carriers, and pilots preparing for command upgrades."
        },
        {
            question: "How do you stay current with airline requirements?",
            answer: "Our preparation materials are continuously updated through post-interview feedback from successful candidates. This ensures you receive the most current interview scenarios, assessment techniques, and airline-specific requirements."
        },
        {
            question: "What's included in the preparation package?",
            answer: "Your package includes a 2-hour personalized session, CV review, competency framework guidance, current airline-specific scenarios, group exercise strategies, and post-session support until your interview date."
        }
    ];
    const preparationMatters = [
        {
            title: "Interview Structure",
            content: `
           <span>Master the&nbsp;</span><strong>competency-based interviews</strong>
            <span>&nbsp;with expert guidance on behavioral scenarios and airline assessment techniques.</span>
            `,
        },
        {
            title: "Assessment Process",
            content: `
    <span>Gain deep insights into </span><strong>airline selection methods</strong><span>, from technical assessments to group exercises and simulator scenarios.</span>
    `,
        },
        {
            title: "Interview Techniques",
            content: `
    <span>Learn proven strategies for </span><strong>structured airline interviews</strong><span> while showcasing the essential qualities airlines value.</span>
    `,
        },
        {
            title: "Airline Requirements",
            content: `
    <span>Stay updated with </span><strong>airline selection standards</strong><span>, interview changes, and specific airline expectations for pilot candidates.</span>
    `,
        }
    ]
    const testimonials = [
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
        },

    ];

    //  States
    let testimonialApi = $state(null);

    let api = $state(null);
    let countSlideFeatures = $state(0);
    let currentSlideFeatures = $state(0);
    let currentContentFeatures = $derived(slides[currentSlideFeatures]?.content ?? '');
    const expandedStates = $state(new Array(testimonials.length).fill(false));


    $effect(() => {
        if (api) {
            countSlideFeatures = api.scrollSnapList().length;
            currentSlideFeatures = api.selectedScrollSnap();

            api.on("select", () => {
                currentSlideFeatures = api.selectedScrollSnap();
            });
        }
        if (testimonialApi) {
            testimonialApi.on("select", () => {
                // Reset all expanded states when slide changes
                expandedStates.fill(false);
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

    function toggleExpanded(index) {
        expandedStates[index] = !expandedStates[index];
    }

    function handleKeydown(i, e) {
        if (e.key === 'ArrowRight') {
            gotoSlide((i + 1) % countSlideFeatures)();
        } else if (e.key === 'ArrowLeft') {
            gotoSlide((i - 1 + countSlideFeatures) % countSlideFeatures)();
        }
    }

    function getHTMLTextLength(html) {
        // Create a temporary div
        const temp = document.createElement('div');
        // Set the HTML content
        temp.innerHTML = html;
        // Get text content (strips all HTML tags)
        const textContent = temp.textContent || temp.innerText;
        // Return clean text length
        return textContent.trim().length;
    }

    function scrollPrev() {
        if (testimonialApi) testimonialApi.scrollPrev();
    }

    function scrollNext() {
        if (testimonialApi) testimonialApi.scrollNext();
    }

</script>

<div class=" text-center md:text-left bg-[rgb(1,23,55)]">
    <header class="container mx-auto flex flex-col xs:min-h-[90vh] xs:h-[90vh] landscape:sm:min-h-[100vh] landscape:sm:h-[100vh] landscape:lg:min-h-[90vh] landscape:lg:h-[90vh]
    md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl relative">
        <!-- Logo with fixed position from top -->
        <div class="pt-5 landscape:md:pt-0 landscape:lg:pt-5">
            <Logo class="text-white fill-white"/>
        </div>

        <!-- Main content with fixed heights and spacing -->
        <div class="flex-1 flex flex-col landscape:flex-row landscape:lg:flex-col justify-around
        mt-12 sm:mt-20 landscape:sm:mt-6 md:mt-5 landscape:md:mt-12 landscape:lg:mt-5
         mb-8 sm:mb-12 md:mb-16
        text-white">
            <!-- Title section with consistent spacing -->
            <div class="flex-grow-0">
                <h1 class="">
                    Land your<br/>dream<br/>airline Job
                </h1>
            </div>

            <!-- CTA section with fixed bottom spacing -->
            <div class="flex flex-col">
                <h2 class="mb-6 text-primary-foreground text-lg sm:text-xl md:text-2xl leading-relaxed">
                    Book your <strong>Teams session</strong><br/>with an experienced pilot<br/>assessment and
                    selection<br/>consultant
                </h2>
                <AlertDialog.Root>
                    <div class="text-center md:text-left">
                        <AlertDialog.Trigger class="ring-0 outline-0 inline-block">
                            <CtaButton/>
                        </AlertDialog.Trigger>
                    </div>
                    <CtaModal/>
                </AlertDialog.Root>
            </div>
        </div>

        <!-- Navigation links with fixed bottom position -->
        <!--        <div class="hidden sm:flex flex-row justify-between pb-8">-->
        <!--            <a class="px-3 py-2 text-white hover:text-white/80 transition-colors" href="#">Testimonials</a>-->
        <!--            <a class="px-3 py-2 text-white hover:text-white/80 transition-colors" href="#">Contact</a>-->
        <!--        </div>-->
    </header>
    <main class="flex flex-col">
        <section id="parallax" class="relative h-[400px] md:h-[600px] lg:h-[650px] overflow-hidden">
            <div class="absolute inset-0">
                <div class="relative w-[140%] sm:w-full -left-[40%] sm:left-0 h-full">
                    <ImgParallax
                            class="w-full h-full object-cover parallax-img"
                            factor="0.85"
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

        <section class="container mx-auto py-12 sm:max-w-xl xl:max-w-2xl">
            <!--desktop only-->
            <div class="hidden portrait:sm:block landscape:lg:block  mt-12 mx-auto">
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

                <div class="sm:h-[300px] w-[70%] mx-auto mt-6 ">
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
        <section
                class="container mx-auto flex flex-col md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl py-8 sm:py-12 md:py-16
                text-left"
                id="cassidy">
            <div class="flex-1 flex flex-col">
                <!-- Title Section - Improved spacing and responsive typography -->
                <div class="text-center mb-8 sm:mb-12 md:mb-16">
                    <h3 class="roboto-black uppercase leading-relaxed">
                        <span class="text-2xl sm:text-3xl lg:text-4xl text-[hsl(var(--accent))] block mb-2">30+ years of experience</span>
                        <span class="text-2xl sm:text-3xl lg:text-4xl text-[#f3f3f3]">In pilot assessment</span>
                    </h3>
                </div>

                <!-- Content Grid - Improved responsive layout -->
                <div class="grid md:grid-cols-2 gap-8 lg:gap-16 items-start relative">
                    <!-- Image container - More responsive aspect ratios -->
                    <div class="sticky top-20 mx-auto w-full max-w-lg overflow-hidden order-2 md:order-1">
                        <div class="aspect-[4/3] xs:aspect-[16/9] sm:aspect-square lg:aspect-[4/3]">
                            <Img
                                    class="w-full h-full object-cover rounded-lg"
                                    src={planeDenis}
                                    alt="Denis Cassidy preparing a pilot for interview"
                            />
                        </div>
                    </div>

                    <!-- Text Content - Improved spacing and typography -->
                    <div class="space-y-6 sm:space-y-8 lg:space-y-12 order-1 md:order-2">
                        <h4 class="text-white text-2xl sm:text-3xl lg:text-4xl roboto-black">Denis Cassidy</h4>

                        <!-- Background - Consistent spacing -->
                        <div class="space-y-3 sm:space-y-4">
                    <span class="text-[hsl(var(--accent))] text-lg sm:text-xl roboto-medium block">
                        Background
                    </span>
                            <p class="text-primary-foreground sm:text-lg lg:text-xl roboto-regular leading-relaxed">
                                Pilot assessment and selection consultant with extensive airline and ATO experience
                                across
                                <strong>Europe and Middle East</strong> carriers. Specialised in delivering personalіsed
                                interview preparation via <strong>Teams</strong>, tailored to your specific CV and
                                target airline.
                            </p>
                        </div>

                        <!-- Success Track Record - Improved list spacing -->
                        <div class="space-y-3 sm:space-y-4">
                    <span class="text-[hsl(var(--accent))] text-lg sm:text-xl roboto-medium block">
                        Success Track Record
                    </span>
                            <p class="text-primary-foreground sm:text-lg lg:text-xl roboto-regular mb-4 sm:mb-6">
                                Successfully mentored pilots who secured positions at:
                            </p>

                            <ul class="space-y-3 sm:space-y-4">
                                <li class="flex gap-3 text-primary-foreground sm:text-lg lg:text-xl">
                                    <span class="text-[hsl(var(--accent))]">•</span>
                                    <span class="roboto-regular">
                                <strong>Legacy Carriers</strong>: British Airways, Virgin Atlantic, Cathay Pacific
                            </span>
                                </li>
                                <li class="flex gap-3 text-primary-foreground sm:text-lg lg:text-xl">
                                    <span class="text-[hsl(var(--accent))]">•</span>
                                    <span class="roboto-regular">
                                <strong>Low-Cost Airlines</strong>: Ryanair, EasyJet, Jet2
                            </span>
                                </li>
                                <li class="flex gap-3 text-primary-foreground sm:text-lg lg:text-xl">
                                    <span class="text-[hsl(var(--accent))]">•</span>
                                    <span class="roboto-regular">
                                <strong>Cargo Operations</strong>: DHL
                            </span>
                                </li>
                                <li class="flex gap-3 text-primary-foreground sm:text-lg lg:text-xl">
                                    <span class="text-[hsl(var(--accent))]">•</span>
                                    <span class="roboto-regular">
                                <strong>National Carriers</strong>: Aer Lingus
                            </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- CTA Button - Consistent spacing -->
                <div class="mt-8 sm:mt-12 md:mt-16 text-center">
                    <AlertDialog.Root>
                        <div class="text-center md:text-left">
                            <AlertDialog.Trigger class="ring-0 outline-0 inline-block">
                                <CtaButton/>
                            </AlertDialog.Trigger>
                        </div>
                        <CtaModal/>
                    </AlertDialog.Root>
                </div>
            </div>
        </section>
        <Carousel.Root
                opts={{
                    align: "start",
                    loop: true,
                    duration: 2000,
                    watchDrag: false
                  }}
                plugins={[
                Autoplay({
                  delay: 0,
                    }),
                  ]}
                class="w-full bg-accent/90"
        >
            <Carousel.Content>
                {#each airlines as airline, i (i)}
                    <Carousel.Item class="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                        <Img src={airline.image} alt={airline.title} loading="lazy" fetchpriority="low"
                             class="w-full h-full max-w-[100px] lg:max-w-[150px] object-contain"/>
                    </Carousel.Item>
                {/each}
            </Carousel.Content>
        </Carousel.Root>
        <section class="container mx-auto py-12 md:py-16 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
            <div class="max-w-6xl mx-auto">
                <h3 class="text-white text-2xl sm:text-3xl lg:text-4xl roboto-black mb-8 md:mb-12">
                    Why Interview Preparation Matters
                </h3>

                <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    <div class="space-y-8">
                        <p class="text-primary-foreground text-lg sm:text-xl roboto-regular leading-relaxed">
                            Even experienced pilots can fail at interview stage. Our preparation ensures you understand
                            exactly
                            what airlines are looking for.
                        </p>

                        <ul class="space-y-6 text-left">
                            {#each preparationMatters as matter}
                                <li class="flex gap-4 text-primary-foreground">
                                    <span class="text-[hsl(var(--accent))] mt-1 text-3xl">•</span>
                                    <div class="text-lg sm:text-xl">
                                        <strong class="block mb-1 text-2xl">{matter.title}</strong>
                                        <span class="roboto-regular leading-relaxed">
                                {@html matter.content}
                                </span>
                                    </div>
                                </li>
                            {/each}
                        </ul>
                    </div>

                    <div class="relative mt-8 lg:mt-0">
                        <div class="aspect-[4/3] lg:aspect-[3/4] overflow-hidden rounded-lg">
                            <Img
                                    class="w-full h-full object-cover"
                                    src={planeDenis2}
                                    alt="Denis Cassidy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="container mx-auto flex flex-col py-8 sm:py-12 md:py-16">
            <!-- Title remains the same -->
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
                </Carousel.Root>
            </div>
        </section>

        <section class="container mx-auto py-12 mb-24 sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
            <h3 class="text-white text-center text-3xl font-medium">
                FAQ
            </h3>
            <Accordion.Root type="single" class="mx-auto w-full mt-6 text-left ">
                {#each faqs as faq, i (i)}
                    <Accordion.Item class="border-b-primary-foreground/40" value={`item-${i}`}>
                        <Accordion.Trigger class="text-left text-white text-lg">
                            {faq.question}
                        </Accordion.Trigger>
                        <Accordion.Content class="text-primary-foreground leading-relaxed text-md">
                            {faq.answer}
                        </Accordion.Content>
                    </Accordion.Item>
                {/each}
            </Accordion.Root>
        </section>

    </main>
    <footer class="relative bg-accent text-white mt-16">
        <!-- Top wave edge -->
        <div class="absolute inset-x-0 -top-20 w-full">
            <svg
                    preserveAspectRatio="none"
                    width="100%"
                    height="80"
                    viewBox="0 0 1440 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="transform translate-y-1 fill-accent"
            >
                <path
                        d="M0 80
                   L0 40
                   Q360 0 720 40
                   Q1080 80 1440 40
                   L1440 80
                   Z"
                />
            </svg>
        </div>

        <div class="relative pb-10">
            <div class="max-w-6xl mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div class="flex items-center space-x-4">
                        <Logo class="text-primary fill-primary"/>
                    </div>
                    <div class="space-y-4 text-primary">
                        <div class="flex items-center space-x-3">
                            <Phone class="h-5 w-5 text-primary"/>
                            <a
                                    href="tel:+353868167242"
                                    class="hover:text-primary/80 transition-colors"
                            >
                                +353 868 167 242
                            </a>
                        </div>
                        <div class="flex items-center space-x-3">
                            <Mail class="h-5 w-5 text-primary"/>
                            <a
                                    href="mailto:dencas@pilotinterviewpreparation.com"
                                    class="hover:text-primary/80 transition-colors"
                            >
                                info@pilotinterviewpreparation.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <span class="block py-3.5 text-xs text-center bg-primary">
             2024 Denis Cassidy. All rights reserved.
        </span>
    </footer>

</div>
<style>
    #parallax {
        isolation: isolate;
    }

    .parallax-img {
        transition: transform 50ms linear;
        will-change: transform;
    }

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
