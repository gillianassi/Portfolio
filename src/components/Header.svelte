<script>
     import {Link} from 'svelte-routing';
</script>

<header >
    <div class="grid place-content-center h-[30vh] w-fit ">
        <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 rounded-r-2xl" role="alert">
            <span class="align-right relative flex h-3 w-3 absolute right-0 ">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75 "></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
              </span>
            <p class="font-bold">Note:</p>
            <p>Website is not optimized for mobile.</p>
        </div>

    </div>
    
    <div class="flex flex-col items-center pb-10">
        <div class="bg-gray-800/50 flex flex-col gap-4 pb-5 flex items-center justify-center align-middle rounded-2xl w-fit  ">
            <div class="font-mono text-4xl sm:text-5xl lg:text-6xl  text-gSecondaryColor font-changa">
                GILLIAN ASSI
            </div>
            <div class="text-center font-mono text-6xl sm:text-7xl md:text-7xl lg:text-8xl text-gSecondaryColor font-changa">
                Graphics Programmer
            </div>
    
            <div class="text-center font-mono text-m sm:text-2xl lg:text-3xl  text-gSecondaryColor font-changa">
                Graduated Electronics-ICT engineer and VR enthousiast 
                <br><br>
                <div class="bg-purple-800/70  items-center justify-center rounded-lg p-2">
                    <b class="text-purple-100 ">Looking for a game development internship during Spring 2023
                </div>
            </div>    
            <Link to="/contact">
                <button class="btn btn-color">
                    Contact
                </button>
            </Link>
        </div>
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


