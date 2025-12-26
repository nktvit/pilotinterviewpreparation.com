<script>
    import Logo from "$lib/components/logo.svelte";
    import {Plane, CheckCircle, Award, Users, Calendar, TrendingUp, Star} from "lucide-svelte";
    import {fly, fade} from "svelte/transition";

    const benefits = [
        {
            icon: CheckCircle,
            text: "Interview Confidence Techniques"
        },
        {
            icon: Award,
            text: "80%+ Success Rate with Major Airlines"
        },
        {
            icon: Users,
            text: "One-to-One Personalized Coaching"
        },
        {
            icon: Calendar,
            text: "Flexible Online Teams Sessions"
        }
    ];

    const stats = [
        { value: "30+", label: "Years Experience" },
        { value: "100+", label: "Pilots Placed" },
        { value: "8+", label: "Major Airlines" }
    ];

    const highlights = [
        "Technical Knowledge",
        "Competency-Based Questions",
        "Group Exercises",
        "Simulator Assessment"
    ];
</script>

<header class="relative min-h-screen md:min-h-[70vh] w-full overflow-hidden">
    <div class="absolute inset-0 z-0 w-full h-full">
        <video
            autoplay
            muted
            loop
            playsinline
            class="absolute top-0 left-0 w-full h-full object-cover brightness-125 contrast-100"
        >
            <source src="/landing_video_optimized.webm" type="video/webm">
        </video>
        <div class="absolute inset-0 bg-gradient-to-b from-[rgb(1,23,55)]/70 via-[rgb(1,23,55)]/50 to-[rgb(1,23,55)] z-10"></div>
    </div>

    <div class="container relative z-20 mx-auto h-full flex flex-col px-4 sm:px-6 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
        <nav class="pt-6 sm:pt-8 flex items-center justify-between">
            <a href="/" aria-label="Pilot Interview Preparation Home" class="inline-block">
                <Logo class="text-white fill-white h-12 sm:h-16 w-auto" />
            </a>

            <div class="hidden lg:flex space-x-6 items-center">
                {#each stats as stat, i}
                    <div
                        class="flex flex-col items-center"
                        in:fade={{delay: 1000 + (i * 200), duration: 400}}
                    >
                        <span class="text-[hsl(var(--accent))] text-2xl font-bold">{stat.value}</span>
                        <span class="text-white/80 text-xs">{stat.label}</span>
                    </div>
                {/each}
            </div>
        </nav>

        <div class="flex-1 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12 py-8 md:py-12">
            <div class="md:w-3/5" in:fly={{y: 30, duration: 800, delay: 200}}>
                <div class="inline-block bg-[hsl(var(--accent))]/20 backdrop-blur-sm px-3 py-1 rounded-full mb-4 border border-[hsl(var(--accent))]/30">
                    <span class="text-[hsl(var(--accent))] text-sm roboto-bold">Expert Airline Interview Preparation</span>
                </div>

                <h1 class="text-white leading-tight mb-6 md:mb-8">
                    Land your<br/>dream<br/>airline job
                </h1>

                <ul class="space-y-3 mb-8">
                    {#each benefits as benefit, i}
                        <li
                            class="flex items-center text-white/90"
                            in:fade={{delay: 600 + (i * 200), duration: 400}}
                        >
                            <svelte:component this={benefit.icon} class="h-5 w-5 mr-3 text-[hsl(var(--accent))]" />
                            <span class="roboto-medium text-lg">{benefit.text}</span>
                        </li>
                    {/each}
                </ul>

                <div class="hidden md:block">
                    <p class="text-white/70 text-sm mb-2">Comprehensive Preparation For:</p>
                    <div class="flex flex-wrap gap-2">
                        {#each highlights as item, i}
                            <div
                                class="bg-white/10 px-3 py-1 rounded-full border border-white/20 text-white/90 text-sm"
                                in:fade={{delay: 1000 + (i * 100), duration: 400}}
                            >
                                <Star class="h-3 w-3 inline-block mr-1 text-[hsl(var(--accent))]" /> {item}
                            </div>
                        {/each}
                    </div>
                </div>
            </div>

            <div
                class="md:w-2/5 bg-[rgb(1,23,55)]/50 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/10 shadow-xl"
                in:fly={{y: 30, duration: 800, delay: 400}}
            >
                <div class="flex items-center mb-4">
                    <Plane class="h-6 w-6 mr-3 text-[hsl(var(--accent))]" />
                    <h2 class="text-xl md:text-2xl text-white font-semibold">Ready for takeoff?</h2>
                </div>

                <p class="mb-6 text-primary-foreground text-base sm:text-lg leading-relaxed">
                    Book your <strong>Teams session</strong> with an experienced pilot assessment and selection consultant
                </p>

                <div class="mb-6">
                    <a
                        href="tel:+353868167242"
                        class="flex items-center justify-center bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 transition-colors py-3 px-4 rounded-md text-black font-semibold"
                    >
                        <span class="mr-2">☎️</span> Call Now: +353 868 167 242
                    </a>
                </div>

                <div class="flex items-start space-x-3 mt-6 p-3 bg-white/5 rounded-lg">
                    <div class="flex-shrink-0 h-10 w-10 bg-[hsl(var(--accent))]/20 rounded-full flex items-center justify-center text-[hsl(var(--accent))]">FO</div>
                    <div class="text-left">
                        <p class="text-sm text-white/90 italic">
                            "Denis was instrumental in helping me secure my position at Virgin Atlantic."
                        </p>
                        <span class="block mt-1 text-xs text-white/60 not-italic">— First Officer, Virgin Atlantic</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="hidden md:flex justify-center mb-8">
            <a href="#features" class="animate-bounce">
                <svg class="w-6 h-6 text-white/60" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </a>
        </div>
    </div>
</header>

<style>
    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(6px);
        }
    }

    .animate-bounce {
        animation: bounce 2s infinite;
    }

    video {
        filter: brightness(1.25);
    }
</style>
