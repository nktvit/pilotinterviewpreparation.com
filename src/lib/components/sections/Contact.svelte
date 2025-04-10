<script>
    import {Phone, Mail, Send, Calendar, Clock, Info, Check} from "lucide-svelte";

    let formData = {
        name: '',
        email: '',
        phone: '',
        airline: '',
        message: '',
        preferredDate: '',
    };

    let formSubmitted = false;

    function handleSubmit(event) {
        event.preventDefault();
        formSubmitted = true;

        setTimeout(() => {
            formSubmitted = false;
            formData = {
                name: '',
                email: '',
                phone: '',
                airline: '',
                message: '',
                preferredDate: '',
            };
        }, 5000);
    }
</script>

<section id="contact" class="bg-[rgb(1,23,55)] py-12 md:py-20">
    <div class="mx-auto px-4 w-[95%] sm:w-[90%] md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
        <div class="text-center mb-8 md:mb-12">
            <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl roboto-black text-white mb-3 md:mb-4">
                Book Your Interview Preparation
            </h2>
            <p class="text-base sm:text-lg md:text-xl text-primary-foreground max-w-3xl mx-auto">
                Schedule your personalized coaching session with Denis Cassidy
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <div class="md:col-span-7 bg-white/5 backdrop-blur-sm rounded-lg p-5 sm:p-6 md:p-8 border border-white/10 shadow-lg">
                {#if formSubmitted}
                    <div class="text-center py-8">
                        <div class="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[hsl(var(--accent))]/20 mb-4">
                            <Check class="h-8 w-8 text-[hsl(var(--accent))]" />
                        </div>
                        <h3 class="text-xl text-white mb-2">Message Sent Successfully!</h3>
                        <p class="text-primary-foreground">We'll get back to you shortly to confirm your session.</p>
                    </div>
                {:else}
                    <form on:submit={handleSubmit} class="space-y-5 md:space-y-6">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <div>
                                <label for="name" class="block text-sm text-white/80 mb-1">Full Name*</label>
                                <input
                                    type="text"
                                    id="name"
                                    bind:value={formData.name}
                                    required
                                    class="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent"
                                    placeholder="John Smith"
                                />
                            </div>

                            <div>
                                <label for="email" class="block text-sm text-white/80 mb-1">Email Address*</label>
                                <input
                                    type="email"
                                    id="email"
                                    bind:value={formData.email}
                                    required
                                    class="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label for="phone" class="block text-sm text-white/80 mb-1">Phone Number*</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    bind:value={formData.phone}
                                    required
                                    class="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent"
                                    placeholder="+353 123 456 789"
                                />
                            </div>

                            <div>
                                <label for="airline" class="block text-sm text-white/80 mb-1">Target Airline</label>
                                <input
                                    type="text"
                                    id="airline"
                                    bind:value={formData.airline}
                                    class="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent"
                                    placeholder="e.g. Virgin Atlantic"
                                />
                            </div>
                        </div>

                        <div>
                            <label for="preferredDate" class="block text-sm text-white/80 mb-1">Preferred Date (Optional)</label>
                            <input
                                type="date"
                                id="preferredDate"
                                bind:value={formData.preferredDate}
                                class="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label for="message" class="block text-sm text-white/80 mb-1">Your Message</label>
                            <textarea
                                id="message"
                                bind:value={formData.message}
                                rows="4"
                                class="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent resize-none"
                                placeholder="Tell us about your experience and what you're looking for..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            class="w-full bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 transition-colors text-black font-bold py-3 px-4 rounded-md flex items-center justify-center"
                        >
                            <Send class="h-5 w-5 mr-2" />
                            Send Message
                        </button>

                        <p class="text-xs text-white/60 text-center">
                            We'll respond within 24 hours to schedule your session.
                        </p>
                    </form>
                {/if}
            </div>

            <div class="md:col-span-5 space-y-5 md:space-y-6">
                <div class="bg-white/5 backdrop-blur-sm rounded-lg p-5 sm:p-6 border border-white/10 shadow-lg">
                    <h3 class="text-lg md:text-xl text-white mb-4 flex items-center">
                        <Phone class="h-5 w-5 mr-2 text-[hsl(var(--accent))]" />
                        Contact Directly
                    </h3>

                    <div class="space-y-3 md:space-y-4">
                        <a
                            href="tel:+353868167242"
                            class="flex items-center space-x-3 text-primary-foreground hover:text-white transition-colors group p-2 hover:bg-white/5 rounded-md"
                        >
                            <div class="h-9 w-9 md:h-10 md:w-10 rounded-full bg-[hsl(var(--accent))]/10 flex items-center justify-center group-hover:bg-[hsl(var(--accent))]/20 transition-colors">
                                <Phone class="h-4 w-4 md:h-5 md:w-5 text-[hsl(var(--accent))]" />
                            </div>
                            <div class="text-sm md:text-base">+353 868 167 242</div>
                        </a>

                        <a
                            href="mailto:info@pilotinterviewpreparation.com"
                            class="flex items-center space-x-3 text-primary-foreground hover:text-white transition-colors group p-2 hover:bg-white/5 rounded-md"
                        >
                            <div class="h-9 w-9 md:h-10 md:w-10 rounded-full bg-[hsl(var(--accent))]/10 flex items-center justify-center group-hover:bg-[hsl(var(--accent))]/20 transition-colors">
                                <Mail class="h-4 w-4 md:h-5 md:w-5 text-[hsl(var(--accent))]" />
                            </div>
                            <div class="text-sm md:text-base break-words">info@pilotinterviewpreparation.com</div>
                        </a>
                    </div>
                </div>

                <div class="bg-white/5 backdrop-blur-sm rounded-lg p-5 sm:p-6 border border-white/10 shadow-lg">
                    <h3 class="text-lg md:text-xl text-white mb-4 flex items-center">
                        <Clock class="h-5 w-5 mr-2 text-[hsl(var(--accent))]" />
                        Available Hours
                    </h3>

                    <div class="space-y-2">
                        <div class="flex justify-between items-center">
                            <span class="text-white/80 text-sm">Monday - Friday</span>
                            <span class="text-[hsl(var(--accent))] text-sm">9:00 AM - 6:00 PM</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-white/80 text-sm">Saturday</span>
                            <span class="text-[hsl(var(--accent))] text-sm">By Appointment</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-white/80 text-sm">Sunday</span>
                            <span class="text-white/60 text-sm">Closed</span>
                        </div>
                        <div class="text-white/60 text-xs pt-4">
                            All times are Irish Standard Time (GMT+1)
                        </div>
                    </div>
                </div>

                <div class="bg-[hsl(var(--accent))]/10 backdrop-blur-sm rounded-lg p-5 sm:p-6 border border-[hsl(var(--accent))]/20 shadow-lg">
                    <h3 class="text-lg md:text-xl text-white mb-4 flex items-center">
                        <Info class="h-5 w-5 mr-2 text-[hsl(var(--accent))]" />
                        What to Expect
                    </h3>

                    <ul class="space-y-2 text-primary-foreground text-left text-sm">
                        {#each [
                            'Brief discussion of your experience and goals',
                            'Overview of available session types',
                            'Scheduling your preparation session',
                            'Payment details and confirmation'
                        ] as item}
                            <li class="flex items-start space-x-2">
                                <span class="text-[hsl(var(--accent))] flex-shrink-0 mt-1"
                                      aria-hidden="true">•</span>
                                <span>{item}</span>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
