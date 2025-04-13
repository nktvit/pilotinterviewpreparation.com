<script>
    import Img from '@zerodevx/svelte-img';
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import Autoplay from "embla-carousel-autoplay";

    // Logos
    import aerLingus from '$lib/assets/logos/aer-lingus.png?as=run:0';
    import britishAirways from '$lib/assets/logos/british-airways.png?as=run:0';
    import cathayPacific from '$lib/assets/logos/cathay-pacific.png?as=run:0';
    import dhl from '$lib/assets/logos/dhl.png?as=run:0';
    import easyJet from '$lib/assets/logos/easy-jet.png?as=run:0';
    import etihadAirways from '$lib/assets/logos/etihad-airways.png?as=run:0';
    import gulfAir from '$lib/assets/logos/gulf-air.png?as=run:0';
    import jet2 from '$lib/assets/logos/jet2.png?as=run:0';
    import ryanair from '$lib/assets/logos/ryanair.png?as=run:0';
    import virginAtlantic from '$lib/assets/logos/virgin-atlantic.png?as=run:0';
    import saudiAirlines from '$lib/assets/logos/saudia-airlines.png?as=run:0';
    import emeraldAirlines from '$lib/assets/logos/emerald-airlines.png?as=run:0';

    const airlines = [
        {
            title: "British Airways",
            image: britishAirways
        },
        {
            title: "Virgin Atlantic",
            image: virginAtlantic
        },
        {
            title: "Cathay Pacific",
            image: cathayPacific
        },
        {
            title: "Etihad Airways",
            image: etihadAirways
        },
        {
            title: "Gulf Air",
            image: gulfAir
        },
        {
            title: "Saudi Airlines",
            image: saudiAirlines
        },
        {
            title: "Emerald Airlines",
            image: emeraldAirlines
        },
        {
            title: "DHL",
            image: dhl
        },
        {
            title: "EasyJet",
            image: easyJet
        },
        {
            title: "Jet2",
            image: jet2
        },
        {
            title: "Ryanair",
            image: ryanair
        },
        {
            title: "Aer Lingus",
            image: aerLingus
        }
    ];
</script>

<Carousel.Root
        opts={{
            align: "start",
            loop: true,
            duration: 2000,
            watchDrag: false
          }}
        plugins={[
        Autoplay({
          delay: 0,
            }),
          ]}
        class="w-full bg-accent"
>
    <Carousel.Content>
        {#each airlines as airline, i (i)}
            <Carousel.Item class="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                <Img src={airline.image} alt={airline.title} loading="lazy" fetchpriority="low"
                     class="w-full h-full max-w-[100px] lg:max-w-[150px] object-contain"/>
            </Carousel.Item>
        {/each}
    </Carousel.Content>
</Carousel.Root>
