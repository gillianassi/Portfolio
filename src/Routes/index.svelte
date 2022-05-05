<script>
    import Header from '../components/Header.svelte';
    import Banner from '../components/banner.svelte';
    import Projects from '../components/projects.svelte';
</script>
   
<main class="flex flex-col gap-4 w-screen flex items-center justify-center bg-gBackgroundColor"> 
  <div class="bg-cover bg-center  bg-[url('https://ik.imagekit.io/gillianassi/SciFi_Banner_yXDQnV0cC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651692031432')]">
    <div class="bg-gradient-to-b from-black w-screen  h-[90vh]">
      <div class=" headerSettings  h-[90vh]">
        <Header/>
      </div>
    </div>

  </div>


  <Banner />
  <div class="min-h-screen">
  <Projects />
  </div>
</main>
