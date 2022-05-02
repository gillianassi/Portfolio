<div class="flex flex-col items-center">
    <div>
        <ul class="flex ">
            {#each folders as folder}
                <li on:click="{() => active = folder.title}" class="p-4 text-gSecondaryColor cursor-pointer" >{folder.title}</li>
            {/each}
        </ul>
    </div>
   
    <div class="bg-gSecondaryColor p-10 rounded-sm shadow-md overflow-hidden transition-all duration-500 w-4/5">
        {#key active}
        <div class="grid grid-cols-2 gap-8 transition-all place-items-center">
        {#each folders.find(f => f.title === active).projects as category, index}
            <article in:fly={{delay: 100 * index, y: 50, opacity: 0, duration: 300}} out:fade={{duration: 0}}>
                {category}
            </article>
        {/each}
        </div>
        {/key} 
    </div>
   
</div>

<script>
	import { fly, fade } from 'svelte/transition';
    $: active = "Games";
    const folders = [{title: 'Games', projects: ['Metroid', 'Zelda']}, {title: 'Research', projects:['memes', 'Engine', 'Gundam']}];
</script>