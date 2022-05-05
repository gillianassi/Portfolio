<script>
    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';
    import Banner from '../components/banner.svelte';
    import Projects from '../components/projects.svelte';

  
  </script>
  

  <main class="flex flex-col gap-4 w-screen flex items-center justify-center bg-gBackgroundColor"> 
    
      <div class="headerSettings flex flex-col gap-4 flex items-center justify-center h-screen">

        <Header/>
        <h1 class="font-mono text-gPrimaryColor font-change" >Gillian Assi - Graphics Programmer and Engine programmer</h1>
      </div>
    
      <Banner />
      <div class="min-h-screen">
      <Projects />
      </div>


      <Footer/>
  </main>
  

<style>
  
</style>