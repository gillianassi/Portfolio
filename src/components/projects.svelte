
<script>
// @ts-nocheck
    import Modal from '../Helpers/Modal.svelte';
    import { fly, fade } from 'svelte/transition';

    import { onMount } from 'svelte';
    
    import {projects as folders} from '../projects.ts';
    
    

    $: active = "Projects";
    $: showModal = false; 
    let highlightModal = false;
    $: selectedProject = {};
    const url = new URL(window.location);

    const toggleModal = (project) => {
        
        if(showModal === false) {
            selectedProject = project;
            updateProjectParam(project.title);
        } else {
            updateProjectParam();
        }
       
        showModal = !showModal;
    }
    // finds the right project corresponding to a title(id)
    function findProject (projectId) {
        const allProjects = folders.reduce((acc, next ) => {
            next.projects.forEach((prj => acc.push(prj)));
            return acc;
        }, [])
        return allProjects.find((prj) => prj.title === projectId);
    }

    function updateProjectParam (value) {
        url.searchParams.delete('project');
        if(value) {
            url.searchParams.set('project', value.replaceAll(' ', '%'));
        }
        window.history.pushState({},'',  url )
    }

    onMount(() => {
        if(url.searchParams.get('project') !== null ) {
            let searchParamProject = findProject(url.searchParams.get('project').replaceAll('%', ' '));
            if(searchParamProject) {
                toggleModal(searchParamProject);
                document.getElementById('projects').scrollIntoView();
            }
        }
    })
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
    
        <div class=" bg-gSecondaryColor p-10 rounded-b-sm shadow-md overflow-hidden transition-all duration-500">
            {#key active}
            <div class="container mx-auto ">
                <div class="gap-8 transition-all place-items-center
                md:flex flex-row flex-wrap ">
                    {#each folders.find(f => f.title === active).projects as project, index}
                        
                    <span class="align-top w-72 lg:pr-0 pr-6 " >
                        <div class="">
                            <article in:fly={{delay: 100 * index, y: 50, opacity: 0, duration: 300}} out:fade={{duration: 0}} on:click="{toggleModal(project)}" 
                            class="w-fit  overflow-hidden relative rounded-sm shadow-md cursor-pointer project-thumbnail">
                                
                             <div class="relative">

                                 <div class="object-cover  top-0 left-0 z-10">
                                     <img src="{project.image}" alt="{project.title}" class="w-fit"/>
                                 </div>
                                 
                                 <div class="absolute bottom-0 left-0 right-0  project-overlay">
                                    <div class="p-4 h-full w-full flex flex-col text-center gap-2 bg-gBackgroundColor/60">
                                        <h4 class="font-changa text-gSecondaryColor h-auto text-xl">{project.title}</h4>
                                        
                                    </div>
                                </div>
                             </div>

                        </article>
                        </div>
                        
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
<Modal  bind:toggle={showModal} isHighlighted={highlightModal} on:click={toggleModal} bannerImage={selectedProject.banner ?? selectedProject.image}> 
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