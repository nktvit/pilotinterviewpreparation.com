<script>
    import Img from '@zerodevx/svelte-img';
    import planeDenis from '$lib/assets/plane-denis.jpg?as=run';
    import CtaButton from '$lib/components/cta-button.svelte';
    import CtaModal from '$lib/components/cta-modal.svelte';
    import * as AlertDialog from "$lib/components/ui/alert-dialog/index.js";
</script>

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