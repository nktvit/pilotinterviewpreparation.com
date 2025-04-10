<script>
    import {Phone, Mail} from "lucide-svelte";
    import Logo from "$lib/components/logo.svelte";
</script>

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
                            info@pilotinterviewpreparation.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <span class="block py-3.5 text-xs text-center bg-primary">
         2024 Denis Cassidy. All rights reserved.
    </span>
</footer>