
<script>
    import IoIosPaper from 'svelte-icons/io/IoIosPaper.svelte'
</script>

<div class="flex" style="padding-bottom:20px;">
    <div class="flex pr-5">
        <a href="https://drive.google.com/file/d/1Itq99NgFwzeXWwH8r2zTiPsk9tSQS_wX/view?usp=sharing" target="_blank" rel="no-referrer">
            <div class="flex items-center LinkWrapper">
                <div>
                <b style="padding-left:5px; padding-right:10px; ">Thesis</b>
                </div>
                <div class="padding-right:20px h-6 ">
                    <IoIosPaper/>
                </div >
            </div>
        </a>
    </div>
</div>

# VR for subjective evaluations of plenoptic images

<div  style="background-color:rgba(0, 0, 0, 0.2); text-align:center; vertical-align: middle; padding:40px 0;">
    <div class="text-align: center">
        <b>!! Will be revisited in the future !!</b>
    </div>
    <div class="text-align: center" >
        <b>This bachelor thesis was previously finished in 2019. However, as my skills as a programmer have grown in  the past years I wish to revisit this subject sometime in the future.<br><br>
        When I do this, I intend to create a full implementation that interpolates between the image array dependant of each eye position..</b>  <br> 
    </div>
</div>

<div id="markdownBody">
    <div class="grid-container grid-centered-container reversed-col-content">
        <div class="w-full">
            <h1 class="title">Description</h1>
            <p>
                In the context of my bachelor thesis in Engineering Technology, I tried to create a virtual environment where pictures and holograms could be evaluated. Light maps were visualised in VR by combining images taken with a camera matrix depending on the position of the VR headset. A large part of this project was pure research as I was not yet adept in c++ programming.
                A link to my thesis created in 2018 can be found at the top of this page.
            </p>
        </div>
        <div class="justify-center">
            <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Research/PlenopticImaging/PlenopticImaging_AMHpVsOfU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651707817712" alt="Action Shot"  width="auto" />
        </div>
    </div>
    <div class="grid-container grid-centered-container">
        <div class="justify-center">
            <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Research/PlenopticImaging/ImageRating_I6RxRERx3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661777293593" alt="Action Shot"  width="auto" />
        </div>
        <div class="w-full">
            <h1 class="title">Evaluation room</h1>
            <p>
                I created a space in which the user could rate an image depending on how well the holographic image was perceived. 
                This score can vary from zero to 5 stars.
                Additionally a txt file is provided in which the user could enter his setup dimensions to recreate a copy of their workspace in VR (to improve the immersion for the image evaluation).
            </p>
        </div>
    </div>
    <div class="grid-container grid-centered-container reversed-col-content">
        <div class="w-full">
            <h1 class="title">Light field implementation</h1>
            <p>
                By tracking the HMD location in virtual space (position and rotation), I calculated the most optimal image out of a light field to render the correct image to the corresponding eye. To take stereopsis into account, I adjusted the shown image for each eye depending on the user's IPD. 
            </p>
        </div>
        <div class="justify-center">
            <img class="rounded-3xl shadow-xl" src="https://ik.imagekit.io/gillianassi/Research/PlenopticImaging/ActionShotPlenoptic2_rZPlYPhhv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661777233389" alt="Action Shot"  width="auto" />
        </div>
    </div>
</div>


<br>

# Used Technologies
<div>
    <ul class="list-disc marker:text-gPrimaryColor pl-10">
        <li>C++</li>
        <li>Occulus SDK</li>
        <li>Visual Studios</li>
    </ul>
</div> 
<br>