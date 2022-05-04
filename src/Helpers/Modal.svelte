<script>
    import {fly, fade} from 'svelte/transition';
    export let showModal = false;
    export let isHighlighted = false;
    const disableHighlight = () =>{
        isHighlighted = false;
    }

    const enableHighlight = () =>{
        isHighlighted = true;
    }
</script>


{#if showModal}
<div class="backdrop" class:highlighted={isHighlighted} on:click|self in:fade={{duration: 50}} out:fade={{duration: 100}}>
    <div class="modal !bg-gPurple" on:mouseenter={enableHighlight} on:mouseleave={disableHighlight} in:fly={{y: 50, delay: 100}} out:fly={{y: 50,}}>
      
        <slot />
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
    padding: 10px;
    border-radius: 10px;
    max-width: 400px;
    margin: 10% auto;;
    text-align: center;
    background: white;
  }
</style>