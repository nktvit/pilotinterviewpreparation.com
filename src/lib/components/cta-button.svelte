<script>
    import {cn} from "$lib/utils.js";

    let {class: className, ...restProps} = $props();
</script>


<div class={cn(
		"max-w-fit mx-auto md:m-0 cursor-pointer inline-block",
		className
	)}
   {...restProps}
>

    <div class="flex flex-col items-center">
        <div id="btn-cta" class="bg-accent w-fit px-8 py-2">
            <span class="block mt-1.5">Book Now</span>
        </div>
        <hr class="h-0.5 mt-0.5 bg-accent border-0" style="width: calc(100% - 1px)">
    </div>
</div>
