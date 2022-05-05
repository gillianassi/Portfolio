<script>
    import {fly, fade} from 'svelte/transition';
    export let showModal = false;
    export let isHighlighted = false;
    export let bannerImage;
    const disableHighlight = () =>{
        isHighlighted = false;
    }

    const enableHighlight = () =>{
        isHighlighted = true;
    }

    
</script>


{#if showModal}
<div class="backdrop " class:highlighted={isHighlighted} on:click|self in:fade={{duration: 50}} out:fade={{duration: 100}}>
    <div class="modal w-4/5 max-w-5xl" on:mouseenter={enableHighlight} on:mouseleave={disableHighlight} in:fly={{y: 50, delay: 100}} out:fly={{y: 50,}}>
      {#if bannerImage}
      <header class="max-h-[400px] overflow-hidden ">
        <img src="{bannerImage}" alt="Modal header" class="w-full"/>
      </header>
      {/if}
      <div class="p-8 rounded-t-xl bg-white -translate-y-4">
        <slot />
      </div>
      
    </div>
</div>
{/if}

<style>
  .backdrop{
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0,0,0,0.8);
    top: 0;
    left: 0;
    z-index: 99999;
    @apply flex items-center;
  }
  .modal{
    @apply max-h-[80vh] overflow-x-hidden overflow-scroll  overflow-hidden bg-white mx-auto rounded-sm shadow-md rounded-xl;
    
  }

  .markdown-body {
    background-color: red;
  }
</style>