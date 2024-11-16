<script>
    import { onMount } from "svelte";
    import { register } from "swiper/element/bundle";
    import {
        PhoneCall,
        Mail,
        Calendar,
        Users,
        Award,
        Lightbulb,
        ChartArea,
        Brain,
        Plane,
        MessageSquare,
        MessageSquareMore,
        UserCheck,
    } from "lucide-svelte";
    import "swiper/css";
    import "swiper/css/navigation";
    import "swiper/css/pagination";

    import { base } from "$app/paths";

    register();

    $: outerWidth = 0;
    $: innerWidth = 0;
    $: outerHeight = 0;
    $: innerHeight = 0;
    let swiperEl;

    const testimonials = [
        {
            name: "Manuel Simone",
            position: "First Officer",
            airline: "ITA Airways SuPra. - Italy",
            quote: "I recently had a session with Denis Cassidy about preparation for my interview with one of the <strong>best airlines worldwide, Virgin Atlantic</strong>.<br><br>The session with him not only <strong>changes your mindset</strong> to gain the position you are applying for, but gives a lot of <strong>advice, tips, points of view and suggestions</strong> that definitely will make you <strong>perform in a unique way</strong> at your interview.<br><br>All the useful things I learned from him are for me so <strong>crucial</strong> that I will bring with me and apply for most of the <strong>career goals</strong> I will want to achieve in the future.<br><br>To contact him was a <strong>great choice</strong> that was <strong>fundamental for my successful interview</strong>.<br><br>Thank you Denis!",
        },
        {
            name: "Richard O'Brien",
            position: "First Officer",
            airline: "AerLingus Regional",
            quote: "I cannot express how <strong>grateful</strong> I am for the <strong>exceptional interview preparation</strong> I received from Denis Cassidy for my First Officer position. His <strong>experience</strong> gave me a thorough and insightful view of the <strong>aviation industry</strong>. The guidance I received was <strong>tailored</strong> to me and my CV giving me an insight into the skills already present from my experiences. This preparation <strong>boosted my confidence</strong> and helped me <strong>articulate my thoughts</strong> more clearly in the interview. Thanks to the <strong>fantastic prep</strong> I was able to <strong>secure the position</strong> I wanted. I would <strong>highly recommend</strong> Denis Cassidy's services to anyone looking to <strong>excel in their aviation interviews</strong>.",
        },
        {
            name: "Justin Butler",
            position: "First Officer",
            airline: "Ryanair",
            quote: "I recently had the <strong>incredible opportunity</strong> to work with Denis Cassidy for my interview preparation with Virgin Atlantic. Through this experience, it became crystal clear that Denis possesses a <strong>wealth of knowledge and expertise</strong> that spans decades and continents in the aviation industry. His <strong>deep understanding of pilot placement</strong>, especially for prestigious airlines like Virgin Atlantic, is both enlightening and motivating.<br><br>Denis's approach to interview preparation is <strong>unparalleled</strong>. He emphasizes the <strong>critical importance of being thoroughly prepared</strong>, making it evident that going into such a process unprepared is a serious disadvantage. The Virgin Atlantic interview, as I learned firsthand from Denis, is <strong>unlike any other in the airline industry</strong>. It requires not just knowledge and skill but a <strong>profound understanding of the company's culture and values</strong>, something that Denis was exceptionally equipped to provide guidance on.<br><br>His mentorship was not just about preparation but about <strong>building confidence, fine-tuning strengths, and addressing weaknesses</strong> with a positive and constructive outlook. Denis's <strong>dedication to aviation</strong> and to the success of his candidates shines brightly, offering not just advice but <strong>genuine support and encouragement</strong>.<br><br>Despite the inherent challenges of the interview process, Denis's guidance was <strong>instrumental in my preparedness and mindset</strong>. His talent for making complex concepts accessible, combined with his sincere commitment to my success, was a source of inspiration and positivity.<br><br>For anyone aspiring to a career in aviation, especially with an eye on Virgin Atlantic, Denis Cassidy's guidance is <strong>invaluable</strong>. His expertise, commitment, and the personalized support he offers are <strong>second to none</strong>. A heartfelt thank you to Denis for not just preparing me for the interview but for highlighting the importance of <strong>comprehensive preparation</strong> in facing the unique challenges posed by Virgin Atlantic. Your impact on my journey has been profound.",
        },
        {
            name: "Angus Hayes",
            position: "First Officer",
            airline: "Virgin Atlantic",
            quote: "Hi all, just a small review for @Denis Cassidy.<br><br>Interviews for me have been a bit of a <strong>struggle</strong>, but Denis was a <strong>fantastic help</strong> for me. He helped me <strong>gain confidence</strong> for the interview in general and helped me get into the <strong>right mindset</strong> going into the interview.<br><br><strong>Highly recommend</strong> for anyone approaching <strong>final interview</strong> or the <strong>Zenon interview</strong> to give Denis a shout.",
        },
    ];

    const services = [
        {
            icon: Lightbulb,
            title: "Interview Awareness",
            description: "Greater awareness of interview elements",
        },
        {
            icon: ChartArea,
            title: "Process Understanding",
            description: "Understanding of the interview process",
        },
        {
            icon: Brain,
            title: "Competency Knowledge",
            description: "Knowledge of competency-based structure",
        },
        {
            icon: Plane,
            title: "Airline-Specific Prep",
            description: "Tailored preparation for specific airlines",
        },
        {
            icon: MessageSquare,
            title: "Feedback Strategies",
            description: "Feedback and improvement strategies",
        },
        {
            icon: UserCheck,
            title: "Mock Interviews",
            description: "Mock interview sessions",
        },
    ];

    const images = [
        {
            src: `${base}/img1.jpg`,
            alt: "Profile Image 1",
        },
        {
            src: `${base}/img2.jpg`,
            alt: "Profile Image 2",
        },
        {
            src: `${base}/img3.jpg`,
            alt: "Profile Image 3",
        },
    ];

    onMount(() => {
        const swiperEl = document.querySelector("swiper-container");
        Object.assign(swiperEl, {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                clickable: true,
            },
            navigation: true,
            breakpoints: {
                640: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 1,
                },
            },
        });
        swiperEl.initialize();
    });
</script>

<svelte:window
    bind:innerWidth
    bind:outerWidth
    bind:innerHeight
    bind:outerHeight
/>

<div
    class="relative min-h-screen w-full overflow-x-hidden text-white font-sans"
>
    <video
        autoplay
        loop
        muted
        class="fixed top-0 left-0 w-full h-full object-cover -z-20"
        src="./landing_video_optimized.webm"
    />
    <div class="fixed top-0 left-0 w-full h-full bg-[#00000575] -z-10" />

    <main class="relative z-10 max-w-[1200px] mx-auto p-4 md:p-8">
        <!-- CTA Card -->
        <div
            id="cta-card"
            class="relative overflow-hidden bg-gradient-to-br from-[#1010555f] to-[#402d0075] rounded-2xl p-6 mb-4 md:mb-8 backdrop-blur-lg border border-transparent hover:border-yellow-400/30 transition-all duration-300"
        >
            <div class="flex-1 pb-2 md:pr-4">
                <h2 class="text-yellow-400 text-2xl font-bold mb-2">
                    LAND YOUR DREAM JOB WITH YOUR DESIRED AIRLINE!
                </h2>
                <p class="text-[#e4f6fb] text-sm">
                    Contact Denis Cassidy for an all inclusive price and arrange
                    your pilot interview preparation session.
                </p>
            </div>
            <div class="flex gap-3 flex-wrap">
                <a href="tel:+353 868 167 242">
                    <button
                        class="flex items-center px-4 py-2 bg-yellow-400 text-[#000040] rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-sm"
                    >
                        <PhoneCall class="mr-2 h-4 w-4" />
                        +353 868 167 242
                    </button>
                </a>
                <a href="https://wa.me/353868167242">
                    <button
                        class="flex items-center px-4 py-2 bg-[#25d365] text-white rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-sm"
                    >
                        <MessageSquareMore class="mr-2 h-4 w-4" />
                        Chat on WhatsApp
                    </button>
                </a>
                <a href="mailto:dencas@hotmail.com">
                    <button
                        class="flex items-center px-4 py-2 text-white bg-[#32329a] rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-sm"
                    >
                        <Mail class="mr-2 h-4 w-4" />
                        dencas@hotmail.com
                    </button>
                </a>
            </div>
        </div>

        <div class="flex flex-col lg:flex-row gap-4 mb-4 md:mb-8 min-h-[400px]">
            <!-- Main Content Card -->
            <div
                class="flex-1 lg:w-2/3 bg-gradient-to-br from-[#1010555f] to-[#402d0075] rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-lg border border-transparent hover:border-yellow-400/30 transition-all duration-300"
            >
                <h1
                    class="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 mb-4 lg:mb-6 font-roboto leading-tight"
                >
                    PILOT INTERVIEW PREPARATION
                </h1>
                <div
                    class="text-[#e4f6fb] leading-relaxed text-sm sm:text-base space-y-3 sm:space-y-4"
                >
                    <span class="block">
                        Based in Ireland, Denis Cassidy has over thirty years
                        experience providing pilot assessment and selection
                        services to Airlines and ATO's throughout Europe and the
                        Middle East.
                    </span>
                    <span class="block">
                        Now using Teams to provide personalised pilot interview
                        preparation sessions that are based on your CV content
                        and the upcoming specific airline interview.
                    </span>
                    <span class="block">
                        Pilots who have benefited from these preparation
                        sessions range from the recently graduated to highly
                        experienced pilots moving from short to long-haul
                        carriers or going for command upgrades.
                    </span>
                    <span class="block">
                        Post interview debriefs ensure that preparation sessions
                        are constantly updated.
                    </span>
                </div>
            </div>

            <!-- Profile Image Card -->
            <div
                class="md:w-1/3 h-[200px] sm:h-[300px] md:h-auto border border-transparent hover:border-yellow-400/30 rounded-2xl transition-all duration-300 relative overflow-hidden"
            >
                <div
                    class="absolute inset-0 transform hover:scale-105 transition-transform duration-500"
                >
                    <img
                        src="/profile.jpg"
                        alt="Profile Image"
                        class="w-full h-full object-cover"
                        loading="eager"
                        style="object-position: center 20%;"
                    />
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                    ></div>
                </div>
            </div>
        </div>

        <!-- Features Grid -->
        <div class="flex flex-wrap gap-4 mb-4 md:mb-8">
            {#each [{ icon: Calendar, title: "Flexible Scheduling", description: "Book your preparation sessions at times that suit your schedule." }, { icon: Users, title: "Experienced Mentors", description: "Learn from industry professionals with years of experience." }, { icon: Award, title: "Proven Success", description: "Our clients have succeeded with major airlines worldwide." }] as { icon: Icon, title, description }}
                <div
                    class="w-full md:w-[calc(33.333%-1rem)] flex-grow basis-[300px] bg-gradient-to-br from-[#1010555f] to-[#402d0075] rounded-2xl p-6 backdrop-blur-lg border border-transparent hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-1"
                >
                    <svelte:component
                        this={Icon}
                        class="mx-auto text-yellow-400 w-16 h-16 mb-4"
                    />
                    <h2 class="text-xl font-medium text-yellow-400 mb-2">
                        {title}
                    </h2>
                    <p class="text-[#e4f6fb] text-sm">
                        {description}
                    </p>
                </div>
            {/each}
        </div>

        <!-- Services Section -->
        <div
            class="bg-gradient-to-br from-[#1010555f] to-[#402d0075] rounded-2xl p-4 md:p-8 lg:px-24 mb-4 md:mb-8 backdrop-blur-lg"
        >
            <h2 class="text-3xl font-medium text-yellow-400 text-center mb-8">
                Our Services
            </h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                {#each services as service}
                    <div
                        class="bg-[#00004066] rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-yellow-400/30"
                    >
                        <div
                            class="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-400/10 flex items-center justify-center border-2 border-yellow-400/20"
                        >
                            <svelte:component
                                this={service.icon}
                                size={32}
                                class="text-yellow-400"
                            />
                        </div>
                        <h3 class="text-lg font-medium text-yellow-400 mb-2">
                            {service.title}
                        </h3>
                        <p class="text-[#e4f6fb] text-sm">
                            {service.description}
                        </p>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Testimonials Section -->
        <div
            class="bg-gradient-to-br from-[#1010555f] to-[#402d0075] rounded-2xl py-6 md:p-8 mb-4 md:mb-8 backdrop-blur-lg"
        >
            <h2 class="text-3xl font-medium text-yellow-400 text-center mb-8">
                Success Stories
            </h2>
            <swiper-container class="w-full md:pb-10">
                {#each testimonials as testimonial, i}
                    <swiper-slide
                        class="flex justify-center items-start md:pb-6 h-[350px]"
                    >
                        <div
                            class="w-full max-w-[90%] h-full bg-[#00004099] rounded-xl p-6 text-left border border-blue-400/20 hover:border-yellow-400/30 transition-all duration-300 flex flex-col"
                        >
                            <blockquote
                                class="italic text-[#e4f6fb] leading-7 whitespace-pre-line overflow-y-scroll flex-1 custom-scrollbar pr-2"
                            >
                                {@html testimonial.quote}
                            </blockquote>
                            <p
                                class="text-right text-white font-bold mt-4 text-sm pt-2 border-t border-blue-400/20"
                            >
                                {testimonial.name} - {testimonial.position}, {testimonial.airline}
                            </p>
                        </div>
                    </swiper-slide>
                {/each}
            </swiper-container>
        </div>

        <!-- Images Section -->
        <div class=" rounded-2xl mb-4 md:mb-8 backdrop-blur-lg">
            <swiper-container class="w-full">
                {#each images as img, i}
                    <swiper-slide
                        class="flex justify-center items-start h-[600px] select-none"
                    >
                        <div
                            class="w-full h-full relative overflow-hidden rounded-xl"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                    </swiper-slide>
                {/each}
            </swiper-container>
        </div>
    </main>
    <!-- Footer -->
    <footer class="relative z-10 w-full mt-auto">
        <div class="max-w-[1200px] mx-auto p-4 text-center">
            <div class="text-[#e4f6fb] text-sm opacity-75">
                © {new Date().getFullYear()} Denis Cassidy. All rights reserved.
            </div>
        </div>
    </footer>
</div>

<style>
    :root {
        --swiper-pagination-bottom: -0.8rem;
    }
    :global(swiper-container) {
        width: 100%;
        height: auto;
    }

    :global(swiper-slide) {
        height: auto;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    :global(.custom-scrollbar::-webkit-scrollbar) {
        width: 8px;
        background: rgba(0, 0, 64, 0.3);
    }

    :global(.custom-scrollbar::-webkit-scrollbar-track) {
        background: rgba(0, 0, 64, 0.3);
        border-radius: 4px;
    }

    :global(.custom-scrollbar::-webkit-scrollbar-thumb) {
        background-color: rgba(250, 204, 21, 0.4);
        border-radius: 4px;
    }

    /* Firefox scrollbar - always visible */
    :global(.custom-scrollbar) {
        scrollbar-width: thin;
        scrollbar-color: rgba(250, 204, 21, 0.4) rgba(0, 0, 64, 0.3);
    }

    #cta-card {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        background-size: 30px 30px;
        background-position: center;
        background-image: linear-gradient(60deg, #0000407a, #402d006a);
    }

    #cta-card::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
        );
        transition: 0.4s;
    }

    #cta-card:hover::before {
        left: 100%;
    }

    @media (max-width: 768px) {
        #cta-card {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
        }

        #cta-card > div:first-child {
            padding-right: 0;
        }

        #cta-card > div:last-child {
            width: 100%;
            justify-content: center;
        }
    }
</style>
