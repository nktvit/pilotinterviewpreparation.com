<script>
    import Img from '@zerodevx/svelte-img';

    // Logos
    import aerLingus from '$lib/assets/logos/aer-lingus.png?as=run:0';
    import britishAirways from '$lib/assets/logos/british-airways.png?as=run:0';
    import cathayPacific from '$lib/assets/logos/cathay-pacific.png?as=run:0';
    import dhl from '$lib/assets/logos/dhl.png?as=run:0';
    import easyJet from '$lib/assets/logos/easy-jet.png?as=run:0';
    import jet2 from '$lib/assets/logos/jet2.png?as=run:0';
    import ryanair from '$lib/assets/logos/ryanair.png?as=run:0';
    import virginAtlantic from '$lib/assets/logos/virgin-atlantic.png?as=run:0';

    export let className = "";
</script>

<div class={className}>
    <div class="flex space-x-4 items-center">
        <Img src={aerLingus} alt="Aer Lingus" class="h-8 md:h-24 w-auto opacity-90 object-contain" />
        <Img src={virginAtlantic} alt="Virgin Atlantic" class="h-8 md:h-10 w-auto opacity-90 object-contain" />
        <Img src={britishAirways} alt="British Airways" class="h-8 md:h-12 w-auto opacity-90 object-contain" />
        <Img src={ryanair} alt="Ryanair" class="h-8 md:h-16 w-auto opacity-90 object-contain" />
    </div>
</div>
