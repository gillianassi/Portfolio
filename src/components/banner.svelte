<script> 
    import { fly, fade } from "svelte/transition";
    import Modal from '../Helpers/Modal.svelte';
    // @ts-nocheck
    import PlenopticMd from '../markdown/Research/PlenopticImaging.md';
    import WindwakerMd from '../markdown/projects/WindWakerRemake.md';
    import GEngineMd from '../markdown/projects/GEngine.md';
    import NotForSaleMd from '../markdown/projects/NotForSale.md';


    import IntersectionObserver from "svelte-intersection-observer";
    let element;
    let intersecting;
    $: hovered = false;
    $: showModal = false; 
    let highlightModal = false;
    $: selectedProject = {};

    const setHovered = (val) => hovered = val;
    export let featured = [
        {
            image:'https://ik.imagekit.io/gillianassi/Projects/G-Engine/GEngine_iy-_sjm_p.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661782460626',
            banner: 'https://ik.imagekit.io/gillianassi/Projects/G-Engine/GEngine_iy-_sjm_p.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661782460626',
            title: 'G-Engine', 
            markdown: GEngineMd
        }, 
        {
            image: 'https://ik.imagekit.io/gillianassi/Windwaker_Featured_XXXxjWfWO.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657554044471',  
            banner: 'https://ik.imagekit.io/gillianassi/Tumbnails/Windwaker_Highlight_NYJH5okFl.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651743301508',
            title: 'the Wind Waker Remake',
            markdown:WindwakerMd
        }, 
        {
            image:'https://ik.imagekit.io/gillianassi/Projects/NotForSale/NotForSaleBanner_3ooOZQyqk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657554358362',  
            banner: 'https://ik.imagekit.io/gillianassi/Projects/NotForSale/NotForSaleBanner_3ooOZQyqk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657554358362',
            title: 'Not For Sale',
            markdown: NotForSaleMd
        },
        {
            image: 'https://ik.imagekit.io/gillianassi/PlenopticFeatured_xPRRHqGhb.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661781731145', 
            banner: 'https://ik.imagekit.io/gillianassi/Research/PlenopticImaging/ActionShotPlenoptic_lk4HpShtB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661777233397',
            title: 'Super Metroid',
            markdown: PlenopticMd,
        }  ]

   
    const toggleModal = (project) => {
        if(showModal === false) selectedProject = project;
      
        showModal = !showModal;
       
    }
    const clickFeatured = (id) => {
       showModal = !showModal;
       selectedProject = {
        image: featured[id].image,
        markdown: featured[id].markdown,
        banner: featured[id].banner
    }
}

    

   
</script>

<div class="font-mono text-7xl py-5 text-gSecondaryColor font-changa w-full text-center" id="MyWork" >
My work</div>
<div class="overflow-x-hidden relative">
    <IntersectionObserver {element} bind:intersecting threshold="{0.4}" once="{false}">
        <div bind:this={element} class="transition-all carouselWidth relative hover_container items-center h-96 translate-x-500 justify-around mx-10" on:mouseenter="{() => setHovered(true)}" on:mouseleave="{() => setHovered(false)}">
            {#if intersecting === true}
            <div transition:fade class="transition-all h-full w-full flex gap-2">
                {#each featured as project, index}
                <div 
                    in:fly="{{duration: 400, delay: 100 * index, x: 50, opacity: 0}}"
                    class:child={hovered}
                    class="card origin-top h-full w-1/4  flex justify-center items-center transition-all duration-300 relative overflow-hidden hover:grayscale-0  rounded-md -skew-x-12 hover:w-1/3 cursor-pointer"   
                    on:click="{() => clickFeatured(index)}"    
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
    <Modal {showModal} isHighlighted={highlightModal} on:click={toggleModal} bannerImage={selectedProject.banner}>
        <main>
          <svelte:component this={selectedProject.markdown}/>
        </main>
    </Modal>
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