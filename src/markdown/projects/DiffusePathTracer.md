<style>
    #myFrame { width:100%; height:300px; }
</style>

<script>
    import {FaGithub} from 'svelte-icons/fa';
</script>

<div class="socials flex  " style="padding-bottom:20px;">
     <b style="padding-right:20px; padding-top:5px">IO Interactive</b>
    <span>
        <a  href="https://ioi.dk/" target="_blank" rel="no-referrer"><img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Tumbnails/ioi_white_on_black__1__RJaMdpu89.jpg?updatedAt=1684930577153" alt="IOI"  width="50" />
        </a>
    </span>
</div>

# Diffuse Path Tracer

<div id="markdownBody">
    <div class="grid-container grid-centered-container reversed-col-content">
        <div>
            <h1 class="title">Description</h1>
            <p>
            As part of my internship at IO Interactive, one of my responsibilities was the creation of a diffuse path tracer. <br>
            The end product is integrated into the existing pipeline of the Glacier 2 Engine. The final result converges to an accurate path-traced result of the scene.
            </p>
        </div>
         <img class="rounded-3xl shadow-xl" src="https://ik.imagekit.io/gillianassi/Projects/Diffuse_PathTracer/tmp_1684174900325_miezKcbfE.jpg?updatedAt=1684931150599" alt="Action Shot"  width="auto" />
    </div>
    <div class="grid-container grid-centered-container">
        <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/Diffuse_PathTracer/346134846_222369517250240_5992395504874644958_n_nJ3tZNfjP.jpg?updatedAt=1684935559186" alt="Action Shot"  width="auto" />
        <div>
            <h1 class="title">Covered Topics</h1>
            <ul class="list-disc marker:text-purple-300 pl-10">
                <li>Monte Carlo: Importance sampling</li>
                <li>Multi-Bounce Rays using Russian Roulette</li>
                <li>Light Sampling</li>
                <li>Area Lights</li>
                <li>DirectX12</li>
                <li>High-Level Shader Language</li>
                <li>Compute Shaders</li>
            </ul>
        </div>
    </div>
    <div class="grid-container grid-centered-container reversed-col-content">
        <div>
            <h1 class="title">Functionality</h1>
            <p>
                The path tracer shoots multi-bounce rays using importance sampling for each bounce. To determine the bounce probability of the rays, Russian roulette is used. The throughput for every ray is updated every bounce to attain a faster convergence where possible. The image shown to the user uses a compute shader to accumulate all of the Path traced images.
            </p>
        </div>
         <img class="rounded-3xl shadow-xl" src="https://ik.imagekit.io/gillianassi/Projects/Diffuse_PathTracer/349271434_1413620042734604_6643657597192114373_n_lvFXQUeXV.jpg?updatedAt=1684935559222" alt="Action Shot"  width="auto" />
    </div>
    <div class="grid-container grid-centered-container">
        <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/Diffuse_PathTracer/Capture_yvSf6xoIC.PNG?updatedAt=1684932501129" alt="Action Shot"  width="auto" />
        <div>
            <h1 class="title">Debug Tools</h1>
            <p>
            Additionally, I was in charge of creating various debugging tools for the path tracer to improve the development progress of the path tracer. Some examples of such debug tools are a Sample Distribution visualiser (see image) and a light grid visualiser.
            </p>
        </div>
    </div>
    
</div>


# Used Technologies<br>
<div>
    <ul class="list-disc marker:text-purple-300 pl-10">
        <li>Glacier 2 Engine</li>
        <li>C++</li>
        <li>hlsl</li>
        <li>DirectX 12</li>
        <li>Visual Studios</li>
    </ul>
</div> 
<br>


# Contributors and credits
## IO Interactive

This project is created within the Glacier 2 Engine, the in-house engine of IO Interactive. I am extremely grateful to the IOI render team. It was a pleasure to work with all of you, especially my supervisor <a class="text-gPrimaryColor" target="_blank" rel="no-referrer" href="https://www.linkedin.com/in/alcor/">Alessandro dal corso</a>. He taught me about both advanced graphics programming and its implementation within the AAA game industry.


# Duration
<div  style="background-color:rgba(0, 0, 0, 0.2); text-align:center; padding:40px ">
    <div class="text-align: center">
        <b>!! Work in progress !!</b>
    </div>
    <div class="text-align: justify" >
        <b>This is a work in progress. Changes may occur as long as my internship at IO Interactive lasts. <br>This is why the currently used images are limited in quality.<br> 
    </div>
</div>
3 months
