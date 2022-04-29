<script>
  import  Modal from './Helpers/Modal.svelte';
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  let showModal = false; 
  let highlightModal = false;


  const toggleModal = () => {
  showModal = !showModal;
}

</script>

<Modal message="Wow, what a cool website" {showModal} isHighlighted={highlightModal} on:click={toggleModal}> 
</Modal>

<main style="background-color: #252525;" class="flex flex-col gap-4 h-screen w-screen flex items-center justify-center">
  <Header />
  <body class="flex flex-col gap-4 h-screen w-screen flex items-center justify-center"> 
    <div>
      <h1 class="font-mono" style="color: #EEE7F2;">This is Gillian Assi's cool website!</h1>
    </div>
    <div>
      <button on:click={toggleModal} > showMessage </button>
    </div>
  </body>


    <Footer/>
</main>




<style global>
  @tailwind utilities;
  @tailwind components;
  @tailwind base;
</style>
  