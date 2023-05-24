<script>
    import {Link} from 'svelte-routing';
    import {FaItchIo, FaGithub, FaLinkedin} from 'svelte-icons/fa';

  
</script>
<!-- Navbar goes here -->
<nav id="test" class="navbar nav-gradient nav-filled  flex flex-wrap justify-between items-center mx-auto " style="z-index: 99999;">
        <div class="max-w-screen-lg w-full flex justify-between gap-8  items-center">
            <div class="flex space-x-10">
                <!-- Website Logo -->
                <div>
                    <Link to="/"><h1 class="font-changa font-medium text-gPrimaryColor text-2xl">Gillian Assi</h1></Link>
                </div>
                
            </div>
            <!-- Primary Navbar items -->
            <div class="hidden md:flex items-center flex gap-16">
                <div class="gillian-link relative font-changa "><Link to="/">Home</Link></div>
                <div class="gillian-link relative font-changa "><Link to="/about">About</Link></div>
                <div class="gillian-link relative font-changa "><Link to="/contact">Contact</Link></div>
            </div>
            <!-- Secondary Navbar items -->
            <div class="socials flex gap-4">
                <span>
                    <a href="https://github.com/gillianassi" target="_blank" rel="no-referrer"><FaGithub /></a>
                </span>
                <span>
                    <a href="https://www.linkedin.com/in/gillianassi/" target="_blank" rel="no-referrer"><FaLinkedin/></a>
                </span>
                <span>
                    <a href="https://gillianassi.itch.io/" target="_blank" rel="no-referrer"><FaItchIo/></a>
                </span>
            </div>
            <!-- Mobile menu button -->
            <div class="md:hidden flex items-center">
                <button class="outline-none mobile-menu-button">
                <svg class=" w-6 h-6 text-gray-500 hover:text-gPrimaryColor "
                    x-show="!showMenu"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            </div>
    </div>
    <!-- mobile menu -->
    <div class="hidden mobile-menu  w-full">
        <ul class="mobile-menu-selection flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white bg-gray-800 md:bg-gray-900 border-gray-700">
            <li class="active block"><Link to="/"><div class="gillian-link block  w-full relative font-changa px-2 py-4">Home</div></Link></li>
            <li><Link to="/about"><div class="gillian-link relative font-changa px-2 py-4">About</div></Link></li>
            <li><Link to="/contact"><div class="gillian-link relative font-changa px-2 py-4">Contact</div></Link></li>
        </ul>
    </div>
    <script>
        const btn = document.querySelector("button.mobile-menu-button");
        const menu = document.querySelector(".mobile-menu");
        const nav =  document.querySelector(".navbar");
        
        // handle mobile nav clicks
        btn.addEventListener("click", () => {
            setTimeout(function(){

            menu.classList.toggle("hidden");
            }, 100); 
        });

        menu.addEventListener("click", () => {
            
            
            setTimeout(function(){

                menu.classList.toggle("hidden");
            }, 180); 
            
        });
        
                
        // Attaching the event listener function to window's resize event
        window.addEventListener("resize", HandleNavigationBar);
        // do it the first time
        if (window.innerWidth >= 768){
            nav.classList.remove('nav-filled'); 
        }
        else{
            nav.classList.remove('nav-gradient'); 
        }
                
        window.onscroll = () => {
            if (window.innerWidth >= 768){
            const nav =  document.querySelector(".navbar");
            if(this.scrollY <= 100) 
                nav.classList.add('nav-gradient'), nav.classList.remove('nav-filled'); 
            else 
            nav.classList.add('nav-filled'), nav.classList.remove('nav-gradient');
            }
        };

                
        function HandleNavigationBar() {
            if (window.innerWidth >= 768){
                nav.classList.add('nav-gradient'), nav.classList.remove('nav-filled'); 
            }
            else{
                nav.classList.add('nav-filled'), nav.classList.remove('nav-gradient');
            }
        };
                
			</script>
</nav>



<style>
    .nav-gradient {
        background-image: linear-gradient(#252525, rgba(0, 0, 0, 0));
        @apply w-full justify-center text-gSecondaryColor gap-8 p-4 fixed ;
        
    }

    .nav-filled {
        background-image: linear-gradient(#252525, rgba(0, 0, 0, 0.9));
        @apply   w-full justify-center text-gSecondaryColor gap-8 p-4 fixed border-b border-gray-200 ;
    }

    .nav-title {
        @apply block py-2 pr-4 pl-3 text-gSecondaryColor;
    }


    .gillian-link::after {
        content: '';
        height: 4px;
        @apply bg-gPrimaryColor absolute block w-0 ;
        transition: 200ms ease-in-out;
    }  

    .gillian-link:hover.gillian-link::after {
       @apply w-full;
    }

    .socials span{
        height: 24px;
        @apply text-gSecondaryColor transition-all;
    }
    .socials span:hover {
       @apply text-gPrimaryColor;
    }
</style>