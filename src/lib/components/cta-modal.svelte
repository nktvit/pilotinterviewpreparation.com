<script>
import {Phone} from "lucide-svelte";
import * as AlertDialog from "$lib/components/ui/alert-dialog/index.js";
</script>

<AlertDialog.Content
        class="w-[90vw] max-h-[90vh] overflow-y-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl landscape:lg:max-w-2xl landscape:max-w-[95vw] bg-[rgb(1,23,55)] text-white p-6 landscape:p-4 landscape:h-auto landscape:max-h-[95vh]"
>
    <AlertDialog.Header class="landscape:max-w-[50%]">
        <AlertDialog.Title
                class="text-2xl sm:text-3xl roboto-black text-white"
                role="heading"
                aria-level="2"
        >
            Book Your Interview Preparation
        </AlertDialog.Title>
        <AlertDialog.Description
                class="mt-4 landscape:mt-2 roboto-regular leading-relaxed text-primary-foreground"
        >
            Contact us by phone to schedule your personalized interview preparation session:
        </AlertDialog.Description>
    </AlertDialog.Header>

    <div class="landscape:flex landscape:gap-6 landscape:mt-4">
        <div class="py-4 space-y-6 landscape:py-0 landscape:space-y-4 landscape:flex-1">
            <div class="flex flex-col items-center sm:items-start space-y-3 landscape:space-y-2">
                <h3 class="text-xl roboto-medium text-white">Book by Phone</h3>

                <a href="tel:+353868167242"
                   class="group flex items-center space-x-2 text-lg sm:text-xl text-[hsl(var(--accent))] hover:text-[hsl(var(--accent))/90] transition-colors roboto-medium p-2 hover:bg-white/5 rounded-lg"
                   aria-label="Call us at +353 868 167 242"
                >
                    <Phone class="h-5 w-5 group-hover:scale-110 transition-transform"/>
                    <span>+353 868 167 242</span>
                </a>
            </div>

            <div class="flex flex-col items-center sm:items-start space-y-3 landscape:space-y-2">
                <h3 class="text-lg roboto-medium text-white">Or Email</h3>

                <a href="mailto:info@pilotinterviewpreparation.com"
                   class="group flex items-center space-x-2 text-lg sm:text-xl text-[hsl(var(--accent))] hover:text-[hsl(var(--accent))/90] transition-colors roboto-medium p-2 hover:bg-white/5 rounded-lg"
                   aria-label="Call us at +353 868 167 242"
                >
                    <Phone class="h-5 w-5 group-hover:scale-110 transition-transform"/>
                    <span>info@pilotinterviewpreparation.com</span>
                </a>
            </div>
        </div>

        <div class="space-y-3 landscape:flex-1">
            <h3 class="roboto-medium text-white">What to expect:</h3>
            <ul class="space-y-2 text-sm text-[hsl(var(--muted-foreground))] roboto-regular list-none landscape:space-y-1"
                role="list">
                {#each [
                    'Brief discussion of your experience and goals',
                    'Overview of available session types',
                    'Scheduling your preparation session',
                    'Payment details and confirmation'
                ] as item}
                    <li class="flex items-center space-x-2 hover:bg-white/5 p-2 rounded-lg transition-colors">
                                            <span class="text-[hsl(var(--accent))] flex-shrink-0"
                                                  aria-hidden="true">•</span>
                        <span>{item}</span>
                    </li>
                {/each}
            </ul>
        </div>
    </div>

    <AlertDialog.Footer class="sm:justify-between flex-col sm:flex-row gap-4 mt-6 landscape:mt-4">
        <div class="text-sm text-[hsl(var(--muted-foreground))] roboto-regular">
            We look forward to helping you succeed in your airline interview
        </div>
        <AlertDialog.Cancel
                class="ring-0 outline-0 inline-block bg-transparent"
        >
            Close
        </AlertDialog.Cancel>
    </AlertDialog.Footer>
</AlertDialog.Content>
