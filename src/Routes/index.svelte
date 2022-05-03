<script>
    import Modal from '../Helpers/Modal.svelte';
    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';
    import Banner from '../components/banner.svelte';
    import Projects from '../components/projects.svelte';

    let showModal = false; 
    let highlightModal = false;
  

    const toggleModal = () => {
    showModal = !showModal;

  
  }
  
  </script>
  
  <Modal message="Wow, what a cool website" {showModal} isHighlighted={highlightModal} on:click={toggleModal}> 
  </Modal>
  
  <main class="flex flex-col gap-4 w-screen flex items-center justify-center bg-gBackgroundColor"> 
      <div class="headerSettings flex flex-col gap-4 flex items-center justify-center h-screen">
        <Header/>
        <h1 class="font-mono text-gPrimaryColor font-change" >This is Gillian Assi's cool website!</h1>
      </div>
    
      <Banner />
      <div class="h-screen">
      <Projects />
      </div>
      <div>
        <button on:click={toggleModal} class="text-red-100 text-gPrimaryColor"> showMessage </button>
      </div>
  
      <Footer/>
  </main>
  

<style>
  
</style>