<style>
    #myFrame { width:100%; height:300px; }
</style>

<script>
    import {FaSteam, FaLink, FaPlaystation} from 'svelte-icons/fa';
    import {IoMdInfinite} from 'svelte-icons/io';
</script>

<div class="flex" style="padding-bottom:20px;">
    <div class="flex pr-5">
        <a href="https://metroawakening.com/" target="_blank" rel="no-referrer">
            <div class="flex items-center LinkWrapper">
                <div>
                <b style="padding-left:5px; padding-right:10px; ">Metro Awakening</b>
                </div>
                <div class="padding-right:20px h-6 ">
                    <FaLink/>
                </div >
            </div>
        </a>
    </div>
      <div class="flex pr-5">
        <a href="https://vertigo-games.com/" target="_blank" rel="no-referrer">
            <div class="flex items-center LinkWrapper">
                <div>
                <b style="padding-left:5px; padding-right:10px; ">Vertigo Games</b>
                </div>
                <div class="padding-right:20px h-6 ">
                    <FaLink/>
                </div >
            </div>
        </a>
    </div>
    <div class="flex pr-5">
        <a href="https://store.playstation.com/nl-nl/concept/10009509/" target="_blank" rel="no-referrer">
            <div class="flex items-center LinkWrapper">
                <div>
                <b style="padding-left:5px; padding-right:10px; ">PSVR</b>
                </div>
                <div class="padding-right:20px h-6 ">
                    <FaPlaystation/>
                </div >
            </div>
        </a>
    </div>
    <div class="flex pr-5">
        <a href="https://store.steampowered.com/app/2669410/Metro_Awakening/" target="_blank" rel="no-referrer">
            <div class="flex items-center LinkWrapper">
                <div>
                    <b style="padding-left:5px; padding-right:10px; ">Steam VR</b>
                </div>
                <div class="padding-right:20px h-6 ">
                    <FaSteam/>
                </div >
            </div>
        </a>
    </div>
    <div class="flex pr-5">
        <a href="https://www.meta.com/en-gb/experiences/5096918017089406/" target="_blank" rel="no-referrer">
            <div class="flex items-center LinkWrapper">
                <div>
                    <b style="padding-left:5px; padding-right:10px; ">Meta Quest</b>
                </div>
                <div class="padding-right:20px h-6 ">
                    <IoMdInfinite/>
                </div >
            </div>
        </a>
    </div>
</div>


# Metro Awakening: Camera Visibility System

<div id="markdownBody">
    <div class="grid-container grid-centered-container reversed-col-content">
        <div class="w-full">
            <h1 class="title">Description</h1>
            <p>
                I am proud to have worked on the title Metro Awakening VR at <b>Vertigo Games Amsterdam</b> as a Junior Rendering Programmer.<br>
                This page elaborates on one of my main contributions: implementing a new Camera Visibility System that could be used for both Hierarchical Level of Detail (HLOD) mesh culling and precomputed visibility.
            </p>
        </div>
        <iframe title="YouTube video player" class="frame" src="https://www.youtube.com/embed/Thrp3a0AltQ?si=Yio6n5XSh8Lky8YW"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    <div class="grid-container grid-centered-container">
        <div class="justify-center">
        <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/Metro%20Awakening%20VR/VG/VGMetroAwakeningBase_Em9sgOodc.png?updatedAt=1709247463258" alt="Action Shot"  width="auto" />
        </div>
        <div class="w-full">
            <h1 class="title">My Contributions</h1>
            <ul class="list-disc marker:text-gPrimaryColor pl-10">
                <li>Developing a <b>precomputed visibility system</b></li>
                <li>Integrating and improving <b>GPU light baking</b></li>
                <li><b>Optimizing performance</b> for low-end VR platforms</li>
                <li>Implementing platform-specific <b>mobile PBR</b></li>
                <li><b>Presenting new technologies and concepts</b> across disciplines in the studio</li>
            </ul>
        </div>
    </div>
    <div class="grid-container grid-centered-container reversed-col-content">
        <div class="w-full">
            <h1 class="title">Covered Platforms</h1>
            <br>
            <ul class="list-disc marker:text-gPrimaryColor pl-10">
                <li><b>Steam VR (PC)</b></li>
                <li><b>PSVR</b></li>
                <li><b>Meta Quest 2+3</b></li>
            </ul>
        </div>
        <div class="justify-center">
            <img class="rounded-3xl shadow-xl" src="https://ik.imagekit.io/gillianassi/Projects/Metro%20Awakening%20VR/psvr2_MetaQuest2__c_dQjS_U.png?updatedAt=1731888584059" alt="Action Shot"  width="auto" />
        </div>
    </div>
    <div class="grid-container grid-centered-container">
        <div class="justify-center">
        <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/Metro%20Awakening%20VR/VG/VGMetroAwakeningGameplay2_yapg7iX2-.png?updatedAt=1709247993462" alt="Action Shot"  width="500px" />
        </div>
        <div class="w-full">
            <h1 class="title">Acknowledgment</h1>
            <p>
                I'm excited to share some high-level insights into this system and its impact on the game, with <b>permission from Vertigo Games</b>.<br><br>
                While I was responsible for most parts of the Camera Visibility System, <b> this was a team effort</b>. Some initial implementations were in place, and I expanded on their functionality with my own contributions.
            </p>
        </div>
    </div>
</div>
<br><br>

# The Challenge Of VR Optimization
<div id="markdownBody">
    <div class="grid-container grid-centered-container reversed-col-content">
        <div class="w-full">
            <h1 class="title">Main Challenge</h1>
            <p>
                Developing for VR platforms is uniquely challenging, especially when targeting hardware like the Meta Quest 2. Achieving stunning visuals on such devices requires clever approaches to overcome hardware constraints and provide a seamless experience for players.
            </p>
        </div>
        <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/Metro%20Awakening%20VR/VG/VGMetroAwakeningGameplay1_4l_W4wUme.png?updatedAt=1709247994021" alt="Action Shot"  width="auto" />
        </div>
    <div class="grid-container grid-centered-container">
        <div class="justify-center">
        <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/Metro%20Awakening%20VR/snapdragon-xr-2_2uVhgl3oR.jpg?updatedAt=1731889086680" alt="Action Shot"  width="auto" />
        </div>
        <div class="w-full">
            <h1 class="title">The Meta Quest 2 Hardware</h1>
            <p>
                The Meta Quest 2 uses the Qualcomm Snapdragon XR2 chip with an <b>integrated Adreno 650 GPU</b>. While capable for mobile devices, this GPU is far less powerful than modern desktop GPUs and <b>lacks dedicated VRAM</b>, forcing it to share memory with the CPU. This means developers must be especially efficient in managing GPU resources, limiting the data sent per frame and reducing the number of draw calls.
            </p>
        </div>
    </div>
    <div class="grid-container grid-centered-container reversed-col-content">
        <div class="w-full">
            <h1 class="title">Rendering Static Meshes</h1>
            <p>
                <b>Static meshes</b>, especially those with high triangle counts, pose a significant challenge. <b>Many are never in the player’s view </b>, yet still <b>require us to push a lot of data to the GPU</b>. Optimizing how and when these meshes are rendered is key to maintaining performance.
            </p>
        </div>
        <div class="justify-center">
            <img class="rounded-3xl shadow-xl" src="https://ik.imagekit.io/gillianassi/Projects/Metro%20Awakening%20VR/VG/StaticMeshes_gbv3-GcPK.png?updatedAt=1731889780838" alt="Action Shot"  width="auto" />
        </div>
    </div>
</div>
<br><br>

# A Custom Precomputed Visibility System
<div id="markdownBody">
    <div class="grid-container grid-centered-container">
        <div class="justify-center">
        <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/Metro%20Awakening%20VR/ue-placeholder-social_2TduLpcmF.png?updatedAt=1731890042571" alt="Action Shot"  width="auto" />
        </div>
        <div class="w-full">
            <h1 class="title">Unreal's PCV System</h1>
            <p>
                While Unreal Engine offers a built-in <b>Precomputed Visibility</b> (PCV) system, its complexity and debugging challenges led us to create a custom solution. Our system prioritized <b>simplicity, maintainability, and precision</b>.
            </p>
        </div>
    </div>
    <div class="grid-container grid-centered-container reversed-col-content">
        <div class="w-full">
            <h1 class="title">Why Not At Runtime?</h1>
            <p>
                Calculating visibility in real-time would be <b>too computationally demanding</b> for the Meta Quest 2. Instead, we <b>bake visibility data ahead of time</b>, leveraging the navigation mesh to define where players can move and precompute visibility at varying heights in those locations.
            </p>
        </div>
        <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/Metro%20Awakening%20VR/VG/NavigationMesh_Qaj7JiwnK.png?updatedAt=1731890231606" alt="Action Shot"  width="auto" />
    </div>
</div>
<br><br>

# The Camera Visibility System
<div id="markdownBody">
    <div class="grid-container grid-centered-container">
        <div class="justify-center">
        <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/Metro%20Awakening%20VR/Camera%20visibilityPoint_uZ4h2fORz.png?updatedAt=1731890491669" alt="Action Shot"  width="auto" />
        </div>
        <div class="w-full">
            <h1 class="title">Core Concept</h1>
            <p>
                The system centers on camera visibility points: <b>discrete sample positions in space</b>. Each point captures six views (front, back, left, right, up, and down) with a 90-degree field of view, storing a complete representation of what is potentially visible. <br><br>When points are scattered around the map and computing what each individual point sees, we can combine the points surrounding the player to <b>approximate the visibility</b>. The more points, the more accurate it becomes. 
            </p>
        </div>
    </div>
    <div class="grid-container grid-centered-container reversed-col-content">
        <div class="w-full">
            <h1 class="title">Automating Point Placement</h1>
            <p>
                Manually placing these points would be tedious. To automate the process, we used the navigation mesh, populating points at key positions such as <b>edge corners, edge centers, and polygon centers</b>. Additional calculations ensured visibility data accounted for player actions like leaning—common in VR gameplay.
            </p>
        </div>
       <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/Metro%20Awakening%20VR/image_NF1telvwm.png?updatedAt=1731890874938" alt="Action Shot"  width="auto" />
    </div>
    <br>
    <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/Metro%20Awakening%20VR/Flooding%20the%20navigation%20Mesh_oz8VAddT1.png?updatedAt=1731890705999" alt="Action Shot"  width="auto" />
</div>
<br><br>

# Precomputed (Static) Visibility (PCV)
<div id="markdownBody">
    <div class="grid-container grid-centered-container">
        <div class="justify-center">
        <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/Metro%20Awakening%20VR/image(1)_RPpjTCzzU.png?updatedAt=1731891246532" alt="Action Shot"  width="auto" />
        </div>
        <div class="w-full">
            <h1 class="title">How It Works</h1>
            <p>
                Each source mesh in the level is assigned a <b>unique ID</b>. At each camera visibility point, six captures are taken to record which IDs are visible. This data is <b>stored in an octree</b> for efficient runtime access.
            </p>
        </div>
    </div>
    <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/Metro%20Awakening%20VR/image_PkUBdNL3V.png?updatedAt=1731891192504" alt="Action Shot"  width="auto" />
    <div class="grid-container grid-centered-container reversed-col-content">
        <div class="w-full">
            <h1 class="title">During Play</h1>
            <p>
                 At runtime, the player’s position determines which precomputed points are relevant. The <b>closest points in each octant</b> provide the visibility data, which is combined with basic camera frustum culling to determine what the player can see.
        </div>
        <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/Metro%20Awakening%20VR/image_DIP3sVZXb.png?updatedAt=1731891438300" alt="Action Shot"  width="auto" />
    </div>
    <div class="grid-container grid-centered-container">
        <div class="justify-center">
        <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/Metro%20Awakening%20VR/ezgif.com-animated-gif-maker_lw1nnbNAm.gif?updatedAt=1731891572836" alt="Action Shot"  width="auto" />
        </div>
        <div class="w-full">
            <h1 class="title">Debugging</h1>
            <p>
                Debug visualisations were essential for ensuring accuracy and reliability:
            </p>
            <ul class="list-disc marker:text-gPrimaryColor pl-10">
                <li>Colours warned developers where points were <b>misaligned, out of bounds, or clipping through objects</b> through colour</li>
                <li><b>Selected visibility points </b> could be highlighted at runtime, to aid in identifying potential issues quickly.</li>
            </ul>
        </div>
    </div>
</div>
<br><br>

# Extra: Hierarchical Level Of Detail (HLOD)
<div id="markdownBody">
    <div class="grid-container grid-centered-container reversed-col-content">
        <div class="w-full">
            <h1 class="title">What Are HLODs?</h1>
            <p>
                Most developers are familiar with Level of Detail (LOD), where simpler models replace detailed ones at a distance. HLOD extends this by <b>grouping static meshes into combined LODs</b>.
            </p>
        </div>
        <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/Metro%20Awakening%20VR/ezgif.com-animated-gif-maker%20(1)_Bs5uGtukO.gif?updatedAt=1731891961888" alt="Action Shot"  width="auto" />
    </div>
    <div class="grid-container grid-centered-container">
        <div class="justify-center">
            <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/Metro%20Awakening%20VR/image_TDevQiV6t.png?updatedAt=1731892122714" alt="Action Shot"  width="auto" />
        </div>
        <div class="w-full">
            <h1 class="title">Benefits Of HLODs</h1>
            <p>
                HLODs have multiple benefits regarding performance such as:
            </p>
            <ul class="list-disc marker:text-gPrimaryColor pl-10">
                    <li><b>Fewer rendered actors</b> reduce overhead</li>
                    <li>Shared materials <b>lower draw call counts</b></li>
                    <li><b>Mesh proxies</b> provide additional opportunities for optimization</li>
            </ul>
    </div>
    </div>
    <div class="grid-container grid-centered-container reversed-col-content">
        <div class="w-full">
            <h1 class="title">HLOD Mesh Culling</h1>
            <p>
                During proxy creation, we used the Camera Visibility System to <b>identify and remove triangles</b> that are <b>never visible to the player</b>.<br><br> This process, while similar to the PCV workflow, <b>focuses on triangles </b> rather than source meshes. However, I won't go in to further details about its inner workings as this specific feature was not implemented by myself.
            </p>
        </div>
        <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/Metro%20Awakening%20VR/ezgif.com-animated-gif-maker%20(3)_yCSvn_sjm.gif?updatedAt=1731892274671" alt="Action Shot"  width="auto" />
    </div>
</div>
<br><br>

# Challenges and Limitations
<div id="markdownBody">
    <div class="grid-container grid-centered-container col-content">
         <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/Metro%20Awakening%20VR/image_jJLrGcr1n.png?updatedAt=1731892382379" alt="Action Shot"  width="auto" />
        <div class="w-full">
            <h1 class="title">Challenges And Limitations</h1>
            <p>
               While robust, the system had some inherent challenges:
            </p>
            <ul class="list-disc marker:text-gPrimaryColor pl-10">
                <li><b>Discrete Sampling</b>: Visibility between points might be inaccurate</li>
                <li><b>Coverage</b>: Players must be prevented from reaching areas without visibility data</li>
                <li><b>Transparency</b>: Accounting for transparent materials remains complex</li>
                <li><b>Edge Cases</b>: Points too close to walls may capture incorrect visibility</li>
            </ul>
        </div>
    </div>
</div>
<br><br>

# Result And Conclusion
The Camera Visibility System and associated optimizations have <b>significantly improved performance</b> on low-end VR platforms like the Meta Quest 2. By reducing unnecessary rendering and optimizing mesh data, the system balances graphical fidelity with hardware limitations.

While there’s room for improvement, this system has proven <b>reliable and efficient</b>, enabling a smoother experience for players.
<br><br>

# Credits And Gratitude
This work was developed at Vertigo Games Amsterdam using their custom version of Unreal Engine. All assets shown in the images are their property.<br><br>
A heartfelt thanks to the <b>technical artists</b> and the <b>QA team</b> who helped debug and refine these implementations, and to my supervisor, <b>Sander B.</b>, for his guidance.<br><br>
Finally, a big shoutout to <a class="text-gPrimaryColor" target="_blank" rel="no-referrer" href="https://www.artstation.com/vanessalani"><b>Vanessa Lani</b></a> for creating the amazing poster of me <em>blasting the core dev team with precomputed visibility in my favorite chapter</em>! It’s moments like these that made working on this project so memorable.
<br><br>

<img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/Metro%20Awakening%20VR/gillian_frame_2FqSHJ0WJ.png?updatedAt=1731887090584" alt="Action Shot"  width="auto" />
<br><br>

# Implementation Duration
~6 months