    
<script>
    import Header from '../components/Header.svelte';
</script>

<div class="bg-gBackgroundColor">
    <div class="flex flex-col gap-4 w-screen flex items-center justify-center ">
        <div class=" w-screen "> 
          <div class="headerSettings flex flex-col gap-4 flex items-center justify-center">
            <Header/>
            <h1 class="font-mono text-gPrimaryColor" >This is Gillian Assi's cool website!</h1>
            <div class="text-gSecondaryColor text-left"> 
                Oh, hi there! It seems like you’ve stumbled upon my About page. Now that you’re here, you might as well keep on reading.
                Let’s start by stating the obvious: As my domain name implies, my name is Gillian Assi. 
                I became an <b class="text-gPrimaryColor">electronics-ICT engineer</b> and <b class="text-gPrimaryColor">Game Developer</b> because creating functional electronics and applications are both a passion and a hobby of mine. 
                Past years, next to game implementations for <b class="text-gPrimaryColor">VR</b>, <b class="text-gPrimaryColor">Graphics</b> and <b class="text-gPrimaryColor">Engine programming</b> became the topics that intrigued me the most.  However, I will always find joy in designing game mechanics.
                
            </div>
          </div>
        </div>
      </div>

</div>



<style>
  
    .headerSettings {
        height: calc(100vh * 4 / 5);
    }
    </style>