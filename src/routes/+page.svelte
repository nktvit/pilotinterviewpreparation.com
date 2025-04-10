<script>
    import {fade} from "svelte/transition";

    // Components
    import Header from "$lib/components/sections/Header.svelte";
    import Hero from "$lib/components/sections/Hero.svelte";
    import Features from "$lib/components/sections/Features.svelte";
    import Consultant from "$lib/components/sections/Consultant.svelte";
    import Airlines from "$lib/components/sections/Airlines.svelte";
    import PrepMatters from "$lib/components/sections/PrepMatters.svelte";
    import Testimonials from "$lib/components/sections/Testimonials.svelte";
    import FAQ from "$lib/components/sections/FAQ.svelte";
    import Footer from "$lib/components/sections/Footer.svelte";
    import Contact from "$lib/components/sections/Contact.svelte";
</script>

<div class="text-center md:text-left bg-[rgb(1,23,55)]">
    <Header />

    <main class="flex flex-col">
        <Hero />
        <Features />
        <Consultant />
        <Airlines />
        <PrepMatters />
        <Testimonials />
        <Contact />
        <FAQ />
    </main>

    <Footer />
</div>

<style>
    /* Global styles remain here since they affect multiple components */
</style>
