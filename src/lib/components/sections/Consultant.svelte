<script>
    import Img from '@zerodevx/svelte-img';
    import planeDenis from '$lib/assets/plane-denis.jpg?as=run';
    import {Send} from 'lucide-svelte';

</script>

<section class="container mx-auto py-16 px-4" id="cassidy">
    <div class="max-w-6xl mx-auto">
        <!-- Title -->
        <div class="text-center mb-16">
            <h2 class="roboto-black uppercase">
                <span class="text-2xl sm:text-3xl lg:text-4xl text-[hsl(var(--accent))] block mb-2">30+ years of experience</span>
                <span class="text-2xl sm:text-3xl lg:text-4xl text-white">In pilot assessment</span>
            </h2>
        </div>

        <!-- Content Grid -->
        <div class="grid md:grid-cols-2 gap-12 items-start">
            <!-- Image -->
            <div class="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Img
                    class="w-full h-full object-cover"
                    src={planeDenis}
                    alt="Denis Cassidy preparing a pilot for interview"
                />
            </div>

            <!-- Content -->
            <div class="space-y-8">
                <h3 class="text-white text-3xl lg:text-4xl roboto-black">Denis Cassidy</h3>

                <!-- Background -->
                <div class="space-y-4">
                    <h4 class="text-[hsl(var(--accent))] text-xl roboto-medium">Background</h4>
                    <p class="text-primary-foreground text-lg leading-relaxed">
                        Pilot assessment and selection consultant with extensive airline and ATO experience across
                        <strong>Europe and Middle East</strong> carriers. Specialised in delivering personalіsed
                        interview preparation via <strong>Teams</strong>, tailored to your specific CV and
                        target airline.
                    </p>
                </div>

                <!-- Success Track Record -->
                <div class="space-y-4">
                    <h4 class="text-[hsl(var(--accent))] text-xl roboto-medium">Success Track Record</h4>
                    <p class="text-primary-foreground text-lg mb-4">Successfully mentored pilots who secured positions at:</p>

                    <ul class="space-y-3">
                        <li class="flex gap-3 text-primary-foreground text-lg">
                            <span class="text-[hsl(var(--accent))]">•</span>
                            <span class="roboto-regular">
                                <strong>Legacy Carriers</strong>: British Airways, Virgin Atlantic, Cathay Pacific, Etihad Airways, Gulf Air, Saudi Airlines
                            </span>
                        </li>
                        <li class="flex gap-3 text-primary-foreground text-lg">
                            <span class="text-[hsl(var(--accent))]">•</span>
                            <span class="roboto-regular">
                                <strong>Low-Cost Airlines</strong>: Ryanair, EasyJet, Jet2
                            </span>
                        </li>
                        <li class="flex gap-3 text-primary-foreground text-lg">
                            <span class="text-[hsl(var(--accent))]">•</span>
                            <span class="roboto-regular">
                                <strong>Cargo Operations</strong>: DHL
                            </span>
                        </li>
                        <li class="flex gap-3 text-primary-foreground text-lg">
                            <span class="text-[hsl(var(--accent))]">•</span>
                            <span class="roboto-regular">
                                <strong>National Carriers</strong>: Aer Lingus, Emerald Airlines
                            </span>
                        </li>
                    </ul>
                </div>

                <!-- CTA -->
                <div class="pt-4">
                    <a 
                        href="#contact" 
                        class="inline-flex items-center bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 text-black font-bold py-3 px-4 rounded-md transition-colors duration-300"
                    >
                        Get Started
                        <Send class="h-5 w-5 ml-2"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
