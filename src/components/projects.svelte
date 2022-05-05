
<script>
// @ts-nocheck

    import Modal from '../Helpers/Modal.svelte';
    import { fly, fade } from 'svelte/transition';
    import {FaGamepad} from 'svelte-icons/fa';
    import {IoIosPaper} from 'svelte-icons/io';
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
            image: 'https://ik.imagekit.io/gillianassi/SuperMetroid/SuperMetroidBanner_F_V0ctgIF.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651704984232',
            title: 'Super Metroid Remake',
            markdown: MetroidMd,
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/Windwaker_Featured_ZqO4utNOd.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651599940008',
            title: 'Windwaker Remake',
            markdown: WindwakerMd,
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/Tree-Umph_Featured_CO_w78-xj.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651599940668',
            title: 'Tree-Umpf',
            markdown: TreeUphMd,
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/Projects/G-Engine/BurgerTimeGamePlay_k1t5EY_50.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651708378311',
            title: 'G-Engine',
            markdown: GEngineMd,
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/NotForSale/NotForSaleBanner_ZgQcGUNfi.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651695715223',
            title: 'Not For Sale',
            markdown: NotForSaleMd,
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/Projects/Bunny_ExfzTuTfG.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651708769668',
            title: 'Multithreaded Ray Tracer',
            markdown: RayTracerMd,
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/Projects/Rasterizer_GaSN-lGXc.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651708566474',
            title: 'Software/Hardware rasterizer',
            markdown: RasterizerMd,
            }
        ]}, 
        {
        title: 'Research', 
        icon: IoIosPaper,
        projects:[
            {
            image: 'https://ik.imagekit.io/gillianassi/Regression/RegulisedLogisticRegression_7r6x1Qkpy.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651693074086',
            title: 'Regression',
            markdown: RegressionMd,
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/Research/LockFreeLinkedList/LockFreeLinkedList_yJiB4lcRw.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651707946892',
            title: 'Lock Free Ordened Linked List',
            markdown: LockFreeMd,
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/Research/PlenopticImaging/PlenopticImaging_AMHpVsOfU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651707817712',
            title: 'Plenoptic Images in VR',
            markdown: PlenopticImagingMd,
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

<div class="flex flex-col items-center mt-4" id="projects">
    <div class="w-4/5" >
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
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all place-items-center">
                    {#each folders.find(f => f.title === active).projects as category, index}
                        <article in:fly={{delay: 100 * index, y: 50, opacity: 0, duration: 300}} out:fade={{duration: 0}} on:click="{toggleModal(category)}">
                            {category.title}
                            <img src="{category.image}" alt="{category.title}" class="h-64 w-64"/>
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