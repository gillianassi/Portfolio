<script> 
    import { fly, fade } from "svelte/transition";
    import Modal from '../Helpers/Modal.svelte';
    import IntersectionObserver from "svelte-intersection-observer";
    // @ts-ignore
    import {projects} from '../projects.ts';


    let element;
    let intersecting;
    let highlightModal = false;
    $: hovered = false;
    $: showModal = false; 
    $: selectedProject = {} ;
    $: url = new URL(window.location.toString());
    const featured = projects.reduce((acc, {projects}) => {
         projects.forEach((prj) => prj.featured && acc.push(prj))
         return acc;
    }, [])

    const setHovered = (val) => hovered = val;
    
   
    const toggleModal = (project) => {
       if(showModal === false) {
            selectedProject = project;
            updateProjectParam(project.title);
        } else {
            updateProjectParam();
        }
        showModal = !showModal;
    }

    function updateProjectParam (value = undefined) {
        url.searchParams.delete('project');
        if(value) {
            url.searchParams.set('project', value.replaceAll(' ', '%'));
        }
        window.history.pushState({},'',  url )
    }

</script>

<section id="MyWork" >
    <h2  class="font-mono lg:text-7xl sm:text-6xl text-5xl py-5 text-gSecondaryColor font-changa w-full text-center">Featured Work</h2>
    <div class="overflow-x-hidden relative">
        <IntersectionObserver {element} bind:intersecting threshold="{0.4}" once="{false}">
            <div bind:this={element} class="transition-all carouselWidth relative hover_container items-center lg:h-96 sm:h-72 h-40 justify-around" on:mouseenter="{() => setHovered(true)}" on:mouseleave="{() => setHovered(false)}">
                {#if intersecting === true}
                <div transition:fade class="transition-all h-full w-full flex gap-2">
                    {#each featured as project, index}
                        <div 
                            in:fly="{{duration: 400, delay: 100 * index, x: 50, opacity: 0}}"
                            class:child={hovered}
                            class="   w-1/4  flex transition-all duration-300 overflow-hidden hover:grayscale-0  
                                    rounded-xl -skew-x-12 hover:w-1/3 cursor-pointer project-thumbnail"   
                            on:click="{() => toggleModal(project)}"    
                            >
                            
                            <div class="relative">
                                <img src="{project.image}" class="scale-[140%] skew-x-12 object-cover h-full" alt="{project.title}"/>
                                
                                <div class="absolute bottom-0 left-0 right-0  project-overlay">
                                    <div class="p-4 h-full w-full flex flex-col text-center gap-2 bg-gBackgroundColor/60 rounded-xl">
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
    </div>
</section>
 <Modal bind:toggle={showModal} isHighlighted={highlightModal} on:click={toggleModal} bannerImage={selectedProject.banner}>
    <main>
        <svelte:component this={selectedProject.markdown}/>
    </main>
</Modal>

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

.carouselWidth {
    width: calc(100vw + 100px);
    transform: translateX(-50%);
    left:50%;
}
</style>