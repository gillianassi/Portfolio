## The legend of Zelda: The Wind Waker Remake
<br>
<b>!! Work in progress !!</b> <br>
<br>
In context of the course Graphics Programming 2, I received the opportunity to recreate any game of choice. To get a head start all students received a base engine called the Overlord Engine. This engine, however, lacked a lot of graphical functionalities which I had to implement myself.<br>
<br>

## HLSL shaders
We used High-Level Shader Language to create a multitude of shaders including:<br>
•	Geometry shader to manipulate geometry<br>
•	Overlord Shader, capable of using Specular reflection, normal maps, Fresnell falloff and more.<br>
•	Sprite renderer, capable of displaying and manipulating a sprite in a 2d plane. This is visualized using a combination of a geometry and pixel shader.<br>
•	Text renderer, capable of converting a string into font text displayed in game using a .FNT Sprite font. This is also visualized using a combination of a geometry and pixel shader.<br>
<br>

## Software skinning
A very important feature, which the Overlord Engine lacked, was animations. To understand this, we first received some dummy geometry to visualize simple bones. I represented each bone by an empty game object. Parenting the bones to each other helped with the relative translation.<br>
<img src="https://ik.imagekit.io/gillianassi/Projects/WindWakerRemake/SoftwareSkinningBasic_FQzYTSL9i.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1651708357961" alt="Software skinning"  width="auto" />

Afterwards, I implemented a simple version of software skinning to make a simple cube mesh move corresponding to a linked bone. However, this would break the mesh into separate parts. To avoid this blend weights were added to share vertices over multiple bones. This means that vertices could be affected by the movement of more than one bone, deforming the mesh to a preferable position using interpolation.<br>
<br>
<img src="https://ik.imagekit.io/gillianassi/Projects/WindWakerRemake/SoftwareSkinningBlendweights___rvalbaC.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1651708357972" alt="Software Skinning with blend weights"  width="auto" />

## Hardware skinning
Afterwards prior knowledge about the software skinning was implemented inside of a vertex shader to implement animations on complete mesh. Because I used float4 values to represent the blend weights, up to 4 bones can be weighted per vertex.<br>
Furthermore, I added functionality to read animation data from OVM files. This made it possible to easily import models and use their animations inside of the Overlord Engine Game.
<img src="https://ik.imagekit.io/gillianassi/Projects/WindWakerRemake/HardewareSkinning_skifMB5l-.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1651708357976" alt="HardwareSkinning"  width="auto" />
<br><br>


## Cell-shader
[Work in progress]
<br><br>

## Single Light Dependency
[Work in progress]
<br><br>

# Contributors and credits
Wind waker analysis
Jasper (https://www.youtube.com/channel/UC5bN6XKHDCFt_wYAJmsP_Mg) for his inept analysis of shaders and lighting of Wind Waker.
<br><br>

# Assets
Lexou (https://www.models-resource.com/gamecube/legendofzeldathewindwaker/model/417/) for the outset island meshes
Mystie (https://www.models-resource.com/gamecube/legendofzeldathewindwaker/model/7795/) for the rigged link model
<br><br>

# Duration
1 semester
