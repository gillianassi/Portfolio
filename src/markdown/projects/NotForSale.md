
<script>
    import {FaItchIo} from 'svelte-icons/fa';
</script>

<div class="flex" style="padding-bottom:20px;">
    <div class="flex pr-5">
        <a href="https://stef-bracke.itch.io/notforsale" target="_blank" rel="no-referrer">
            <div class="flex items-center LinkWrapper">
                <div>
                <b style="padding-left:5px; padding-right:10px; ">Itch.io</b>
                </div>
                <div class="padding-right:20px h-6 ">
                    <FaItchIo/>
                </div >
            </div>
        </a>
    </div>
</div>

<style>
    #myFrame { width:100%; height:400px; }
</style>
# Not For Sale


<div id="markdownBody">
    <div class="grid-container grid-centered-container reversed-col-content">
        <div class="w-full">
            <h1 class="title">Description</h1>
            <p>
            Get ready for the race of your life in this fast-paced local-multiplayer game Not for Sale! Jump around from     objective to objective with the camera as your true nemesis. 
            </p> 
            <p>
            The game camera follows the player upfront, which means that this pro gamer can decide which path the group has to take and how fast everyone needs to go. If you can't keep up, you're out! Players that get out of the camera frame get eliminated. Be the last one to survive and triumph over your friends.
            </p>
        </div>
        <iframe title="vimeo-player" class="frame" src="https://www.youtube.com/embed/odVMGDd4IcE" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="grid-container grid-centered-container">
        <div class="justify-center">
            <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/NotForSale/Robot_1zT71mrg5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661771213998" alt="Action Shot"  width="auto" />
        </div>
        <div class="w-full">
            <h1 class="title">My Contribution</h1>
            <div>
                <ul class="list-disc marker:text-gPrimaryColor pl-10">
                    <li>Camera path finding</li>
                    <li>In Game Camera Movement (with pathfinding)</li>
                    <li>Objective pointer</li>
                    <li>Gameloop Logic</li>
                    <li>Level Design</li>
                    <li>Project Management</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="grid-container grid-centered-container reversed-col-content">
        <div class="w-full">
            <h1 class="title">Pathfinding</h1>
            <div>
                <p>
                    During the development of this game, one of the tasks assigned to me was the pathfinding used for the camera movement. Previously, the closest person to the objective was calculated in a straight line. This however could result in counterintuitive gameplay that slowed down the pace of the game. This is why a pathfinding feature to calculate the closest person was requested.
                </p>
            </div>
        </div>
        <div class="justify-center">
            <img class="rounded-3xl shadow-xl" src="https://ik.imagekit.io/gillianassi/Projects/NotForSale/PathFinding_ZKGZXEafw.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651708374033" alt="Action Shot"  width="auto" />
        </div>
    </div>
    <div class="grid-container grid-centered-container">
        <div class="justify-center">
            <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/NotForSale/CameraWithPathfinding_gyoaWJ3dM.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1661769709529" alt="Action Shot"  width="500px" />
        </div>
        <div class="w-full">
            <h1 class="title">Camera Pathfinding</h1>
            <p>
                Throughout the map, a multitude of nodes are placed that define all possible paths. This includes mono-directional paths. At the beginning of the game, the Dijkstra algorithm is used to create a lookup table for all nodes. The lookup table is afterwards used to always calculate the closest person to the objective. I used Unity gismos for an easy setup of nodes and a clear visualization of the optimal path. 
            </p>
        </div>
    </div>
</div>
<br>

# Contributors and credits
<div>
    <ul class="list-disc marker:text-gPrimaryColor pl-10">
        <li><a class="text-gPrimaryColor" target="_blank" rel="no-referrer" href="https://sennedevocht.com/">Senne devocht</a></li>
        <li><a class="text-gPrimaryColor" target="_blank" rel="no-referrer" href="https://www.sashavigneron.com/">Sasha Vigneron</a></li>
        <li><a class="text-gPrimaryColor" target="_blank" rel="no-referrer" href="https://www.artstation.com/schaper360">Christiane Schaper</a></li>
        <li><a class="text-gPrimaryColor" target="_blank" rel="no-referrer" href="https://www.artstation.com/kocaes">Kobie Caestecker</a></li>
        <li> <a class="text-gPrimaryColor" target="_blank" rel="no-referrer" href="https://www.artstation.com/stef_bracke">Stef Bracke</a></li>
    </ul>
</div>

<br>

# Used Technologies
<div>
    <ul class="list-disc marker:text-gPrimaryColor pl-10">
        <li>C#</li>
        <li>Unity</li>
        <li>Unity VFX Graph</li>
        <li>Perforce</li>
    </ul>
</div>

<br>

# Duration
The project was conducted over the duration of 4 phases.<br>Each week every team member was required to work 10 hours. <br>This brought us to a total of 100 hours per person over the timespan of 1 semester.<br>
<ul class="list-disc marker:text-gPrimaryColor pl-10 pt-4">
    <li>Prototyping (2 Weeks)</li>
    <li>Production sprint 1 (3 weeks)</li>
    <li>Production Sprint 2 (3 weeks)</li>
    <li>Polish (2 weeks)</li>
</ul>

