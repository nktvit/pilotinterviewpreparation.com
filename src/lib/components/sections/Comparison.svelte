<script>
    import {X, Check} from "lucide-svelte";

    const selfPrepItems = [
        "Generic online resources",
        "No personalized feedback",
        "Uncertain interview expectations",
        "Trial and error approach",
        "Limited industry insights",
        "No mock interview practice"
    ];

    const coachingItems = [
        "Tailored to your target airline",
        "Real-time expert feedback",
        "Insider knowledge of current processes",
        "Proven preparation strategies",
        "30+ years of industry experience",
        "Realistic mock interviews"
    ];
</script>

<section class="bg-[rgb(1,23,55)] py-12 md:py-20">
    <div class="mx-auto px-4 w-[95%] sm:w-[90%] md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
        <div class="text-center mb-8 md:mb-12">
            <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl roboto-black text-white mb-3 md:mb-4">
                Why Choose Professional Coaching?
            </h2>
            <p class="text-base sm:text-lg md:text-xl text-primary-foreground max-w-3xl mx-auto">
                See how expert guidance compares to going it alone
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <!-- Self-Prep Column -->
            <div class="bg-white/5 backdrop-blur-sm rounded-lg p-5 sm:p-6 md:p-8 border border-white/10">
                <h3 class="text-xl md:text-2xl roboto-bold text-white/80 mb-6 text-center">
                    Self-Preparation
                </h3>
                <ul class="space-y-4">
                    {#each selfPrepItems as item}
                        <li class="flex items-start gap-3">
                            <X class="h-5 w-5 text-red-400/70 flex-shrink-0 mt-0.5" />
                            <span class="text-primary-foreground">{item}</span>
                        </li>
                    {/each}
                </ul>
            </div>

            <!-- Coaching Column (Highlighted) -->
            <div class="relative bg-white/5 backdrop-blur-sm rounded-lg p-5 sm:p-6 md:p-8 border-2 border-[hsl(var(--accent))]/40 pt-8 sm:pt-9 md:pt-11">
                <!-- Recommended Badge -->
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-[hsl(var(--accent))] text-black text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    Recommended
                </div>

                <h3 class="text-xl md:text-2xl roboto-bold text-white mb-6 text-center">
                    Professional Coaching
                </h3>
                <ul class="space-y-4">
                    {#each coachingItems as item}
                        <li class="flex items-start gap-3">
                            <Check class="h-5 w-5 text-[hsl(var(--accent))] flex-shrink-0 mt-0.5" />
                            <span class="text-primary-foreground">{item}</span>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>

        <!-- CTA -->
        <div class="text-center mt-8 md:mt-12">
            <a
                href="tel:+353868167242"
                class="inline-flex items-center bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 text-black font-bold py-3 px-6 rounded-md transition-colors duration-300"
            >
                <span class="mr-2">☎️</span> Call Now: +353 868 167 242
            </a>
        </div>
    </div>
</section>
