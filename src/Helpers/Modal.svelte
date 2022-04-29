<script>
    export let message = "test notification";
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
<div class="backdrop " class:highlighted={isHighlighted} on:click|self>
    <div class="modal !bg-gPurple" on:mouseenter={enableHighlight} on:mouseleave={disableHighlight}>
        <p>{message}</p>
    </div>
</div>
{/if}

<style>
  .backdrop{
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0,0,0,0.8);
  }
  .modal{
    padding: 10px;
    border-radius: 10px;
    max-width: 400px;
    margin: 10% auto;;
    text-align: center;
    background: white;
  }
  .highlighted .modal{
    background: crimson;
    color: white;
  }
</style>