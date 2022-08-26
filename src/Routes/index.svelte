<script>
    import Header from '../components/Header.svelte';
    import Banner from '../components/banner.svelte';
    import Projects from '../components/projects.svelte';
</script>
   
<main class="flex flex-col gap-4 w-screen flex items-center justify-center bg-gBackgroundColor"> 
  <div class="bg-cover bg-center ">
   
    <div class=" w-screen relative h-[90vh]">
     
      <div class=" headerSettings absolute z-10 bg-gradient-to-b from-black w-full h-full">
        <Header/>
      </div>
      <img class="h-full w-full absolute left-0 top-0 -z-auto" alt="hero" src="https://ik.imagekit.io/gillianassi/Banner_W9VgRcd5u.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651747432747%22" />
    </div>
  </div>


  <Banner />
  <div class="min-h-screen">
  <Projects />
  </div>
</main>
