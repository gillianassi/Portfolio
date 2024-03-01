<style>
    #myFrame { width:100%; height:300px; }
</style>

<script>
    import {FaLink} from 'svelte-icons/fa';
</script>

<div class="flex" style="padding-bottom:20px;">
    <div class="flex pr-5">
        <a href="https://ioi.dk/" target="_blank" rel="no-referrer">
            <div class="flex items-center LinkWrapper">
                <div>
                <b style="padding-left:5px; padding-right:10px; ">IO Interactive</b>
                </div>
                <div class="padding-right:20px h-6 ">
                    <FaLink/>
                </div >
            </div>
        </a>
    </div>
</div>

# Diffuse Path Tracer

<div id="markdownBody">
    <div class="grid-container grid-centered-container reversed-col-content">
        <div class="w-full">
            <h1 class="title">Description</h1>
            <p>
            As part of my internship at IO Interactive, one of my responsibilities was the creation of a diffuse path tracer. <br>
            The end product is integrated into the existing pipeline of the Glacier 2 Engine. The final result converges to an accurate path-traced result of the scene.
            </p>
        </div>
        <div class="justify-center">
            <img class="rounded-3xl shadow-xl" src="https://ik.imagekit.io/gillianassi/Projects/Diffuse_PathTracer/CouchDynamic_CosineWeighted_PT-ezgif.com-video-to-gif-converter_-o-9Jn_Z0.gif?updatedAt=1708994083073" alt="Action Shot"  width="auto" />
        </div>
    </div>
    <div class="grid-container grid-centered-container">
        <div class="justify-center">
            <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/Diffuse_PathTracer/CompareLight_MaBkrveVx.jpg?updatedAt=1708993657577" alt="Action Shot"  width="auto" />
        </div>
        <div class="w-full">
            <h1 class="title">Covered Topics</h1>
            <ul class="list-disc marker:text-gPrimaryColor pl-10">
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
        <div class="w-full">
            <h1 class="title">Functionality</h1>
            <p>
                The path tracer shoots multi-bounce rays using importance sampling for each bounce. To determine the bounce probability of the rays, Russian roulette is used. The throughput for every ray is updated every bounce to attain a faster convergence where possible. The image shown to the user uses a compute shader to accumulate all of the path-traced images.
            </p>
        </div>
        <div class="justify-center">
             <img class="rounded-3xl shadow-xl" src="https://ik.imagekit.io/gillianassi/Projects/Diffuse_PathTracer/UniformSampling_WqJIjaF6z.gif?updatedAt=1708992810697" alt="Action Shot"  width="auto" />
        </div>
    </div>
    <div class="grid-container grid-centered-container">
        <div class="justify-center">
            <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/Diffuse_PathTracer/Piano_RTAO_zprC03pSS.png?updatedAt=1708992807730" alt="Action Shot"  width="auto" />
         </div>
        <div class="w-full">
            <h1 class="title">Ray Traced Ambient Occlusion</h1>
            <p>
            One of the first things I tackled in this project was understanding Ray Traced Ambient Occlusion and what methods can be used to get this. This was an extremely useful intermediate step that let me create the foundation of the diffuse path tracer. This also helped with getting a visual understanding of the math involved.
            </p>
        </div>
    </div>
    <div class="grid-container grid-centered-container reversed-col-content">
        <div class="w-full">
            <h1 class="title">Uniform VS Cosine-Weighted</h1>
            <p>
                The biggest performance improvement I implemented was seen when I changed the sampling technique from Uniform Sampling to cosine-weighted. While Uniform, as its name suggests, samples uniformly in random directions on the hemisphere; cosine-weighted sampling has a preference in the direction of the normal. This tiny difference made the accumulation speed skyrocket and minimized the occurrence of fireflies.
            </p>
        </div>
        <div class="justify-center">
            <img class="rounded-3xl shadow-xl" src="https://ik.imagekit.io/gillianassi/Projects/Diffuse_PathTracer/Untitled_XaJcrWsQt.jpg?updatedAt=1708996960034" alt="Action Shot"  width="auto" />
        </div>
    </div>
    <div class="grid-container grid-centered-container">
        <div class="justify-center">
            <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/Diffuse_PathTracer/Trolly_Samples_Angle0_78hI01gbmV.png?updatedAt=1708992808597" alt="Action Shot"  width="auto" />
        </div>
        <div class="w-full">
            <h1 class="title">Debug Tools</h1>
            <p>
            Additionally, I was in charge of creating various debugging tools for the path tracer to improve the development progress of the path tracer. Some examples of such debug tools are a Sample Distribution visualiser (see image) and a light grid visualiser.
            </p>
        </div>
    </div>
    
</div>


# Used Technologies<br>
<div>
    <ul class="list-disc marker:text-gPrimaryColor pl-10">
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

This project is created within the Glacier 2 Engine, the in-house engine of IO Interactive. I am extremely grateful to the IOI render team. It was a pleasure to work with all of you, especially my supervisor <a class="text-gPrimaryColor" target="_blank" rel="no-referrer" href="https://www.linkedin.com/in/alcor/">Alessandro Dal Corso</a>. He taught me about both advanced graphics programming and its implementation within the AAA game industry.


# Duration
3 months
