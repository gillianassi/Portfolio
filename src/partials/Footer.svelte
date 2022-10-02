<footer class="py-8 bg-gSecondaryColor text-gBackgroundColor relative">
    <div class="flex flex-col max-w-5xl w-4/5 mx-auto">
        <div class="grid grid-cols-2 pt-8">
            <div>
                <Link to="/"><h4 class="font-changa text-lg text-gPrimaryColor">Gillian Assi</h4></Link>
                <p class="font-changa text-sm">Graphics Programmer</p>
                <ul class="flex gap-2 mt-4">
                    <li class="h-4"><a href="https://gillianassi.itch.io/" target="_blank" rel="no-referrer"><FaItchIo /></a></li>
                    <li class="h-4"><a href="https://github.com/gillianassi" target="_blank" rel="no-referrer"><FaGithub /></a></li>
                    <li class="h-4"><a href="https://www.linkedin.com/in/gillianassi/" target="_blank" rel="no-referrer"><FaLinkedin /></a></li>
                </ul>
            </div>
            <div class="grid">
                <ul class="flex flex-col gap-2 justify-self-end text-sm text-right">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">contact</Link>
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

footer::before {
    content: '';
    top: 0;
    @apply w-full h-12 bg-gBackgroundColor absolute left-0;
    clip-path: polygon(0% 0%, 0% 100%, 100% 50%, 100% 0%);
    filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));
}
</style>