<script>
    import * as Accordion from "$lib/components/ui/accordion/index.js";
    
    export const faqs = [
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
</script>

<section class="container mx-auto py-12 mb-24 sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
    <h3 class="text-white text-center text-3xl font-medium">
        FAQ
    </h3>
    <Accordion.Root type="single" class="mx-auto w-full mt-6 text-left">
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