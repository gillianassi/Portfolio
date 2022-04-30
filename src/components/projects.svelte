<div class="flex flex-col items-center">
    <div>
        <ul class="flex ">
            {#each folders as folder}
                <li on:click="{() => active = folder}" class="p-4 text-gSecondaryColor " >{folder}</li>
            {/each}
        </ul>
    </div>
    <div class="bg-white">
        {#if active}
            <div transition:fade>
                {active}
            </div>
        {/if}
    </div>
</div>

<script>
	import { fade } from 'svelte/transition';
    $: active = "Games";
    const folders = ['Games', 'Research']
</script>