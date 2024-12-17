<script>
    import {cn} from "$lib/utils.js";

    let {class: className, ...restProps} = $props();
</script>

<div id="logo"
     class={cn(
		"flex mt-5 items-center justify-center text-left",
		className
	)}
     {...restProps}

>
    <svg width="38" height="41" viewBox="0 0 38 41"  xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_4010_6)" filter="url(#filter0_i_4010_6)">
            <path d="M37.6869 28.2292L37.2597 23.5347L21.7694 14.7692C21.7694 14.7692 21.9077 11.7933 21.7694 7.40635C21.6157 4.64991 20.6296 2.03497 18.9741 -0.00610352L18.9817 0.00414647H18.7051C17.0589 2.03279 16.0758 4.63059 15.9174 7.37047L15.9159 7.40635C15.7776 11.7916 15.9159 14.7692 15.9159 14.7692L0.42712 23.5347L0 28.2292L10.4713 24.6861L15.7776 23.6919C15.5857 27.7997 15.9616 31.9161 16.8917 35.8945L16.837 35.6177L12.6905 37.4883V40.5599L18.0409 39.1933C18.2765 39.7263 18.4969 40.1602 18.734 40.5804L18.7021 40.5206V41.0024C18.7497 40.9227 18.7968 40.8412 18.8434 40.7581L18.9863 41.0024V40.5206C19.1915 40.1619 19.4119 39.728 19.6125 39.2804L19.6475 39.1933L24.9979 40.5599V37.4883L20.8513 35.6177C21.5551 32.6572 21.9579 29.2576 21.9579 25.7538C21.9579 25.0283 21.9407 24.3074 21.9062 23.5911L21.9108 23.6902L27.2186 24.6844L37.6884 28.2275L37.6869 28.2292Z"
                 />
        </g>
        <defs>
            <filter id="filter0_i_4010_6" x="0" y="0" width="38" height="41" filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                               result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="0.7"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix"
                               values="0 0 0 0 0.00392157 0 0 0 0 0.0901961 0 0 0 0 0.215686 0 0 0 0.69 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_4010_6"/>
            </filter>
            <clipPath id="clip0_4010_6">
                <rect width="38" height="41"/>
            </clipPath>
        </defs>
    </svg>
    <span class="ml-1.5">Pilot<br/>Interview<br/>Preparation</span>
</div>
