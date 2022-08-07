<style>
    #myFrame { width:100%; height:400px; }
</style>
# Not For Sale
<br>
<b>!! Work in progress !!</b> <br>
<br>
Get ready for the race of your life in this fast pace local-multiplayer game Not for Sale! Jump around from objective to objective with the camera as your true nemesis.  The game camera follows the player upfront, which means that this pro-gamer can decide which path the group has to take and how fast everyone needs to go. If you can't keep up, you're out! Players that get out of the camera frame get eliminated. Be the last one to survive and triumph over your friends.<br>
<br>

<iframe id="myFrame" src="https://www.youtube.com/embed/odVMGDd4IcE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br> 


## Pathfinding
During the development of this game, one of the tasks assigned to me was the pathfinding used for the camera movement. Previously, the closest person to the objective was calculated in a straight line. This however could result in counterintuitive gameplay that slowed down the pace of the game. This is why a pathfinding feature to calculate the closest person was requested.<br>
Throughout the map, a multitude of nodes are placed that define all possible paths. This includes mono-directional paths. In the beginning of the game the Dijkstra algorithm is used to create a lookup table for all nodes. The lookup table is afterwards used to always calculate the closest person to the objective. I used Unity gismos for an easy setup of nodes and clear visualization of the optimal path. 

<img class="snap-center" src="https://ik.imagekit.io/gillianassi/Projects/NotForSale/PathFinding_ZKGZXEafw.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651708374033"/>

Additionally, a recalculate button has also been added, mostly for debugging purposes. However, it could easily be used to create dynamic levels with changing paths.
<br>

# My contribution
\-	Objective pointer logic <br>
\-	Camera movement <br>
\-	Camera path finding<br>
\-	Gameloop Logic<br>
\-	Level Design<br>
\-	General Project management<br><br>
<br>

# Contributors and credits
\- <a class="text-gPrimaryColor" href="https://sennedevocht.com/">Senne devocht</a><br>
\- <a class="text-gPrimaryColor" href="https://www.sashavigneron.com/">Sasha Vigneron</a><br>
\- <a class="text-gPrimaryColor" href="https://www.artstation.com/schaper360">Christiane Schaper</a><br> 
\- <a class="text-gPrimaryColor" href="https://www.artstation.com/kocaes">Kobie Caestecker</a><br> 
\- <a class="text-gPrimaryColor" href="https://www.artstation.com/stef_bracke">Stef Bracke</a><br>
<br>

# Used Technologies
\-	C#<br>
\-	Unity <br>
\-	Unity VFX Graph<br>
\-	Perforce<br>
<br>

# Duration
The project was conducted over the duration of 4 phases.<br>Each week every team member was required to work 10 hours. This brought us to a total of 100 hours per person over the timespan of 1 semester.<br>
\- 	Prototyping (2 Weeks)<br>
\- 	Production sprint 1 (3 weeks)<br>
\- 	Production Sprint 2 (3 weeks)<br>
\- 	Polish (2 weeks)<br>
