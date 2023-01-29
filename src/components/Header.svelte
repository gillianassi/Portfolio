<script>
     import {Link} from 'svelte-routing';
     import FaCaretDown from 'svelte-icons/fa/FaCaretDown.svelte'

    function scrollToProjects() {
        let workEl =  document.getElementById('MyWork');
        const offset = 100;

        let workElPos = workEl.getBoundingClientRect().top;

        window.scrollTo({
            behavior: 'smooth', 
            top: workElPos + window.pageYOffset - offset
        });
    }
</script>

<header class="h-screen relative">
    <div class="absolute grid place-content-center h-[30vh] w-fit  md:opacity-0 pt-10 md:hidden" >
        <div class="bg-gSecondaryColor border-l-4 border-purple-500 text-gBackgroundColor p-4 rounded-r-2xl" role="alert">
            <span class="float-right relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75 "></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
              </span>
            <p class="font-bold">Note:</p>
            <p>Website is not optimally displayed on mobile.</p>
        </div>

    </div>
    
    <div class="flex flex-col items-center  h-full">
        <div class="bg-gray-800/50 flex flex-col gap-4 pb-5 flex items-center justify-center align-middle rounded-2xl w-full h-full ">
          
            <div class="text-center font-mono text-6xl sm:text-7xl md:text-7xl lg:text-8xl text-gSecondaryColor font-changa">
                Graphics Programmer
            </div>
    
            <div class="text-center font-mono text-m sm:text-2xl lg:text-3xl  text-gSecondaryColor font-changa">
                Graduated Electronics-ICT engineer and VR enthousiast 
                <br><br>
                <!-- <div class="bg-purple-50/90 items-center justify-center rounded-lg p-4">
                    <b class="text-purple-500 ">Looking for a game development internship during Spring 2023
                </div> -->
            </div>    
            <Link to="/contact">
                <button class="btn btn-color">
                    Contact
                </button>
            </Link>
        </div>
    </div>
    <div class="relative flex flex-col items-center bottom-[80px] md:bottom-[100px] lg:bottom-[120px]  h-28  md:h-36 lg:h-44">
        <button class="h-full  text-gSecondaryColor/70 transition hover:text-gSecondaryColor/90 motion-safe:animate-bounce delay-50" on:click="{scrollToProjects}">
            <FaCaretDown class="h-full"/>
        </button>
    </div>

</header>

<style>
    img{
        max-width: 180px;
    }
    .btn {
        @apply font-bold py-3 px-5 rounded;
    }
  .btn-color {
        @apply bg-purple-600 text-purple-100;
    }
  .btn-blue:hover {
        @apply bg-purple-900;
    }
</style>


