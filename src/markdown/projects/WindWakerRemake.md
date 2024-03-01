<style>
    #myFrame { width:100%; height:300px; }
</style>

<script>
    import {FaGithub} from 'svelte-icons/fa';
</script>

<div class="flex" style="padding-bottom:20px;">
    <div class="flex pr-5">
        <a href="https://github.com/gillianassi/TheWindWaker_Remake" target="_blank" rel="no-referrer">
            <div class="flex items-center LinkWrapper">
                <div>
                <b style="padding-left:5px; padding-right:10px; ">Github Page</b>
                </div>
                <div class="padding-right:20px h-6 ">
                    <FaGithub/>
                </div >
            </div>
        </a>
    </div>
</div>

# The legend of Zelda: The Wind Waker Remake

<div id="markdownBody">
    <div class="grid-container grid-centered-container reversed-col-content">
        <div class="w-full">
            <h1 class="title">Description</h1>
            <p>
            In the context of the course Graphics Programming 2, I received the opportunity to recreate any game of choice. To get a head start all students received a base engine called the Overlord Engine. This engine, however, lacked a lot of graphical functionalities which I had to implement myself.
            </p>
        </div>
        <iframe title="vimeo-player" class="frame" src="https://player.vimeo.com/video/725256028?h=16ab996b9a" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="grid-container grid-centered-container">
        <div class="justify-center">
            <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/WindWakerRemake/LinkPose_wWmkuMK0T.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661690185200" alt="Action Shot"  width="auto" />
        </div>
        <div class="w-full">
            <h1 class="title">Covered Topics</h1>
            <ul class="list-disc marker:text-gPrimaryColor pl-10">
                <li>Hardware skinned animations (+ animation blending)</li>
                <li>Text rendering</li>
                <li>Sprite rendering</li>
                <li>Particles</li>
                <li>Shadow mapping</li>
                <li>High-Level Shader Language</li>
                <li>Nvidia PhysX</li>
            </ul>
        </div>
    </div>
    <div class="grid-container grid-centered-container reversed-col-content">
        <div class="w-full">
            <h1 class="title">Water Shaders</h1>
            <p>
                I combined up to 5 simple shaders by layering them over each other to recreate the iconic wave effect from the Wind Waker game. Two other shaders using the same logic created the shadow underneath the bridge and the foamy edges around pillars and stones.
            </p>
        </div>
        <div class="justify-center">
            <img class="rounded-3xl shadow-xl" src="https://ik.imagekit.io/gillianassi/Projects/WindWakerRemake/SeaShader_7O43miNvM.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1661693031830" alt="Action Shot"  width="auto" />
        </div>
    </div>
    <div class="grid-container grid-centered-container">
        <div class="justify-center">
        <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/WindWakerRemake/CellShader?ik-sdk-version=javascript-1.4.3&updatedAt=1661694632152" alt="Action Shot"  width="500px" />
        </div>
        <div class="w-full">
            <h1 class="title">Cell Shading</h1>
            <p>
                I used a toon shader to get the typical cell shaded effect on Link. For his eyes, I adjusted the way materials are rendered in the Overlord Engine to give them a render order. By rendering the eyes last, I am Links eyes are drawn above his hair (but still behind materials like rupies and fences),
            </p>
        </div>
    </div>
    <div class="grid-container grid-centered-container reversed-col-content">
        <div class="w-full">
            <h1 class="title">Blended Animations</h1>
            <p>
                Afterwards, prior knowledge about the software skinning was implemented inside of a vertex shader to implement animations on the complete mesh. using animation data from OVM files. <br>
                Furthermore, I added functionality to blend between different animations. Both animations will influence the mesh over a transition time to create a smooth transition. 
            </p>
        </div>
        <div class="justify-center">
            <img class="rounded-3xl shadow-xl" src="https://ik.imagekit.io/gillianassi/Projects/WindWakerRemake/BlendedAnimation_YAnsej-sX.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1661722199346" alt="Action Shot"  width="500" />
         </div>
    </div>
</div>


# Used Technologies<br>
<div>
    <ul class="list-disc marker:text-gPrimaryColor pl-10">
        <li>C++</li>
        <li>hlsl</li>
        <li>Nvidia PhysX</li>
        <li>Visual Studios</li>
    </ul>
</div> 
<br>


# Contributors and credits
## Wind waker analysis
<div>

</div>
 <a class="text-gPrimaryColor underline font-bold" href="https://www.youtube.com/channel/UC5bN6XKHDCFt_wYAJmsP_Mg" target="_blank" rel="no-referrer">Jasper</a> for his in-depth analysis of shaders and lighting of Wind Waker.
<br><br>

## Assets
<div>
    <a class="text-gPrimaryColor underline font-bold" href="https://www.models-resource.com/gamecube/legendofzeldathewindwaker/model/417/" target="_blank" rel="no-referrer">Lexou</a> for the ripped outset island meshes and textures.
</div>
<div>
    <a class="text-gPrimaryColor underline font-bold" href="https://www.models-resource.com/gamecube/legendofzeldathewindwaker/model/7795/" target="_blank" rel="no-referrer">Mystie</a> for the rigged link model.
</div>
<br>

# Duration
1 semester
