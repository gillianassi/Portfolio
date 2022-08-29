
<script>
// @ts-nocheck

    import Modal from '../Helpers/Modal.svelte';
    import { fly, fade } from 'svelte/transition';
    import {FaGamepad, } from 'svelte-icons/fa';
    import {IoIosPaper, IoMdCloudDownload} from 'svelte-icons/io';
    import {DiUnitySmall, DiVisualstudio, DiGithubBadge} from 'svelte-icons/di';
    import {FaVrCardboard, FaItchIo} from 'svelte-icons/fa';

    
    // Import Markdowns here:
    // project
    import MetroidMd from '../markdown/projects/metroid.md';
    import GEngineMd from '../markdown/projects/GEngine.md';
    import WindwakerMd from '../markdown/projects/WindWakerRemake.md';
    import TreeUphMd from '../markdown/projects/TreeUmph.md';
    import NotForSaleMd from '../markdown/projects/NotForSale.md';
    import RasterizerMd from '../markdown/projects/Rasterizer.md';
    import RayTracerMd from '../markdown/projects/RayTracer.md';
    import DirectX12Md from '../markdown/projects/DirectX12.md';
    // research
    import RegressionMd from '../markdown/Research/Regression.md';
    import HandPoseDetectionMd from '../markdown/Research/HandPoseDetection.md';
    import LockFreeMd from '../markdown/Research/LockFreeOrderedList.md';
    import PlenopticImagingMd from '../markdown/Research/PlenopticImaging.md';
    
    const folders = [
        {
        title: 'Projects', 
        icon: FaGamepad,
        projects: [
            {
            image: 'https://ik.imagekit.io/gillianassi/Tumbnails/SuperMetroid_Tumbnail_G5bJHpi5r.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651743301465',
            title: 'Super Metroid',
            markdown: MetroidMd,
            tags: ['C++', DiVisualstudio, IoMdCloudDownload],
            desc: 'Study Game Mechanics'
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/Tumbnails/Windwaker_Highlight_NYJH5okFl.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651743301508',
            title: 'Windwaker Remake',
            markdown: WindwakerMd,
            tags: ['C++', DiVisualstudio],
            desc: 'Graphics Programming, Overlord engine'
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/Tumbnails/Tree-Umph_Tumbnail_B2Pwf5FwR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651743301440',
            title: 'Tree-Umph',
            markdown: TreeUphMd,
            tags: ['C#', DiUnitySmall, FaItchIo, IoMdCloudDownload],
            desc: 'Game Jam, Group Project'
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/Tumbnails/BurgerTime_Tumbnail_w7yFaqUiw.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651743301767',
            title: 'G-Engine',
            markdown: GEngineMd,
            tags: ['C++', DiVisualstudio, DiGithubBadge],
            desc: 'Own C++ Game engine'
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/Projects/NotForSale/NotForSaleBanner_3ooOZQyqk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657554358362',
            title: 'Not For Sale',
            markdown: NotForSaleMd,
            tags: ['C#', DiUnitySmall, FaItchIo, IoMdCloudDownload],
            desc: 'Complete Game creation, Group Project'
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/Tumbnails/RayTracer_Tumbnail_5VHCJc57U.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651743300788',
            title: 'Multithreaded Ray Tracer',
            markdown: RayTracerMd,
            tags: ['C++', DiVisualstudio],
            desc: 'Graphics Programming'
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/Tumbnails/Rasterizer_Tumbnail_rHaD1v1HQ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651743300552',
            title: 'Software/Hardware rasterizer',
            markdown: RasterizerMd,
            tags: ['C++', DiVisualstudio],
            desc: 'Graphics Programming'
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/Projects/DirectX12/dx12-ultimate-100835986-orig_qXPOJ9-Ul.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1659845185753',
            title: 'Direct X 12 Introduction',
            markdown: DirectX12Md,
            tags: ['C++', DiVisualstudio],
            desc: 'Graphics Programming, DXII'
            }
        ]}, 
        {
        title: 'Research', 
        icon: IoIosPaper,
        projects:[
            {
            image: 'https://ik.imagekit.io/gillianassi/Research/Regression/Linear-vs-Multiple-Regression-02-min_L9CJMuYX4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661776191112',
            title: 'Regression',
            markdown: RegressionMd,
            tags: ['Matlab', DiGithubBadge],
            desc: 'Data analysis, Regression'
            },
            
            {
            image: 'https://ik.imagekit.io/gillianassi/Research/PlenopticImaging/ActionShotPlenoptic_lk4HpShtB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661777233397',
            title: 'VR for subjective evaluations of plenoptic images',
            markdown: PlenopticImagingMd,
            tags: ['C++', FaVrCardboard],
            desc: 'VR, Bachelor Thesis'
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/Research/HandTracking/HandTracking_aTsyPkxgc.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=16598485591030',
            title: 'Hand pose detection in VR',
            markdown: HandPoseDetectionMd,
            tags: [DiUnitySmall, FaVrCardboard],
            desc: 'VR, Oculus SDK, Hand Tracking'
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/Tumbnails/LockFreeLinkedList_Tumbnail_EVqB64eOC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651743300169',
            title: 'Lock Free Ordened Linked List',
            markdown: LockFreeMd,
            tags: ['C++', DiVisualstudio],
            desc: 'Lock-free Multithreading'
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
                <div class="gap-8 transition-all place-items-center
                md:flex flex-row flex-wrap ">
                    {#each folders.find(f => f.title === active).projects as project, index}
                        
                    <span class="align-top max-w-[50%] " >
                        <article in:fly={{delay: 100 * index, y: 50, opacity: 0, duration: 300}} out:fade={{duration: 0}} on:click="{toggleModal(project)}" 
                            class="aspect-video h-40 overflow-hidden relative rounded-sm shadow-md cursor-pointer project-thumbnail">
                                <div class="h-full w-full z-30 relative project-overlay">
                                    <div class="p-4 h-full w-full flex flex-col justify-end gap-2 bg-gBackgroundColor/60">
                                        <h4 class="font-changa text-gSecondaryColor h-auto text-xl">{project.title}</h4>
                                    
                                    </div>
                                </div>
                                
                                
                                <div class="absolute top-0 left-0 z-10">
                                    <img src="{project.image}" alt="{project.title}" class="w-full"/>
                                </div>
                        </article>
                        <div class="p-4 h-full flex flex-col gap-2 bg-gBackgroundColor/80  ">
                            <h4 class="font-changa text-gSecondaryColor  text-s max-w-fit">
                                {project.desc}
                            </h4>


                            <div class="text-gBackgrou  ndColor flex items-center gap-4 self-end">
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
                        
                         
                    </span>
                        
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

    body.modal-open {
  height: 100vh;
  overflow-y: hidden;
}

</style>