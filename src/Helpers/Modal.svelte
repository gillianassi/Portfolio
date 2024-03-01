<script lang="ts">
    import {fly, fade} from 'svelte/transition';
    

    export let toggle;
    export let bannerImage;


    const url = new URL(window.location);
    function closeModal () {
        url.searchParams.delete('project');
        window.history.pushState({},'',  url )
        toggle = false;
    }
    
    $: 
       if(toggle === true){

        document.body.style.overflowY = 'hidden';
        
       }else {
        document.body.style.overflowY = 'auto';

       }
    ;
    

    
</script>


{#if toggle}
<header style="background-color:#000;color:#fff;">
  <span on:click="{() => document.getElementById('YourModalBox').style.display='none'}" class="close-button topright">&times;</span>
</header>
<div class="backdrop " on:click|self in:fade={{duration: 50}} out:fade={{duration: 100}}>
  <div class="modal sm:w-4/5 w-[95%] max-w-5xl" in:fly={{y: 50, delay: 100}} out:fly={{y: 50,}}>
      {#if bannerImage}
      <header class="max-h-[400px]">
        <div class="relative">

          <div class="object-cover  top-0 left-0 z-10">
            <img src="{bannerImage}" alt="Modal header" class="w-full"/>
          </div>
          
          <div class="absolute top-0 right-0 right-0  project-overlay" >
              <button type="button" on:click={closeModal} class=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
         </div>
        <div>
          
           <!-- Modal toggle -->
  
        </div>
        
      </header>
      {/if}
      <div class="p-8 rounded-t-xl bg-gLightPrimaryColor -translate-y-4">
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
    background: rgba(0, 0, 0, 0.8);
    top: 0;
    left: 0;
    z-index: 99999;
    @apply flex items-center ;
  }
  .modal{
    @apply max-h-[90vh] overflow-x-hidden overflow-scroll bg-gLightPrimaryColor mx-auto rounded-sm shadow-md rounded-xl;

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

/* width */
::-webkit-scrollbar {
    width: 10px;
}
 
/* Track */
::-webkit-scrollbar-track {
    background: #242424;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
}
 
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>