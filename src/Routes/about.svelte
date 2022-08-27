    
<script>
    import Header from '../components/Header.svelte';
</script>

<div class="bg-gBackgroundColor h-[90vh]">
    <div class="flex flex-col h-full gap-4 w-screen flex items-center justify-center ">

      <div class="content flex flex-rox justify-center flex-wrap py-2 gap-2 m-auto max-w-screen-lg w-auto w-4/5 max-w-[90vw] bg-gSecondaryColor rounded-sm mx-10 ">
        <div class="item-body p-4 max-w-prose" >
          <h1 class="title text-gPrimaryColor">
            GILLIAN ASSI
          </h1>
          <p class="text-justify p-3 w-prose">
            Oh, hi there! It seems like you’ve stumbled upon my About page. Now that you’re here, you might as well keep on reading.
            Let’s start by stating the obvious: As my domain name implies, my name is Gillian Assi. 
            I became an <b class="text-gPrimaryColor">electronics-ICT engineer</b> and <b class="text-gPrimaryColor">Game Developer</b> because creating functional electronics and applications are both a passion and a hobby of mine. 
            Past years, next to game implementations for <b class="text-gPrimaryColor">VR</b>, <b class="text-gPrimaryColor">Graphics</b> and <b class="text-gPrimaryColor">Engine programming</b> became the topics that intrigued me the most.  However, I will always find joy in designing game mechanics.
          </p>

        </div>
        <div class="self-center">
          <img class="h-96 w-flex item-body px-2 content-center" src="https://ik.imagekit.io/gillianassi/ProfilePicture_K4y6avmEt.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651757031924" alt="Profile"/>
        </div>
      </div>
    </div>
</div>
<div class="bg-neutral-900 h-[100vh]">

  
  <div class="grid-container text-purple-200 pt-10">
    <div class="">
      <div id="Education" class="pt-10">
        
        <h1 class="title pb-5">
          Education
        </h1>
          
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg pl-2">
          <table class="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr class="">
                <th scope="col" class="py-3 px-6">Degree</th>
                <th scope="col" class="py-3 px-6">Specialisation</th>
                <th scope="col" class="py-3 px-6">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td>Bachelor degree <b class="text-gPrimaryColor">Digital Arts & Entertainment</b></td>
                <td>Game Development</td>
                <td>2020 - now</td>
              </tr>
              <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                <td>Master of <b class="text-gPrimaryColor">Electronics and ICT Engineering Technology</b></td>
                <td>Information and Communication Techniques</td>
                <td>2019 – 2020</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td>Bachelor of <b class="text-gPrimaryColor">Engineering Technology</b></td>
                <td>Specialization: Electronics-ICT</td>
                <td>2016 – 2019</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="ProgrammingLanguages" class="pt-10">
        <h1 class="title">
          Learned Programming Languages
        </h1>
      </div>
     
      <div id="Technologies" class="pt-10">
        <h1 class="title">
          Technologies and software
        </h1>
      </div>
    </div>
    <div class="bg-black min-w-full rounded-lg pl-6 pt-10">
      <h1 class="title ">
        Experience
      </h1>
      Intern electronics Engineer (R&D)
Specific tasks:
	» Writing test code for IoT-devices
		o Calibration techniques
		o Optimization
		o Process management
	» Energy management van IoT-devices
	» Implementing new features for IoT-devices
	» Documenting code
    <div>

    </div>
    </div>
  </div>
</div>



<style>
  
    .headerSettings {
        height: calc(100vh * 4 / 5);
    }
    .grid-container{
        
    }


    .grid-container-listing{
        
        display: inline-grid;
        grid-template-columns: 80% 20%;
        @apply grid-rows-3;
    }

    .title{
      @apply underline underline-offset-8 decoration-purple-800 text-4xl font-changa pl-6;
    }

    @media screen and (min-width: 900px){
      
    .grid-container{
        
        display: grid;
        grid-template-columns: 50% 50%;
    }
    }
    
</style>