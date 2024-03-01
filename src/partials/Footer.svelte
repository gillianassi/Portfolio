<footer class="py-8 bg-gSecondaryColor text-gBackgroundColor relative">
    <div class="flex flex-col max-w-5xl w-4/5 mx-auto">
        <div class="grid grid-cols-3 pt-8">
            <div>
                <Link to="/"><h4 class="name">Gillian Assi</h4></Link>
                <p class="font-changa text-sm">Graphics Programmer</p>
                <ul class="flex gap-2 mt-4">
                    <div class="socials">
                        <li class="h-4"><a href="https://gillianassi.itch.io/" target="_blank" rel="no-referrer"><FaItchIo /></a></li>
                    </div>
                    <div class="socials">
                        <li class="h-4"><a href="https://github.com/gillianassi" target="_blank" rel="no-referrer"><FaGithub /></a></li>
                    </div>
                    <div class="socials">
                        <li class="h-4"><a href="https://www.linkedin.com/in/gillianassi/" target="_blank" rel="no-referrer"><FaLinkedin /></a></li>
                    </div>
                </ul>
            </div>
            <div class="flex justify-center">
                <a href="https://drive.google.com/file/d/1uWvIqh3ZUkYAi5jaOaQLkjx9hSg3vQYw/view?usp=sharing"  target="_blank" >
                    <button class="PrimaryButton inline-block rounded-lg px-6 py-2 uppercase text-m">
                      Download Resume
                    </button>
                </a>
            </div>
            <div class="grid">
                <ul class="flex flex-col gap-2 justify-self-end text-sm text-right">
                    <div class="socials">
                        <Link to="/">Home</Link>
                    </div>
                    <div class="socials">
                        <Link to="/about">About</Link>
                    </div>
                    <div class="socials">
                        <Link to="/contact">Contact</Link>
                    </div>
                </ul>
            </div>
        </div>
        <div class="w-full flex justify-center text-xs">
            <p>Created by Gillian Assi & Julle</p>
        </div>
    </div>
</footer>


<script>
    import {Link} from 'svelte-routing';
    import {FaItchIo, FaGithub, FaLinkedin} from 'svelte-icons/fa';
</script>

<style>
    .PrimaryButton{
        @apply  bg-gPrimaryColor text-white font-bold;
    }
    .PrimaryButton:hover{
    @apply  bg-gDarkPrimaryColor text-white font-bold;
}

    footer::before {
        content: '';
        top: 0;
        @apply w-full h-12 bg-gBackgroundColor absolute left-0;
        clip-path: polygon(0% 0%, 0% 100%, 100% 50%, 100% 0%);
        filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));
    }
    .name{
        @apply font-changa text-lg text-gPrimaryColor;
    }
    .name:hover {
       @apply text-gDarkPrimaryColor;
    }

    .socials{
        height: auto;
        @apply text-black transition-all font-bold;
    }
    .socials:hover {
       @apply text-gPrimaryColor;
    }
</style>