<script>
    import {
        PhoneCall,
        Mail,
        Calendar,
        Users,
        Award,
        ChevronLeft,
        ChevronRight,
        ChevronDown,
        ChevronUp,
    } from "lucide-svelte";

    let activeTestimonial = 0;
    let testimonialMaxLength = 80;
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

    let expandedTestimonials = Array(testimonials.length).fill(false);

    function toggleTestimonial(index) {
        expandedTestimonials[index] = !expandedTestimonials[index];
        expandedTestimonials = expandedTestimonials;
    }

    function previousTestimonial() {
        activeTestimonial =
            activeTestimonial > 0
                ? activeTestimonial - 1
                : testimonials.length - 1;
        expandedTestimonials = Array(testimonials.length).fill(false);
    }

    function nextTestimonial() {
        activeTestimonial =
            activeTestimonial < testimonials.length - 1
                ? activeTestimonial + 1
                : 0;
        expandedTestimonials = Array(testimonials.length).fill(false);
    }
</script>

<div class="container">
    <video
        autoplay
        loop
        muted
        class="background-video"
        src="https://videos.pexels.com/video-files/3678380/3678380-hd_1920_1080_30fps.mp4"
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
                As the <strong>aviation industry</strong> has been rejuvenated since lockdown, I have been providing <strong>Interview Preparation support</strong> to pilots. Many pilots re-entering or moving jobs within the industry require assistance with their <strong>interview skills</strong>.<br><br>
                These pilots often have the required <strong>ratings and flying experience</strong> but are surprised to fail at the <strong>final interview stage</strong>. This situation is compounded by the lack of feedback, which can lead to repeated rejections.<br><br>
                This scenario can be reversed through greater awareness of the <strong>interview elements, process, and knowledge of competency-based structure</strong>. My preparation services aim to equip pilots with the tools they need to <strong>excel in their interviews</strong> and advance their careers.
            </p>
        </div>

        <div class="features">
            {#each [{ icon: Calendar, title: "Flexible Scheduling", description: "Book your preparation sessions at times that suit your schedule." }, { icon: Users, title: "Experienced Mentors", description: "Learn from industry professionals with years of experience." }, { icon: Award, title: "Proven Success", description: "Our clients have succeeded with major airlines worldwide." }] as { icon: Icon, title, description }}
                <div class="card feature-card">
                    <svelte:component this={Icon} class="icon" />
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            {/each}
        </div>

        <div class="card">
            <h2>Our Services</h2>
            <ul class="services-list">
                {#each ["Greater awareness of interview elements", "Understanding of the interview process", "Knowledge of competency-based structure", "Tailored preparation for specific airlines", "Feedback and improvement strategies", "Mock interview sessions"] as service}
                    <li>{service}</li>
                {/each}
            </ul>
        </div>

        <div class="card">
            <h2>Success Stories</h2>
            <div class="testimonials">
                <div
                    class="testimonial-slider"
                    style="transform: translateX(-{activeTestimonial * 100}%)"
                >
                    {#each testimonials as testimonial, i}
                        <div class="testimonial">
                            <div
                                class="testimonial-content"
                                class:expanded={expandedTestimonials[i]}
                            >
                                <div class="testimonial-inner">
                                    <blockquote>
                                        {@html expandedTestimonials[i]
                                            ? testimonial.quote
                                            : testimonial.quote
                                                  .split(" ")
                                                  .slice(0, testimonialMaxLength)
                                                  .join(" ") + "..."}
                                    </blockquote>
                                    {#if testimonial.quote.split(" ").length > testimonialMaxLength}
                                        <button
                                            class="expand-button"
                                            on:click={() =>
                                                toggleTestimonial(i)}
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
                                        {testimonial.name} - {testimonial.position},
                                        {testimonial.airline}
                                    </p>
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
                <button class="nav-button prev" on:click={previousTestimonial}>
                    <ChevronLeft />
                </button>
                <button class="nav-button next" on:click={nextTestimonial}>
                    <ChevronRight />
                </button>
            </div>
        </div>

    </main>
</div>

<style>
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
        background: #000020cc;
        backdrop-filter: blur(5px);
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
        background: #00004099;
        border: 1px solid #64c8ff4d;
        border-radius: 8px;
        padding: 2rem;
        margin-bottom: 2rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
        color: #add8e6;
        line-height: 1.6;
    }

    .features {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
    }

    .feature-card {
        text-align: center;
    }

    .icon {
        width: 48px;
        height: 48px;
        margin: 0 auto 1rem;
        color: #ffd700;
    }

    .services-list {
        columns: 2;
        list-style-type: none;
        padding: 0;
    }

    .services-list li::before {
        content: "•";
        color: #ffd700;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
    }

    .testimonials {
        position: relative;
        overflow: hidden;
        height: 400px; /* Set a fixed height for the testimonials container */
    }

    .testimonial-slider {
        display: flex;
        transition: transform 0.3s ease;
        height: 100%; /* Make the slider take full height of its container */
    }

    .testimonial {
        flex: 0 0 100%;
        display: flex;
        justify-content: center;
        align-items: center; /* Center vertically */
        height: 100%; /* Take full height of the slider */
    }

    .testimonial-content {
        max-width: 80%;
        text-align: left;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center; /* Center content vertically */
        height: 100%; /* Take full height of the testimonial */
    }

    .testimonial-inner {
        overflow-y: auto; /* Allow scrolling for expanded content */
        max-height: 100%; /* Take full height of the content area */
        padding-right: 15px; /* Add some padding for the scrollbar */
    }

    .testimonial-content.expanded .testimonial-inner {
        max-height: none; /* Remove max-height when expanded */
    }

    blockquote {
        font-style: italic;
        margin-bottom: 1rem;
        line-height: 1.8rem;
        white-space: pre-line;
    }

    blockquote :global(strong) {
        color: #ffd700;
        font-weight: bold;
    }

    .author {
        font-weight: bold;
        color: #ffd700;
        text-align: right;
        margin-top: 1rem;
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
        margin-top: auto; /* Push the button to the bottom */
    }

    .expand-button :global(svg) {
        margin-left: 0.5rem;
    }

    /* Responsive design for testimonials */
    @media (max-width: 768px) {
        .testimonials {
            height: 300px; /* Smaller height for mobile */
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        .testimonials {
            height: 350px; /* Medium height for tablets */
        }
    }

    @media (min-width: 1025px) {
        .testimonials {
            height: 400px; /* Larger height for desktops */
        }
    }

    .nav-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 64, 0.6);
        border: none;
        border-radius: 50%;
        padding: 0.5rem;
        color: #ffd700;
        cursor: pointer;
    }

    .nav-button.prev {
        left: 0;
    }
    .nav-button.next {
        right: 0;
    }

    .cta-card {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }

    .cta-buttons {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .button {
        display: flex;
        align-items: center;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 4px;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .button.primary {
        background-color: #ffd700;
        color: #000040;
    }

    .button.secondary {
        background-color: transparent;
        border: 1px solid #ffd700;
        color: #ffd700;
    }

    .button :global(svg) {
        margin-right: 0.5rem;
    }

    @media (max-width: 768px) {
        .features {
            gap: 0rem;
        }
        .testimonial-content {
            font-size: 0.9rem;
            line-height: 1.3rem;
        }
        .main-card {
            text-align: center;
        }

        .services-list {
            columns: 1;
        }
        .card {
            padding: 1.8rem;
        }

        .cta-card {
            flex-direction: column;
            text-align: center;
        }

        .cta-buttons {
            margin-top: 1rem;
            justify-content: center;
        }
    }
</style>
