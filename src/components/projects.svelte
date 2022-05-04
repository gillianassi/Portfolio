
<script>
// @ts-nocheck

    import Modal from '../Helpers/Modal.svelte';
    import { fly, fade } from 'svelte/transition';
    // Import Markdowns here:
    import * as Test from '../markdown/projects/test.md';
    import * as MetroidMd from '../markdown/projects/metroid.md';
    
    const folders = [
        {title: 'Games', 
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
        {title: 'Research', 
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

    $: active = "Games";
    $: showModal = false; 
    $: markdown = Test.test;
    let highlightModal = false;
  

    const toggleModal = (project) => {
        if(showModal === false) markdown = project.markdown.html;
        showModal = !showModal;
    }

</script>

<div class="flex flex-col items-center" id="projects">
    <div>
        <ul class="flex ">
            {#each folders as folder}
                <li on:click="{() => active = folder.title}" class="p-4 text-gSecondaryColor cursor-pointer" >{folder.title}</li>
            {/each}
        </ul>
    </div>
   
    <div class="bg-gSecondaryColor p-10 rounded-sm shadow-md overflow-hidden transition-all duration-500 w-4/5">
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
<Modal {showModal} isHighlighted={highlightModal} on:click={toggleModal}> 
    {@html markdown}
</Modal>