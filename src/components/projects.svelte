<div class="flex flex-col items-center">
    <div>
        <ul class="flex ">
            {#each folders as folder}
                <li on:click="{() => active = folder.title}" class="p-4 text-gSecondaryColor " >{folder.title}</li>
            {/each}
        </ul>
    </div>
    <div class="bg-gSecondaryColor p-10 rounded-sm shadow-md">
      
        
                {#key active}
                    {#each folders.find(f => f.title === active).projects as category, index}
                        <article transition:scale={{delay: 100 * index}}>
                            {category}
                        </article>
                    {/each}
                {/key}
       
    </div>
</div>

<script>
	import { scale } from 'svelte/transition';
    $: active = "Games";
    const folders = [{title: 'Games', projects: ['Metroid', 'Zelda']}, {title: 'Research', projects:['memes', 'Engine', 'Gundam']}]
</script>