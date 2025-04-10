<script>
    import Img from '@zerodevx/svelte-img';
    import planeDenis2 from '$lib/assets/plane-denis2.jpg?as=run';
    
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
    ];
</script>

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