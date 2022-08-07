<script> 
    import { fly, fade } from "svelte/transition";

    import IntersectionObserver from "svelte-intersection-observer";
    let element;
    let intersecting;
    $: hovered = false;

    const setHovered = (val) => hovered = val;
    export let featured = [
        {image:'https://ik.imagekit.io/gillianassi/Tree-Umph_Featured_CO_w78-xj.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651599940668',
         title: 'Tree-umph Game Jam' }, 
        {image: 'https://ik.imagekit.io/gillianassi/Windwaker_Featured_XXXxjWfWO.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657554044471',  
        title: 'the Wind Waker Remake'}, 
        {image:'https://ik.imagekit.io/gillianassi/Projects/NotForSale/NotForSaleBanner_3ooOZQyqk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657554358362',  
        title: 'Not For Sale'},
        {image: 'https://ik.imagekit.io/gillianassi/SuperMetroid_Featured_LYXt21X6u.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651599940563', 
        title: 'Super Metroid'}  ]

</script>
<!-- 
<div class="overflow-x-hidden max-w-screen  ">

    <div class=" flex gap-2 transition-all w-[100vw] relative hover_container items-center h-[500px]" on:mouseenter="{() => setHovered(true)}" on:mouseleave="{() => setHovered(false)}">
        {#each images as image, index}
            <div 
            class="card bg-gPrimaryColor origin-top h-96 w-1/4 flex justify-center items-center overflow-y-visible transition-all duration-300 relative -skew-x-12 hover:grayscale-0 rounded-sm"
            class:child={hovered}
        >
      
            //<img src="{image}" class="skew-x-12 h-full w-full square" alt="bepis"/>
            </div>   
        {/each}
    </div>
</div> 
-->
<div class="font-mono text-7xl pl-10 text-gSecondaryColor font-changa">
    Featured
</div>
<div class="overflow-x-hidden relative">
    <IntersectionObserver {element} bind:intersecting threshold="{0.4}" once="{false}">
        <div bind:this={element} class="transition-all carouselWidth relative hover_container items-center h-96 translate-x-500 justify-around mx-10" on:mouseenter="{() => setHovered(true)}" on:mouseleave="{() => setHovered(false)}">
            {#if intersecting === true}
            <div transition:fade class="transition-all h-full w-full flex gap-2">
                {#each featured as project, index}
                <div 
                    in:fly="{{duration: 400, delay: 100 * index, x: 50, opacity: 0}}"
                    class:child={hovered}
                    class="card origin-top h-full w-1/4  flex justify-center items-center transition-all duration-300 relative overflow-hidden hover:grayscale-0  rounded-md -skew-x-12 hover:w-1/3"       
                    >
                    <div class="h-full w-full relative ">
                        <img src="{project.image}" class="skew-x-12 scale-[130%] origin-center absolute top-1/2 -translate-y-1/2" alt="{project.title}"/>
                    </div>
                </div>   
                {/each} 
            </div>
            {/if}
        </div>
    </IntersectionObserver>
    
    
</div>

<style>
    
.child:not(:hover) {
    @apply grayscale;

}
.card::after {
    content: '';
    bottom: 5px;
    transform-origin: bottom;
    @apply h-0 w-full absolute transition-all duration-300 ease-in-out rounded-t-sm rotate-180 bg-gPrimaryColor;
}
.card:hover::after {
    @apply h-4 ;
}

.carouselWidth {
    width: calc(100vw + 100px);
    transform: translateX(-50%);
    left:50%;
}
</style>