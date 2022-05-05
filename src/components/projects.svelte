
<script>
// @ts-nocheck

    import Modal from '../Helpers/Modal.svelte';
    import { fly, fade } from 'svelte/transition';
    import {FaGamepad, } from 'svelte-icons/fa';
    import {IoIosPaper} from 'svelte-icons/io';
    import {DiUnitySmall} from 'svelte-icons/di';
    // Import Markdowns here:
    // project
    import MetroidMd from '../markdown/projects/metroid.md';
    import GEngineMd from '../markdown/projects/GEngine.md';
    import WindwakerMd from '../markdown/projects/WindWakerRemake.md';
    import TreeUphMd from '../markdown/projects/TreeUmph.md';
    import NotForSaleMd from '../markdown/projects/NotForSale.md';
    import RasterizerMd from '../markdown/projects/Rasterizer.md';
    import RayTracerMd from '../markdown/projects/RayTracer.md';
    // research
    import RegressionMd from '../markdown/Research/Regression.md';
    import LockFreeMd from '../markdown/Research/LockFreeOrderedList.md';
    import PlenopticImagingMd from '../markdown/Research/PlenopticImaging.md';
    
    const folders = [
        {
        title: 'Projects', 
        icon: FaGamepad,
        projects: [
            {
            image: 'https://ik.imagekit.io/gillianassi/Tumbnails/SuperMetroid_Tumbnail_G5bJHpi5r.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651743301465',
            title: 'Super Metroid Remake',
            markdown: MetroidMd,
            tags: ['Test', DiUnitySmall]
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/Tumbnails/Windwaker_Highlight_NYJH5okFl.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651743301508',
            title: 'Windwaker Remake',
            markdown: WindwakerMd,
            tags: ['Test', DiUnitySmall]
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/Tumbnails/Tree-Umph_Tumbnail_B2Pwf5FwR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651743301440',
            title: 'Tree-Umpf',
            markdown: TreeUphMd,
            tags: ['Test', DiUnitySmall]
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/Tumbnails/BurgerTime_Tumbnail_w7yFaqUiw.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651743301767',
            title: 'G-Engine',
            markdown: GEngineMd,
            tags: ['Test', DiUnitySmall]
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/Tumbnails/NotForSale_Tumbnail_e1Bs29G27.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651743300222',
            title: 'Not For Sale',
            markdown: NotForSaleMd,
            tags: ['Test', DiUnitySmall]
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/Tumbnails/Rasterizer_Tumbnail_rHaD1v1HQ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651743300552',
            title: 'Multithreaded Ray Tracer',
            markdown: RayTracerMd,
            tags: ['Test', DiUnitySmall]
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/Tumbnails/Rasterizer_Tumbnail_rHaD1v1HQ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651743300552',
            title: 'Software/Hardware rasterizer',
            markdown: RasterizerMd,
            tags: ['Test', DiUnitySmall]
            }
        ]}, 
        {
        title: 'Research', 
        icon: IoIosPaper,
        projects:[
            {
            image: 'https://ik.imagekit.io/gillianassi/Tumbnails/Regression_Tumbnail_XLl3xMPjx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651743300876',
            title: 'Regression',
            markdown: RegressionMd,
            tags: ['Test', DiUnitySmall]
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/Tumbnails/LockFreeLinkedList_Tumbnail_EVqB64eOC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651743300169',
            title: 'Lock Free Ordened Linked List',
            markdown: LockFreeMd,
            tags: ['Test', DiUnitySmall]
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/Tumbnails/PlenopticImaging_Tumbnail_gmMXypmBy.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651743300347',
            title: 'Plenoptic Images in VR',
            markdown: PlenopticImagingMd,
            tags: ['Test', DiUnitySmall]
            }
        ]}];

    $: active = "Projects";
    $: showModal = false; 
    let highlightModal = false;
    $: selectedProject = {};

    const toggleModal = (project) => {
        if(showModal === false) selectedProject = project;
        showModal = !showModal;
    }
    
</script>

<div class="flex flex-col items-center mt-12" id="projects">
    <div class="w-full max-w-5xl mx-10 flex-shrink flex-wrap" >
        <div class="w-full bg-slate-800 rounded-t-sm over-flow">
            <ul class="flex ">
                {#each folders as {title, icon: Icon}}
                    <li on:click="{() => active = title}" class="p-4 text-gSecondaryColor cursor-pointer rounded-t-sm items-center shadow-sm transition font-changa flex gap-4 hover:bg-slate-600 " class:bg-slate-700="{active === title}">
                        <span class="h-4"><Icon /></span>
                        <p>{title}</p>
                    </li>
                {/each}
            </ul>
        </div>
    
        <div class="bg-gSecondaryColor p-10 rounded-b-sm shadow-md overflow-hidden transition-all duration-500">
            {#key active}
            <div class="container mx-auto">
                <div class=" flex flex-col lg:flex lg:flex-row lg:flex-wrap gap-8 transition-all place-items-center sm:grid sm:grid-cols-2">
                    {#each folders.find(f => f.title === active).projects as project, index}
                        <article in:fly={{delay: 100 * index, y: 50, opacity: 0, duration: 300}} out:fade={{duration: 0}} on:click="{toggleModal(project)}" 
                        class="aspect-video h-40 overflow-hidden relative rounded-sm shadow-md cursor-pointer project-thumbnail">
                            <div class="h-full w-full z-30 relative project-overlay">
                                <div class="p-4 h-full w-full flex flex-col justify-end gap-2 bg-gBackgroundColor/60">
                                    <h4 class="font-changa text-gSecondaryColor flex h-auto text-xl">{project.title}</h4>
                                    <div class="text-gBackgroundColor flex items-center gap-4 self-end">
                                        {#each project.tags as tag}
                                        {#if typeof tag === 'string' || tag instanceof String} 
                                            <p class="px-2 py-1 font-changa font-medium rounded-sm text-xs bg-gSecondaryColor">{tag}</p>
                                        {:else}
                                        <span class="h-6 text-gSecondaryColor">
                                            <svelte:component this={tag} />
                                        </span>
                                        {/if}
                                    {/each}
                                    </div>
                                 
                                </div>
                            </div>
                            
                            <div class="absolute top-0 left-0 z-10">
                                <img src="{project.image}" alt="{project.title}" class="w-full"/>
                            </div>
                        </article>
                    {/each}
                </div>
            </div>
            {/key} 
        </div>
    </div>
</div>
<Modal {showModal} isHighlighted={highlightModal} on:click={toggleModal} bannerImage={selectedProject.image}> 
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
</style>