<script>
    import { onMount } from "svelte";
    import { register } from "swiper/element/bundle";
    import {
        ChevronDown,
        ChevronUp,
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
        UserCheck 
    } from "lucide-svelte";
    import "swiper/css";
    import "swiper/css/navigation";
    import "swiper/css/pagination";

    register();

    $: outerWidth = 0;
    $: innerWidth = 0;
    $: outerHeight = 0;
    $: innerHeight = 0;
    let activeTestimonial = 0;
    let swiperEl;
    let testimonialMaxLength = innerWidth < 768 ? 30 : 50;

    const testimonials = [
        {
            name: "Richard O'Brien",
            position: "First Officer",
            airline: "AerLingus Regional",
            quote: "I cannot express how <strong>grateful</strong> I am for the <strong>exceptional interview preparation</strong> I received from Denis Cassidy for my First Officer position. His <strong>experience</strong> gave me a thorough and insightful view of the <strong>aviation industry</strong>. The guidance I received was <strong>tailored</strong> to me and my CV giving me an insight into the skills already present from my experiences. This preparation <strong>boosted my confidence</strong> and helped me <strong>articulate my thoughts</strong> more clearly in the interview. Thanks to the <strong>fantastic prep</strong> I was able to <strong>secure the position</strong> I wanted. I would <strong>highly recommend</strong> Denis Cassidy's services to anyone looking to <strong>excel in their aviation interviews</strong>.",
        },
        {
            name: "Manuel Simone",
            position: "First Officer",
            airline: "ITA Airways SuPra. - Italy",
            quote: "I recently had a session with Denis Cassidy about preparation for my interview with one of the <strong>best airlines worldwide, Virgin Atlantic</strong>.<br><br>The session with him not only <strong>changes your mindset</strong> to gain the position you are applying for, but gives a lot of <strong>advice, tips, points of view and suggestions</strong> that definitely will make you <strong>perform in a unique way</strong> at your interview.<br><br>All the useful things I learned from him are for me so <strong>crucial</strong> that I will bring with me and apply for most of the <strong>career goals</strong> I will want to achieve in the future.<br><br>To contact him was a <strong>great choice</strong> that was <strong>fundamental for my successful interview</strong>.<br><br>Thank you Denis!",
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
        {
            name: "G. Adriani",
            position: "First Officer",
            airline: "Cathay Pacific Airways",
            quote: "If anyone is preparing for their <strong>final interview</strong> I do <strong>strongly recommend</strong> contacting @Denis Cassidy. He was a <strong>fantastic help</strong> to <strong>gain confidence</strong> and to put me in the <strong>right mindset</strong> to face the final interview.",
        },
    ];

    const services = [
        { 
            icon: Lightbulb, 
            title: "Interview Awareness", 
            description: "Greater awareness of interview elements" 
        },
        { 
            icon: ChartArea, 
            title: "Process Understanding", 
            description: "Understanding of the interview process" 
        },
        { 
            icon: Brain, 
            title: "Competency Knowledge", 
            description: "Knowledge of competency-based structure" 
        },
        { 
            icon: Plane, 
            title: "Airline-Specific Prep", 
            description: "Tailored preparation for specific airlines" 
        },
        { 
            icon: MessageSquare, 
            title: "Feedback Strategies", 
            description: "Feedback and improvement strategies" 
        },
        { 
            icon: UserCheck, 
            title: "Mock Interviews", 
            description: "Mock interview sessions" 
        }
    ];

    let expandedTestimonials = Array(testimonials.length).fill(false);
    let swiper;

    function toggleTestimonial(index) {
        expandedTestimonials[index] = !expandedTestimonials[index];
        expandedTestimonials = expandedTestimonials;
        if (swiper) {
            setTimeout(() => swiper.update(), 0);
        }
    }

    onMount(() => {
        swiperEl = document.querySelector("swiper-container");
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

    function getVisibleLinkedInPosts() {
        if (typeof window !== "undefined") {
            if (window.innerWidth < 768) return 1;
            if (window.innerWidth < 1024) return 2;
            return 3;
        }
        return 3; // Default to 3 for SSR
    }

    let visibleLinkedInPosts = getVisibleLinkedInPosts();

    // Update visible posts on window resize
    if (typeof window !== "undefined") {
        window.addEventListener("resize", () => {
            visibleLinkedInPosts = getVisibleLinkedInPosts();
        });
    }
</script>

<svelte:window
    bind:innerWidth
    bind:outerWidth
    bind:innerHeight
    bind:outerHeight
/>

<div class="container">
    <video
        autoplay
        loop
        muted
        class="background-video"
        src="./landing_video_optimized.webm"
    />
    <div class="overlay"></div>
    <main class="content">
        <div class="card cta-card">
            <div>
                <h2>Ready to Take Off?</h2>
                <p>Contact Denis Cassidy today to boost your pilot career!</p>
            </div>
            <div class="cta-buttons">
                <button class="button primary">
                    <PhoneCall /> +353 868 167 242
                </button>
                <button class="button secondary">
                    <Mail /> dencas@hotmail.com
                </button>
            </div>
        </div>
        <div class="card main-card">
            <h1>PILOT INTERVIEW PREPARATION</h1>
            <p>
                As the <strong>aviation industry</strong> has been rejuvenated
                since lockdown, I have been providing
                <strong>Interview Preparation support</strong>
                to pilots. Many pilots re-entering or moving jobs within the industry
                require assistance with their
                <strong>interview skills</strong>.<br /><br />
                These pilots often have the required
                <strong>ratings and flying experience</strong>
                but are surprised to fail at the
                <strong>final interview stage</strong>. This situation is
                compounded by the lack of feedback, which can lead to repeated
                rejections.<br /><br />
                This scenario can be reversed through greater awareness of the
                <strong
                    >interview elements, process, and knowledge of
                    competency-based structure</strong
                >. My preparation services aim to equip pilots with the tools
                they need to <strong>excel in their interviews</strong> and advance
                their careers.
            </p>
        </div>

        <div class="features-card">
            {#each [{ icon: Calendar, title: "Flexible Scheduling", description: "Book your preparation sessions at times that suit your schedule." }, { icon: Users, title: "Experienced Mentors", description: "Learn from industry professionals with years of experience." }, { icon: Award, title: "Proven Success", description: "Our clients have succeeded with major airlines worldwide." }] as { icon: Icon, title, description }}
                <div class="card feature-card">
                    <svelte:component this={Icon} class="icon" />
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            {/each}
        </div>

        <div class="card services-card">
            <h2>Our Services</h2>
            <div class="services-grid">
                {#each services as service}
                    <div class="service-item">
                        <div class="service-icon">
                            <svelte:component this={service.icon} size={32} />
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                {/each}
            </div>
        </div>

        <div class="card">
            <h2>Success Stories</h2>
            <swiper-container>
                {#each testimonials as testimonial, i}
                    <swiper-slide>
                        <div
                            class="testimonial-content"
                            class:expanded={expandedTestimonials[i]}
                        >
                            <blockquote>
                                {@html expandedTestimonials[i]
                                    ? testimonial.quote
                                    : `${testimonial.quote.split(" ").slice(0, testimonialMaxLength).join(" ")}...`}
                            </blockquote>
                            {#if testimonial.quote.split(" ").length > testimonialMaxLength}
                                <button
                                    class="expand-button"
                                    on:click={() => toggleTestimonial(i)}
                                >
                                    {expandedTestimonials[i]
                                        ? "Read Less"
                                        : "Read More"}
                                    <svelte:component
                                        this={expandedTestimonials[i]
                                            ? ChevronUp
                                            : ChevronDown}
                                        size={16}
                                    />
                                </button>
                            {/if}
                            <p class="author">
                                {testimonial.name} - {testimonial.position}, {testimonial.airline}
                            </p>
                        </div>
                    </swiper-slide>
                {/each}
            </swiper-container>
        </div>

        <div class="card linkedin-card">
            {#each ["https://www.linkedin.com/embed/feed/update/urn:li:share:7238608563433082880", "https://www.linkedin.com/embed/feed/update/urn:li:share:7222962450583687168", "https://www.linkedin.com/embed/feed/update/urn:li:share:7224864937318199296"].slice(0, visibleLinkedInPosts) as src, index}
                <iframe
                    {src}
                    scrolling="no"
                    class="linkedin-embed"
                    frameborder="0"
                    allowfullscreen=""
                    title="Embedded post {index + 1}"
                ></iframe>
            {/each}
        </div>
    </main>
</div>

<style>
    :global(swiper-container) {
        width: 100%;
        height: auto;
        padding-bottom: 40px;
    }

    :global(swiper-slide) {
        height: auto;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 2rem 1rem;
    }

    .testimonial-content {
        width: 100%;
        max-width: 90%;
        text-align: left;
        background: rgba(0, 0, 64, 0.6);
        padding: 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    blockquote {
        font-style: italic;
        margin-bottom: 1rem;
        line-height: 1.8rem;
        white-space: pre-line;
        font-size: 1rem;
    }
    .author {
        font-weight: bold;
        color: #ffd700;
        text-align: right;
        margin-top: 1rem;
        font-size: 0.9rem;
    }

    .expand-button {
        background: none;
        border: none;
        color: #ffd700;
        cursor: pointer;
        display: flex;
        align-items: center;
        font-weight: bold;
        padding: 0.5rem 0;
        margin-top: 1rem;
        font-size: 0.9rem;
    }
    .services-card {
        padding: 2rem;
    }

    h2 {
        color: #ffd700;
        text-align: center;
        margin-bottom: 2rem;
        font-size: 2rem;
    }

    .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
    }

    .service-item {
        background: rgba(0, 0, 64, 0.4);
        border-radius: 8px;
        padding: 1.5rem;
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .service-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .service-icon {
        background: rgba(255, 215, 0, 0.1);
        width: 64px;
        height: 64px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto 1rem;
    }

    .service-icon :global(svg) {
        color: #ffd700;
    }

    h3 {
        color: #ffd700;
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
    }

    p {
        color: #e4f6fb;
        font-size: 0.9rem;
        line-height: 1.4;
    }
    .container {
        position: relative;
        min-height: 100vh;
        width: 100%;
        overflow-x: hidden;
        color: white;
        font-family: Arial, sans-serif;
    }

    .background-video {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -2;
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #00002088;
        z-index: -1;
    }

    .content {
        position: relative;
        z-index: 1;
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
    }

    .card {
        background-image: linear-gradient(
            120deg,
            rgba(0, 0, 64, 0.478),
            #402d006a
        );
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        border: 1px solid transparent;
        border-radius: 16px;
        padding: 2rem;
        margin-bottom: 2rem;
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
    }

    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        border-color: rgba(255, 215, 0, 0.3);
    }

    h1 {
        color: #ffd700;
        margin-bottom: 1rem;
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-style: normal;
    }

    h2 {
        color: #ffd700;
        margin-bottom: 1rem;
        text-align: center;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-style: normal;
    }

    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 1.8rem;
    }

    p {
        color: #e4f6fb;
        line-height: 1.6;
    }

    .features-card {
        text-align: center;
        background-position: center;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
    }

    .services-card {
        padding: 2rem 6rem;
    }

    .linkedin-card {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1rem;
        justify-content: center;
    }

    .linkedin-embed {
        width: 100%;
        height: 400px;
        border: none;
    }


    .cta-card {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        background-size: 30px 30px;
        background-position: center;
        background-image: linear-gradient(60deg, #0000407a, #402d006a);
    }
    .cta-card::before {
        content: '';
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
        transition: 0.5s;
    }

    .cta-card:hover::before {
        left: 100%;
    }

    .cta-buttons {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .button {
        display: flex;
        align-items: center;
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
    }

    .button.primary {
        background-color: #ffd700;
        color: #000040;
        box-shadow: 0 4px 15px rgba(255, 215, 0, 0.2);
    }

    .button.secondary {
        background-color: transparent;
        border: 2px solid #ffd700;
        color: #ffd700;
        position: relative;
        z-index: 1;
    }

    .button.secondary::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: #ffd700;
        transition: 0.3s ease;
        z-index: -1;
    }

    .button.secondary:hover::before {
        width: 100%;
    }

    .button.secondary:hover {
        color: #000040;
    }

    .button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }

    .button:active {
        transform: translateY(0);
    }

    .button :global(svg) {
        margin-right: 0.75rem;
        transition: transform 0.3s ease;
    }

    .button:hover :global(svg) {
        transform: scale(1.1);
    }

    @media (max-width: 768px) {
        .testimonial-content {
            font-size: 0.9rem;
            line-height: 1.3rem;
        }
        .main-card {
            text-align: center;
        }

        .card {
            padding: 1rem;
            margin-bottom: 1rem;
        }

        .cta-card {
            flex-direction: column;
            text-align: center;
        }
        .features-card {
            grid-template-columns: 1fr;
            gap: 0rem;
        }
        .feature-card {
            padding: 2rem 1.5rem !important;
        }

        .cta-buttons {
            margin-top: 1rem;
            justify-content: center;
        }
        :global(swiper-slide) {
            padding: 1rem 0.5rem;
        }
        .services-grid {
            grid-template-columns: 1fr;
        }

        .service-item {
            padding: 1rem;
        }
        .linkedin-card {
            grid-template-columns: 1fr;
        }

        .testimonial-content {
            max-width: 95%;
            padding: 1rem;
        }

        blockquote {
            font-size: 0.9rem;
            line-height: 1.5rem;
        }

        .author,
        .expand-button {
            font-size: 0.8rem;
        }

        h2 {
            font-size: 1.5rem;
        }

        h3 {
            font-size: 1rem;
        }

        p {
            font-size: 0.8rem;
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        .features-card {
            grid-template-columns: 1fr;
            gap: 0rem;
        }
        .card {
            margin-bottom: 1rem;
        }
        .linkedin-card {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>
