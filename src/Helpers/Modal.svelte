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
    
    $: 
       if(showModal === true){

        document.body.style.overflowY = 'hidden';
        
       }else {
        document.body.style.overflowY = 'auto';

       }
    ;
    

    
</script>


{#if showModal}
<header style="background-color:#000;color:#fff;">
  <span on:click="{() => document.getElementById('YourModalBox').style.display='none'}" class="close-button topright">&times;</span>
</header>
<div class="backdrop " class:highlighted={isHighlighted} on:click|self in:fade={{duration: 50}} out:fade={{duration: 100}}>
    <div class="modal w-4/5 max-w-5xl" on:mouseenter={enableHighlight} on:mouseleave={disableHighlight} in:fly={{y: 50, delay: 100}} out:fly={{y: 50,}}>
      {#if bannerImage}
      <header class="max-h-[400px]">
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
    @apply flex items-center ;
  }
  .modal{
    @apply max-h-[90vh] overflow-x-hidden overflow-scroll bg-white mx-auto rounded-sm shadow-md rounded-xl;

  }


body.modal-open {
    overflow-y: hidden !important;
    position: fixed !important;
  }

  .markdown-body {
    background-color: red;
  }

  .close-button {
  border: none;
  display: inline-block;
  padding: 8px 16px;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background-color: inherit;
  text-align: center;
  cursor: pointer;
  white-space: nowrap
}

.topright {
  position: absolute;
  right: 0;
  top: 0
}
</style>