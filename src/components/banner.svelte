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
            image: 'https://ik.imagekit.io/gillianassi/Projects/WindWakerRemake/CellShader?ik-sdk-version=javascript-1.4.3&updatedAt=1661694632152',  
            banner: 'https://ik.imagekit.io/gillianassi/Tumbnails/Windwaker_Highlight_NYJH5okFl.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651743301508',
            title: 'The Wind Waker Remake',
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
            title: 'Plenoptic Imaging',
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
Featured Work</div>
<div class="overflow-x-hidden relative">
    <IntersectionObserver {element} bind:intersecting threshold="{0.4}" once="{false}">
        <div bind:this={element} class="transition-all carouselWidth relative hover_container items-center h-96 translate-x-500 justify-around mx-10" on:mouseenter="{() => setHovered(true)}" on:mouseleave="{() => setHovered(false)}">
            {#if intersecting === true}
            <div transition:fade class="transition-all h-full w-full flex gap-2">
                {#each featured as project, index}
                    <div 
                        in:fly="{{duration: 400, delay: 100 * index, x: 50, opacity: 0}}"
                        class:child={hovered}
                        class="   w-1/4  flex transition-all duration-300 overflow-hidden hover:grayscale-0  
                                rounded-xl -skew-x-12 hover:w-1/3 cursor-pointer project-thumbnail"   
                        on:click="{() => clickFeatured(index)}"    
                        >
                        
                        <div class="relative">
                            <img src="{project.image}" class="scale-[140%] skew-x-12 object-cover h-full" alt="{project.title}"/>
                            
                            <div class="absolute bottom-0 left-0 right-0  project-overlay">
                                <div class="p-4 h-full w-full flex flex-col text-center gap-2 bg-gBackgroundColor/60">
                                    <h4 class="font-changa text-gSecondaryColor h-auto text-xl">{project.title}</h4>
                                    
                                </div>
                            </div>
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
    
    .project-thumbnail::after {
        content: '';
        bottom: 0px;
        @apply h-0 w-full absolute transition-all duration-300 ease-in-out rounded-t-sm rotate-180 bg-gPrimaryColor z-50;
    }
    .project-thumbnail:hover.project-thumbnail::after {
        @apply h-1;
    }
    .project-thumbnail:hover .project-overlay {
        @apply opacity-100 translate-y-0;
    }
    .project-overlay {
        @apply opacity-0 transition-all translate-y-5;
    }

.child:not(:hover) {
    @apply grayscale;

}
.card::after {
    content: '';
    bottom: 5px;
    transform-origin: bottom;
    @apply h-0 absolute transition-all duration-300 ease-in-out rounded-t-sm rotate-180 bg-gPrimaryColor;
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