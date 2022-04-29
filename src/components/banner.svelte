<script> 
    $: hovered = false;

    const setHovered = (val) => hovered = val;

    export let images = ['https://picsum.photos/id/1/1200', 'https://picsum.photos/id/233/1200', 'https://picsum.photos/id/34/1200', 'https://picsum.photos/id/12/1200' ]
</script>

<div class="overflow-x-hidden max-w-screen  ">

    <div class=" flex gap-2 transition-all w-[100vw] relative hover_container items-center h-[500px]" on:mouseenter="{() => setHovered(true)}" on:mouseleave="{() => setHovered(false)}">
        {#each images as image, index}
            <div 
            class="card bg-gPrimaryColor origin-top h-96 w-1/4 flex justify-center items-center overflow-y-visible transition-all duration-300 relative -skew-x-12 hover:grayscale-0 rounded-sm"
            class:child={hovered}
        >
      
            <!--<img src="{image}" class="skew-x-12 h-full w-full square" alt="bepis"/>-->
            </div>   
        {/each}
    </div>
</div>

<div class="overflow-x-hidden relative">

    <div class="flex gap-2 transition-all carouselWidth  relative hover_container items-center h-[500px] translate-x-500 justify-around mx-10" on:mouseenter="{() => setHovered(true)}" on:mouseleave="{() => setHovered(false)}">
        {#each images as image, index}
                <div 
                class="bg-gPrimaryColor origin-top h-96 w-1/4 flex justify-center items-center transition-all duration-300 relative hover:grayscale-0  rounded-md -skew-x-12 hover:w-1/3 hover:h-[400px]"
                class:child={hovered}
            >
        
        </div>   
        {/each}
    </div>

    
    
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

.firstImage {
    background-color: red;
    clip-path: polygon(0 0, 100% 0%, calc(100% - 83px) 100%, 0% 100%);
}
.firstImage:hover {
    background-color: red;
    clip-path: polygon(0 0, 100% 0%, calc(100% - 86px) 100%, 0% 100%);
}

.lastImage {
    background-color: blue;
    clip-path: polygon(83px 0, 100% 0%, 100% 100%, 0% 100%);

    position: relative;
}

.lastImage:hover {
    background-color: blue;
    clip-path: polygon(86px 0, 100% 0%, 100%  100%, 0% 100%);
    
}

.lastImage2 {
    background-color: blue;
    clip-path: polygon(0% 0, 100% 0%, 100% 100%, 0% 100%);
    
    transform: skew(-12deg, 0deg);
    position: relative;
}

.lastImage2:hover {
    background-color: blue;
    clip-path: polygon(0 0, 100% 0%, 100%  100%, 0% 100%);
    
}
    
.featured_text {
transform: rotate(-76deg);
}
</style>