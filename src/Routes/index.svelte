<script>
    import Header from '../components/Header.svelte';
    import Banner from '../components/banner.svelte';
    import Projects from '../components/projects.svelte';
  
</script>
   
<main class="flex flex-col  w-screen flex items-center justify-center bg-gBackgroundColor"> 
  <div class=" bg-center">
   
    <div class=" w-screen relative  ">
      
      <div class="relative headerSettings z-20 bg-gradient-to-b from-black w-full h-full">
        <Header/>
      </div>
      <div>
        <img class="absolute  left-0 top-0 object-cover h-full  lg:w-full " alt="hero" src="https://ik.imagekit.io/gillianassi/Projects/Metro%20Awakening%20VR/VG/VGMetroAwakeningCover_9q7CoZnr-.png?updatedAt=1709247266961" />
      </div>
      
    </div>
  </div>


  <Banner />
  <div class="min-h-screen">
  <Projects />
  </div>

  <style>
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
</main>


