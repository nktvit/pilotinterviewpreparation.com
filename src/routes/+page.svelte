<script>
    // Images
    import yellowHelicopter from '$lib/assets/yellow-helicopter.jpeg?as=run'
    import examinationCenter from '$lib/assets/examination-center.png?as=run'
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
    import {Plane, Phone, Mail} from "lucide-svelte";
    import Logo from "$lib/components/logo.svelte";
    import CtaButton from "$lib/components/cta-button.svelte";


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
            <span>&nbsp;that Irish and European airlines use today. Through one-to-one coaching, you'll develop the&nbsp;</span>
            <strong>competency-based answers</strong>
            <span>&nbsp;that assessors look for. Our approach combines current airline standards with your personal experience, ensuring you interview with confidence and authenticity.</span>
            `,
            caption: "Examination Center",
            image: examinationCenter
        },
        {
            title: "CV Enhancement",
            content: `
            <span>Powerful&nbsp;<strong>airline pilot CV</strong>&nbsp;that aligns with recruitment systems and catches attention. Your flying experience will be presented to match exactly what airlines want to see. We'll transform your career highlights into compelling achievements that showcase your true potential as a candidate.</span><p><br></p>
            `,
            caption: "Mrs. Jane Doe working on her CV",
            image: cvWriting

        },
        {
            title: "Trainings",
            content: `
            <span>Walk into your&nbsp;</span><strong>airline assessment day</strong><span>&nbsp;fully prepared and confident. Our realistic&nbsp;</span><strong>group exercise practice</strong><span>&nbsp;mirrors what you'll face at major carriers. From technical questions to team scenarios, you'll be ready to demonstrate your capabilities naturally and effectively.</span>`,
            caption: "Group Training",
            image: groupTraining

        },
        {
            title: "Airline-Specific",
            content: `Gain valuable insights into current&nbsp;<strong>airline selection processes</strong>&nbsp;and requirements. Learn from recently successful&nbsp;<strong>pilot interviews</strong>&nbsp;what works right now. Our continuously updated guidance helps you understand each airline's priorities and culture, maximizing your interview success rate.`,
            caption: "Irish Air Corps plane",
            image: planeIrish

        },
        {
            title: "Professional Development",
            content: `<span>Master the key&nbsp;</span><strong>airline competencies</strong><span>&nbsp;that define successful candidates. Show deep understanding of modern&nbsp;</span><strong>commercial aviation</strong><span>&nbsp;operations and challenges. We'll help you demonstrate the natural&nbsp;</span><strong>leadership abilities</strong><span>&nbsp;that make you stand out as the ideal pilot for their team.</span>`,
            caption: "Virgin Atlantic plane",
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
            answer: "We support pilots at all career stages: newly qualified pilots seeking their first airline position, experienced pilots transitioning between carriers, and captains preparing for command upgrades."
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

    //  States
    let api = $state(null);
    let count = $state(0);
    let current = $state(0);
    let currentContent = $derived(slides[current]?.content ?? '');

    $effect(() => {
        if (api) {
            count = api.scrollSnapList().length;
            current = api.selectedScrollSnap();

            api.on("select", () => {
                current = api.selectedScrollSnap();
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
            gotoSlide((i + 1) % count)();
        } else if (e.key === 'ArrowLeft') {
            gotoSlide((i - 1 + count) % count)();
        }
    }

</script>

<div class=" text-center md:text-left bg-[rgb(1,23,55)]">
    <header class="container mx-auto flex flex-col min-h-[90vh] h-[90vh] md:max-w-2xl lg:max-w-5xl relative">
        <!-- Logo with fixed position from top -->
        <div class="pt-5">
            <Logo class="text-white fill-white"/>
        </div>

        <!-- Main content with fixed heights and spacing -->
        <div class="flex-1 flex flex-col justify-between mt-16 sm:mt-20 text-white">
            <!-- Title section with consistent spacing -->
            <div class="flex-grow-0">
                <h1 class="text-4xl sm:text-5xl lg:text-6xl leading-tight">
                    Land your<br/>dream<br/>airline Job
                </h1>
            </div>

            <!-- CTA section with fixed bottom spacing -->
            <div class="flex flex-col mb-8 sm:mb-12">
                <h2 class="mb-6 text-xl sm:text-2xl leading-relaxed">
                    Book Your Session with a<br/>Former Airline Assessor
                </h2>
                <AlertDialog.Root>
                    <div class="text-center sm:text-left">
                        <AlertDialog.Trigger class="ring-0 outline-0 inline-block">
                            <CtaButton/>
                        </AlertDialog.Trigger>
                    </div>
                    <AlertDialog.Content
                            class="w-[90vw] sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-[rgb(1,23,55)] text-white">
                        <AlertDialog.Header>
                            <AlertDialog.Title class="text-2xl sm:text-3xl roboto-black text-white">
                                Book Your Interview Preparation
                            </AlertDialog.Title>
                            <AlertDialog.Description
                                    class="mt-4 roboto-regular text-lg leading-relaxed text-primary-foreground">
                                Contact us by phone to schedule your personalized interview preparation session:
                            </AlertDialog.Description>
                        </AlertDialog.Header>

                        <div class="py-6 space-y-6">
                            <div class="flex flex-col items-center sm:items-start space-y-3">
                                <div class="text-xl roboto-medium text-white">Book by Phone</div>

                                <a href="tel:+353868167242"
                                   class="flex items-center space-x-2 text-xl text-[hsl(var(--accent))] hover:text-[hsl(var(--accent))/90] transition-colors roboto-medium"
                                >
                                    <Phone class="h-5 w-5"/>
                                    <span>+353 868 167 242</span>
                                </a>
                            </div>

                            <div class="space-y-2">
                                <div class="text-sm text-[hsl(var(--muted-foreground))] roboto-medium">
                                    Available times for calls:
                                </div>
                                <div class="text-sm text-primary-foreground roboto-regular">
                                    Monday - Friday: 9:00 AM - 6:00 PM (Irish Time)
                                </div>
                            </div>

                            <div class="space-y-3">
                                <div class="roboto-medium text-white">What to expect:</div>
                                <ul class="space-y-2 text-sm text-[hsl(var(--muted-foreground))] roboto-regular">
                                    <li class="flex items-center space-x-2">
                                        <span class="text-[hsl(var(--accent))]">•</span>
                                        <span>Brief discussion of your experience and goals</span>
                                    </li>
                                    <li class="flex items-center space-x-2">
                                        <span class="text-[hsl(var(--accent))]">•</span>
                                        <span>Overview of available session types</span>
                                    </li>
                                    <li class="flex items-center space-x-2">
                                        <span class="text-[hsl(var(--accent))]">•</span>
                                        <span>Scheduling your preparation session</span>
                                    </li>
                                    <li class="flex items-center space-x-2">
                                        <span class="text-[hsl(var(--accent))]">•</span>
                                        <span>Payment details and confirmation</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <AlertDialog.Footer class="sm:justify-between flex-col sm:flex-row gap-4">
                            <div class="text-sm text-[hsl(var(--muted-foreground))] roboto-regular">
                                We look forward to helping you succeed in your airline interview
                            </div>
                            <AlertDialog.Cancel
                                    class="mt-2 sm:mt-0 bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] hover:bg-[hsl(var(--accent))/90] transition-colors roboto-medium">
                                Close
                            </AlertDialog.Cancel>
                        </AlertDialog.Footer>
                    </AlertDialog.Content>
                </AlertDialog.Root>
            </div>
        </div>

        <!-- Navigation links with fixed bottom position -->
        <!--        <div class="hidden sm:flex flex-row justify-between pb-8">-->
        <!--            <a class="px-3 py-2 text-white hover:text-white/80 transition-colors" href="#">Testimonials</a>-->
        <!--            <a class="px-3 py-2 text-white hover:text-white/80 transition-colors" href="#">Contact</a>-->
        <!--        </div>-->
    </header>
    <main class=" flex flex-col">
        <section class="relative h-[600px] md:h-[600px] py-12">
            <Img
                    class="w-full h-[65%] absolute top-0 left-0 object-cover object-[55%_center]"
                    src={yellowHelicopter}
                    alt="A yellow helicopter"
            />
            <!--black overlay-->
            <div class="absolute h-[65%] inset-0 bg-black/35 -z-5"></div>
            <div class="h-full flex flex-col relative items-center text-center mt-10 justify-between">
                <h3 class="text-white">Trainings That<br/>Get Results</h3>
                <div class="backdrop-blur w-full">
                    <div class="pt-3">
                        <p class="text-2xl font-bold text-primary-foreground mb-6 mx-auto w-[80%] md:w-[40%] lg:w-[25%]">From recent graduates<br>to <strong>command
                            upgrades</strong>, we
                            prepare pilots for their <strong>target airlines</strong>. Our proven approach combines
                            current
                            industry knowledge with <strong>personalised guidance</strong>.</p>
                    </div>
                </div>


            </div>
        </section>
        <section class="container mx-auto py-12">
            <!--desktop only-->
            <div class="hidden sm:block mt-12 mx-auto w-full max-w-xl lg:max-w-2xl">
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
                delay: 10000,
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
                    Slide {current + 1} of {count}
                </div>

                <ScrollArea class="whitespace-nowrap" orientation="horizontal">
                    <div class="flex w-max p-4">
                        {#each slides as slide, i (i)}
                            <button
                                    class={`text-white box-content focus:ring-0 focus:outline-0 border-b border-muted-foreground py-4 px-3 focus: transition-colors
                        ${i === current ? "border-b-[2.5px] bg-white/10 border-white" : ""}`}
                                    onclick={gotoSlide(i)}
                                    onkeydown={(e) => handleKeydown(i, e)}
                            >
                                {slide.title}
                            </button>
                        {/each}
                    </div>
                </ScrollArea>

                <div class="h-[400px] w-[70%] mx-auto mt-6 ">
                    {#if currentContent}
                        <p class="text-primary-foreground text-2xl">{@html currentContent}</p>
                    {/if}
                </div>

            </div>

            <!--mobile only-->
            <div class="sm:hidden flex flex-col space-y-12">
                {#each slides as slide, i (i)}
                    <div class="md:flex-[0_0_70%] min-w-0">
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
                        <div class="p-4">
                            <h4 class="text-white text-left text-3xl font-medium mt-3 mb-4">{slide.title}</h4>
                            {#if currentContent}
                                <p class="text-primary-foreground text-left text-xl">{@html currentContent}</p>
                            {/if}
                        </div>
                    </div>
                {/each}

            </div>

        </section>
        <section class="container mx-auto px-4 sm:px-6 py-12 md:py-16" id="cassidy">
            <!-- Title section with consistent spacing -->
            <div class="text-center mb-12 md:mb-16">
                <h3 class="font-roboto text-2xl sm:text-3xl font-medium uppercase leading-relaxed">
                    <span class="text-[#ffb52d] block mb-2">30+ years of experience</span>
                    <span class="text-[#f3f3f3]">In airline assessment</span>
                </h3>
            </div>

            <!-- Image container with fixed aspect ratio -->
            <div class="aspect-square sm:aspect-[16/9] md:aspect-[2/1] overflow-hidden">
                <Img
                        class="w-full h-full object-cover"
                        src={planeDenis}
                        alt="Denis Cassidy"
                />
            </div>

            <!-- Content section with consistent spacing -->
            <div class="mt-12 md:mt-16 space-y-12 md:space-y-16 max-w-3xl text-left">
                <h4 class="text-white text-3xl sm:text-4xl font-medium">Denis Cassidy</h4>

                <!-- Background section -->
                <div>
                    <span class="text-accent text-lg sm:text-xl font-medium block mb-4">Background</span>
                    <p class="text-primary-foreground text-lg sm:text-xl leading-relaxed">
                        Former airline assessor with extensive experience across
                        <strong>Europe and Middle East</strong> carriers. Specialised in delivering
                        personalіsed interview preparation via <strong>Teams</strong>, tailored to
                        your specific CV and target airline.
                    </p>
                </div>

                <!-- Success Track Record section -->
                <div>
                    <span class="text-accent text-lg sm:text-xl font-medium block mb-4">Success Track Record</span>
                    <p class="text-primary-foreground text-lg sm:text-xl mb-6">
                        Successfully mentored pilots who secured positions at:
                    </p>

                    <ul class="list-disc ml-7 text-primary-foreground text-lg sm:text-xl space-y-4">
                        <li><strong>Legacy Carriers</strong>: British Airways, Virgin Atlantic, Cathay Pacific</li>
                        <li><strong>Low-Cost Airlines</strong>: Ryanair, EasyJet, Jet2</li>
                        <li><strong>Cargo Operations</strong>: DHL</li>
                        <li><strong>National Carriers</strong>: Aer Lingus</li>
                    </ul>
                </div>
            </div>

            <!-- CTA Button with consistent spacing -->
            <div class="mt-12 md:mt-16">
                <AlertDialog.Root>
                    <div class="text-center sm:text-left">
                        <AlertDialog.Trigger class="ring-0 outline-0 inline-block">
                            <CtaButton/>
                        </AlertDialog.Trigger>
                    </div>
                    <AlertDialog.Content
                            class="w-[90vw] sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-[rgb(1,23,55)] text-white">
                        <AlertDialog.Header>
                            <AlertDialog.Title class="text-2xl sm:text-3xl roboto-black text-white">
                                Book Your Interview Preparation
                            </AlertDialog.Title>
                            <AlertDialog.Description
                                    class="mt-4 roboto-regular text-lg leading-relaxed text-primary-foreground">
                                Contact us by phone to schedule your personalized interview preparation session:
                            </AlertDialog.Description>
                        </AlertDialog.Header>

                        <div class="py-6 space-y-6">
                            <div class="flex flex-col items-center sm:items-start space-y-3">
                                <div class="text-xl roboto-medium text-white">Book by Phone</div>

                                <a href="tel:+353868167242"
                                   class="flex items-center space-x-2 text-xl text-[hsl(var(--accent))] hover:text-[hsl(var(--accent))/90] transition-colors roboto-medium"
                                >
                                    <Phone class="h-5 w-5"/>
                                    <span>+353 868 167 242</span>
                                </a>
                            </div>

                            <div class="space-y-2">
                                <div class="text-sm text-[hsl(var(--muted-foreground))] roboto-medium">
                                    Available times for calls:
                                </div>
                                <div class="text-sm text-primary-foreground roboto-regular">
                                    Monday - Friday: 9:00 AM - 6:00 PM (Irish Time)
                                </div>
                            </div>

                            <div class="space-y-3">
                                <div class="roboto-medium text-white">What to expect:</div>
                                <ul class="space-y-2 text-sm text-[hsl(var(--muted-foreground))] roboto-regular">
                                    <li class="flex items-center space-x-2">
                                        <span class="text-[hsl(var(--accent))]">•</span>
                                        <span>Brief discussion of your experience and goals</span>
                                    </li>
                                    <li class="flex items-center space-x-2">
                                        <span class="text-[hsl(var(--accent))]">•</span>
                                        <span>Overview of available session types</span>
                                    </li>
                                    <li class="flex items-center space-x-2">
                                        <span class="text-[hsl(var(--accent))]">•</span>
                                        <span>Scheduling your preparation session</span>
                                    </li>
                                    <li class="flex items-center space-x-2">
                                        <span class="text-[hsl(var(--accent))]">•</span>
                                        <span>Payment details and confirmation</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <AlertDialog.Footer class="sm:justify-between flex-col sm:flex-row gap-4">
                            <div class="text-sm text-[hsl(var(--muted-foreground))] roboto-regular">
                                We look forward to helping you succeed in your airline interview
                            </div>
                            <AlertDialog.Cancel
                                    class="mt-2 sm:mt-0 bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] hover:bg-[hsl(var(--accent))/90] transition-colors roboto-medium">
                                Close
                            </AlertDialog.Cancel>
                        </AlertDialog.Footer>
                    </AlertDialog.Content>
                </AlertDialog.Root>
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
                class="w-full bg-accent"
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
        <section class="container mx-auto px-4 sm:px-6 py-12 md:py-16">
            <div class="max-w-6xl mx-auto">
                <h3 class="text-white text-2xl sm:text-3xl lg:text-4xl roboto-black mb-8 md:mb-12">
                    Why Interview Preparation Matters
                </h3>

                <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    <div class="space-y-8">
                        <p class="text-primary-foreground text-lg sm:text-xl roboto-regular leading-relaxed">
                            Even experienced pilots can fail at interview stage. Our preparation ensures you understand exactly
                            what airlines are looking for.
                        </p>

                        <ul class="space-y-6 text-left">
                            <li class="flex gap-4 text-primary-foreground">
                                <span class="text-[hsl(var(--accent))] mt-2">•</span>
                                <div class="text-lg sm:text-xl">
                                    <strong class="block mb-1">Interview Structure</strong>
                                    <span class="roboto-regular leading-relaxed">
                                Master the competency-based format used by major airlines, including STAR methodology
                                and behavior-focused questions.
                            </span>
                                </div>
                            </li>

                            <li class="flex gap-4 text-primary-foreground">
                                <span class="text-[hsl(var(--accent))] mt-2">•</span>
                                <div class="text-lg sm:text-xl">
                                    <strong class="block mb-1">Assessment Process</strong>
                                    <span class="roboto-regular leading-relaxed">
                                Gain deep insights into airline evaluation methods, from technical assessments
                                to group exercises and simulator checks.
                            </span>
                                </div>
                            </li>

                            <li class="flex gap-4 text-primary-foreground">
                                <span class="text-[hsl(var(--accent))] mt-2">•</span>
                                <div class="text-lg sm:text-xl">
                                    <strong class="block mb-1">Interview Techniques</strong>
                                    <span class="roboto-regular leading-relaxed">
                                Learn proven strategies for articulating your experience effectively while
                                demonstrating key competencies airlines seek.
                            </span>
                                </div>
                            </li>

                            <li class="flex gap-4 text-primary-foreground">
                                <span class="text-[hsl(var(--accent))] mt-2">•</span>
                                <div class="text-lg sm:text-xl">
                                    <strong class="block mb-1">Airline Requirements</strong>
                                    <span class="roboto-regular leading-relaxed">
                                Stay updated with current industry standards, regulatory changes, and specific
                                airline expectations for pilot candidates.
                            </span>
                                </div>
                            </li>
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
        <section class="container mx-auto py-12">
            <h3 class="text-white text-center text-3xl font-medium">
                FAQ
            </h3>
            <Accordion.Root type="single" class="mx-auto w-full mt-6 text-left sm:max-w-[70%]">
                {#each faqs as faq, i (i)}
                    <Accordion.Item class="border-b-primary-foreground/40" value={`item-${i}`}>
                        <Accordion.Trigger class="text-left text-white">
                            {faq.question}
                        </Accordion.Trigger>
                        <Accordion.Content class="text-primary-foreground leading-relaxed">
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
                                dencas@pilotinterviewpreparation.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <span class="block py-3.5 text-xs bg-primary">
             2024 Denis Cassidy. All rights reserved.
        </span>
    </footer>

</div>
