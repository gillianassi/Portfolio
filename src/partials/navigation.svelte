<script>
    import {Link} from 'svelte-routing';
    import {FaItchIo, FaGithub, FaLinkedin} from 'svelte-icons/fa';
</script>

<nav class="nav-gradient w-full flex justify-center text-gSecondaryColor gap-8 p-4 fixed" style="z-index: 99999;">
    <div class="max-w-screen-lg w-full flex justify-between gap-8  items-center " >
        <div>
            <Link to="/"><h1 class="font-changa font-medium text-gPrimaryColor text-2xl">Gillian Assi</h1></Link>
        </div>
        <div class="flex gap-8">
            <div class="gillian-link relative font-changa "><Link to="/">Home</Link></div>
            <div class="gillian-link relative font-changa "><Link to="/#projects">Projects</Link></div>
            <div class="gillian-link relative font-changa "><Link to="/about">About</Link></div>
            <div class="gillian-link relative font-changa "><Link to="/">Contact</Link></div>
        </div>
        <div class="socials flex gap-4">
            <span>
                <a href="https://gillianassi.itch.io/" target="_blank" rel="no-referrer"><FaItchIo/></a>
            </span>
            <span>
                <a href="https://github.com/gillianassi" target="_blank" rel="no-referrer"><FaGithub /></a>
            </span>
            <span>
                <a href="https://www.linkedin.com/in/gillianassi/" target="_blank" rel="no-referrer"><FaLinkedin/></a>
            </span>
        </div>
    </div>
</nav>


<style>
    .nav-gradient {
        background-image: linear-gradient(#252525, rgba(0, 0, 0, 0));
    }
    .gillian-link::after {
        content: '';
        height: 4px;
        @apply bg-gPrimaryColor absolute block w-0;
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