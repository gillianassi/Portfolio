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
  
  <div class="flex flex-col gap-4 w-screen flex items-center justify-center bg-gBackgroundColor">
    <div class=" w-screen "> 
      <div class="headerSettings flex flex-col gap-4 flex items-center justify-center">
        <Header/>
        <h1 class="font-mono text-gPrimaryColor" >This is Gillian Assi's cool website!</h1>
      </div>
    
      <Banner />
      <div class="h-screen">
      <Projects />
      </div>
      <div>
        <button on:click={toggleModal} class="text-red-100 text-gPrimaryColor"> showMessage </button>
      </div>
    </div>
  
      <Footer/>
  </div>
  

<style>
  
.headerSettings {
    height: calc(100vh * 4 / 5);
}
</style>