
<script>
// @ts-nocheck

    import Modal from '../Helpers/Modal.svelte';
    import { fly, fade } from 'svelte/transition';
    import {FaGamepad} from 'svelte-icons/fa';
    import {IoIosPaper} from 'svelte-icons/io';
    // Import Markdowns here:
    import * as Test from '../markdown/projects/test.md';
    import * as MetroidMd from '../markdown/projects/metroid.md';
    
    const folders = [
        {
        title: 'Projects', 
        icon: FaGamepad,
        projects: [
            {
            image: 'https://ik.imagekit.io/gillianassi/SuperMetroid_Featured_LYXt21X6u.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651599940563',
            title: 'Super Metroid Remake',
            markdown: MetroidMd,
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/SuperMetroid_Featured_LYXt21X6u.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651599940563',
            title: 'Windwaker Remake',
            markdown: Test,
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/SuperMetroid_Featured_LYXt21X6u.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651599940563g',
            title: 'Tree-Umpf',
            markdown: Test,
            }
        ]}, 
        {
        title: 'Research', 
        icon: IoIosPaper,
        projects:[
            {
            image: 'https://ik.imagekit.io/gillianassi/SuperMetroid_Featured_LYXt21X6u.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651599940563',
            title: 'Regression',
            markdown: Test,
            },
            {
            image: '/images/testLogo.png',
            title: 'Custom Engine',
            markdown: Test,
            },
            {
            image: 'https://ik.imagekit.io/gillianassi/SuperMetroid_Featured_LYXt21X6u.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651599940563g',
            title: 'Lock free ordered List',
            markdown: Test,
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

<div class="flex flex-col items-center " id="projects">
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
        {@html selectedProject.markdown.html}
    </main>
</Modal>