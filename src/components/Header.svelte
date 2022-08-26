<script>
     import {Link} from 'svelte-routing';
</script>

<header >
    <div class="grid grid-cols-1 gap-4 place-content-center h-[30vh] w-fit">
        <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 " role="alert">
            <span class="align-right relative flex h-3 w-3 absolute right-0 ">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75 "></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
              </span>
            <p class="font-bold">Note:</p>
            <p>This website is still under development</p>
        </div>

    </div>

    <div class="flex flex-col gap-4 flex items-center justify-center align-middle">
        <div class="font-mono text-4xl sm:text-5xl lg:text-6xl pl-10 text-gSecondaryColor font-changa">
            GILLIAN ASSI
        </div>
        <div class="text-center font-mono text-6xl sm:text-7xl md:text-8xl lg:text-8xl pl-10 text-gSecondaryColor font-changa">
            Graphics Programmer
        </div>

        <div class="text-center font-mono text-m sm:text-2xl lg:text-3xl pl-10 text-gSecondaryColor font-changa">
            
            Electronics-ICT engineer and VR enthousiast 
            <br><br><br><br>
            <b>Looking for an internship during Spring 2023</b>
        </div>    
        <br>
        <Link to="/contact">
            <button class="btn btn-blue">
                Contact
            </button>
        </Link>
          
    </div>
    

</header>

<style>
    img{
        max-width: 180px;
    }
    .btn {
        @apply font-bold py-3 px-5 rounded;
    }
  .btn-blue {
        @apply bg-purple-600 text-purple-100;
    }
  .btn-blue:hover {
        @apply bg-purple-900;
    }
</style>


