    
<script>
    import Header from '../components/Header.svelte';
</script>

<div class="bg-gBackgroundColor h-[100vh]">
    <div class="flex flex-col h-full gap-4 w-screen flex items-center justify-center ">

      <div class="content flex flex-wrap py-2 gap-2 m-auto w-full w-4/5 bg-gSecondaryColor rounded-sm">
        <div class="item-body px-1 sm:w-1/2">
          <div class="font-mono text-4xl sm:text-5xl lg:text-6xl pl-10  font-changa">
            GILLIAN ASSI
        </div>
          <div>
            Oh, hi there! It seems like you’ve stumbled upon my About page. Now that you’re here, you might as well keep on reading.
            Let’s start by stating the obvious: As my domain name implies, my name is Gillian Assi. 
            I became an <b class="text-gPrimaryColor">electronics-ICT engineer</b> and <b class="text-gPrimaryColor">Game Developer</b> because creating functional electronics and applications are both a passion and a hobby of mine. 
            Past years, next to game implementations for <b class="text-gPrimaryColor">VR</b>, <b class="text-gPrimaryColor">Graphics</b> and <b class="text-gPrimaryColor">Engine programming</b> became the topics that intrigued me the most.  However, I will always find joy in designing game mechanics.
          </div>

        </div>
        <img class="h-96 w-flex item-body px-2 content-center" src="https://ik.imagekit.io/gillianassi/ProfilePicture_K4y6avmEt.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651757031924" alt="Profile"/>
      </div>

      </div>
      <div>
      </div>  

</div>



<style>
  
    .headerSettings {
        height: calc(100vh * 4 / 5);
    }
    </style>