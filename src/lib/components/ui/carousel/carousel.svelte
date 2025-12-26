<script>
	import { setEmblaContext } from "./context.js";
	import { cn } from "$lib/utils.js";

	let {
		opts = {},
		plugins = [],
		setApi = () => {},
		orientation = "horizontal",
		class: className,
		children,
		...restProps
	} = $props();

	let api = $state(undefined);
	let canScrollNext = $state(false);
	let canScrollPrev = $state(false);
	let scrollSnaps = $state([]);
	let selectedIndex = $state(0);

	const carouselState = {
		get api() { return api; },
		set api(value) { api = value; },
		get orientation() { return orientation; },
		get options() { return opts; },
		get plugins() { return plugins; },
		get canScrollNext() { return canScrollNext; },
		set canScrollNext(value) { canScrollNext = value; },
		get canScrollPrev() { return canScrollPrev; },
		set canScrollPrev(value) { canScrollPrev = value; },
		get scrollSnaps() { return scrollSnaps; },
		set scrollSnaps(value) { scrollSnaps = value; },
		get selectedIndex() { return selectedIndex; },
		set selectedIndex(value) { selectedIndex = value; },
		scrollPrev,
		scrollNext,
		scrollTo,
		handleKeyDown,
		onInit,
	};

	setEmblaContext(carouselState);

	function scrollPrev() {
		api?.scrollPrev();
	}

	function scrollNext() {
		api?.scrollNext();
	}

	function scrollTo(index, jump) {
		api?.scrollTo(index, jump);
	}

	function onSelect(emblaApi) {
		if (!emblaApi) return;
		canScrollPrev = emblaApi.canScrollPrev();
		canScrollNext = emblaApi.canScrollNext();
		selectedIndex = emblaApi.selectedScrollSnap();
	}

	function handleKeyDown(e) {
		if (e.key === "ArrowLeft") {
			e.preventDefault();
			scrollPrev();
		} else if (e.key === "ArrowRight") {
			e.preventDefault();
			scrollNext();
		}
	}

	function onInit(event) {
		api = event.detail;
		scrollSnaps = api.scrollSnapList();
	}

	$effect(() => {
		if (api) {
			onSelect(api);
			api.on("select", onSelect);
			api.on("reInit", onSelect);
		}
	});

	$effect(() => {
		setApi(api);
	});

	$effect(() => {
		return () => {
			api?.off("select", onSelect);
		};
	});
</script>

<div class={cn("relative", className)} role="region" aria-roledescription="carousel" {...restProps}>
	{@render children?.()}
</div>
