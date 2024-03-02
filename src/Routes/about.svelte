<script>
  import Header from "../components/Header.svelte";
  
  import FaCaretDown from 'svelte-icons/fa/FaCaretDown.svelte'
  function scrollToProjects() {
        let workEl =  document.getElementById('MoreInfo');
        const offset = 100;

        let workElPos = workEl.getBoundingClientRect().top;

        window.scrollTo({
            behavior: 'smooth', 
            top: workElPos + window.pageYOffset - offset
        });
    }
</script>

<div>
  <div class="bg-gBackgroundColor ">
    <div
      class="flex flex-col h-full  w-screen flex items-center justify-center "
    >
      <div class="flex w-full min-h-screen justify-center items-center pt-20 ">
        <div
          class="flex bg-gLightPrimaryColor w-screen shadow-lg justify-center">
          <div class="flex flex-col w-full items-center space-y-6 p-2  shadow-lg
          md:flex-row md:space-x-6 ms:space-y-0 max-w-[2160px]">
            <div class="flex w-1/2 justify-center ">
              <img src="https://ik.imagekit.io/gillianassi/ProfilePicture_K4y6avmEt.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651757031924" 
              alt="Profile" class="profileImage rounded-lg shadow-xl"/>
            </div>
            <div class="item-body pb-4 w-1/2 max-w-prose text-black md:text-left text-center md:pr-10">
              <h1 class="name ">GILLIAN ASSI</h1>
              <div class="md:text-justify text-center ">
                <p class="pb-2">
                  Oh, hi there! It seems like you’ve stumbled upon my About page.<br
                  />
                  Now that you’re here, you might as well keep on reading.<br />
                </p>
                <p>Let’s start by stating the obvious:</p>
                <p class="pb-3">
                  As my domain name implies, my name is Gillian Assi. <br />
                </p>
                <p class="pb-3">
                  Creating functional applications and electronic devices has
                  always been both a passion and a hobby of mine. That's why I became
                  an <b class="text-gPrimaryColor">electronics-ICT engineer</b>
                  and <b class="text-gPrimaryColor">Game Developer</b>.
                </p>
                <p>
                  During the course of my education, game implementations for <b
                    class="text-gPrimaryColor">Graphics Programming</b
                  >
                  and <b class="text-gPrimaryColor">VR development</b> became
                  topics that intrigued me the most. However, I am always able to find
                  joy in engine programming and designing game mechanics.
                </p>
              </div>
              <div class="relative flex py-6 items-center">
                <div class="flex-grow border-t border-gPrimaryColor"></div>
                <div class="flex-grow border-t border-gPrimaryColor"></div>
              </div>
              <div class="grid md:grid-cols-2 flex">
                <div class="md:justify-self-start justify-self-center md:pb-0 pb-4 pr-2">
                    <button class="SecondaryButton inline-block md:self-end  rounded-lg text-m px-6 py-2 " on:click="{scrollToProjects}">
                      My Career Path
                    </button>
                </div>
                <div class="md:justify-self-end justify-self-center">
                  <a href="https://drive.google.com/file/d/1uWvIqh3ZUkYAi5jaOaQLkjx9hSg3vQYw/view?usp=sharing"  target="_blank" >
                    <button class="PrimaryButton inline-block rounded-lg px-6 py-2 uppercase text-m">
                      Download Resume
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="flex">
            
            
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="bg-gBackgroundColor h-flex flex justify-center">
    <section id="MoreInfo">
    <div class="grid-container text-gLightPrimaryColor pt-10  max-w-[2160px]">
      <div class="">
        <div id="Education" class="pt-10  ">
          <h1 class="title">Education</h1>

          <div class="overflow-x-auto relative shadow-md sm:rounded-lg pl-2 ">
            <table
              class="table-auto w-full text-sm text-left text-gray-400 "
            >
              <thead
                class="text-xs uppercase bg-gPrmayColor text-gray-400"
              > 
                <tr class=" bg-zinc-700 text-slate-300">
                  <th scope="col" class="py-3 px-6">Degree</th>
                  <th scope="col" class="py-3 px-6">Specialisation</th>
                  <th scope="col" class="py-3 px-6">Year</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="border-b border-gray-700 "
                >
                  <td
                    >Bachelor degree <b class="text-gPrimaryColor "
                      >Digital Arts & Entertainment</b
                    ></td
                  >
                  <td>Game Development</td>
                  <td>2020 - 2023</td>
                </tr>
                <tr
                  class=" border-b border-gray-700"
                >
                  <td
                    >Master of <b class="text-gPrimaryColor"
                      >Electronics and ICT Engineering Technology</b
                    ></td
                  >
                  <td>Information and Communication Techniques</td>
                  <td>2019 – 2020</td>
                </tr>
                <tr
                  class=" border-b border-gray-700"
                >
                  <td
                    >Bachelor of <b class="text-gPrimaryColor"
                      >Engineering Technology</b
                    ></td
                  >
                  <td>Specialization: Electronics-ICT</td>
                  <td>2016 – 2019</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="ProgrammingLanguages" class="pt-10">
          <h1 class="title">Learned Programming Languages</h1>
          <div class="overflow-x-auto relative shadow-md sm:rounded-lg pl-2">
            <table
              class="table-auto w-full text-sm text-left text-gray-400"
            >
              <thead
                class="text-xs uppercase  bg-gray-700 text-gray-400"
              >
                <tr class=" bg-zinc-700 text-slate-300">
                  <th scope="col" class="py-3 px-6">Language</th>
                  <th scope="col" class="py-3 px-6">Proficiency</th>
                  <th scope="col" class="py-3 px-6">Experience</th>

                </tr>
              </thead>
              <tbody>
                <tr
                  class=" border-b border-gray-700"
                >
                  <td>C++</td>
                  <td>Advanced</td>
                  <td>5 years</td>
                </tr>
                <tr
                  class=" border-b border-gray-700"
                >
                  <td>C#</td>
                  <td>Advanced</td>
                  <td>4 years</td>
                </tr>
                <tr
                  class=" border-b border-gray-700"
                >
                  <td>HLSL</td>
                  <td>Experienced</td>
                  <td>3 years</td>
                </tr>
                <tr
                  class="--50 border-b border-gray-700"
                >
                  <td>Matlab</td>
                  <td>Intermadiate</td>
                  <td>2 years</td>
                </tr>
                <tr
                  class=" border-b border-gray-700"
                >
                  <td>SQL</td>
                  <td>Basic</td>
                  <td>1 year</td>
                </tr>
                <tr
                  class=" border-b border-gray-700"
                >
                  <td>php</td>
                  <td>Basic</td>
                  <td>1 year</td>
                </tr>
                <tr
                  class=" border-b border-gray-700"
                >
                  <td>html/CSS</td>
                  <td>Basic</td>
                  <td>2 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="Technologies" class="pt-10">
          <h1 class="title">Technologies and software</h1>
          <div
            class="overflow-x-auto relative shadow-md sm:rounded-lg pl-2 pb-5"
          >
            <table
              class="table-auto w-full text-sm text-left  text-gray-400"
            >
              <thead
                class="text-xs n uppercase  bg-gray-700 text-gray-400"
              >
                <tr class="bg-zinc-700 text-slate-300">
                  <th scope="col" class="py-3 px-6">Language</th>
                  <th scope="col" class="py-3 px-6">Proficiency</th>
                  <th scope="col" class="py-3 px-6">Experience</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class=" border-b border-gray-700"
                >
                  <td>Visual Studios & Visual Code</td>
                  <td>Advanced</td>
                  <td>8 years</td>
                </tr>
                <tr
                  class=" border-b border-gray-700"
                >
                  <td>Unreal Engine</td>
                  <td>Advanced</td>
                  <td>4 years</td>
                </tr>
                <tr
                  class=" border-b border-gray-700"
                >
                  <td>Unity</td>
                  <td>Advanced</td>
                  <td>4 years</td>
                </tr>
                <tr
                  class=" border-b border-gray-700"
                >
                  <td>Oculus SDK</td>
                  <td><div>Experienced</div></td>
                  <td>3 years</td>
                </tr>
                <tr
                  class=" border-b border-gray-700"
                >
                  <td>Git</td>
                  <td>Experienced</td>
                  <td></td>
                </tr>
                <tr
                  class=" border-b border-gray-700"
                >
                  <td>Perforce</td>
                  <td>Experienced</td>
                  <td></td>
                </tr>
                <tr
                  class=" border-b border-gray-700"
                >
                  <td>Renderdoc</td>
                  <td>Basic</td>
                  <td>2 years</td>
                </tr>
                <tr
                  class=" border-b border-gray-700"
                >
                  <td>NVidia NSight</td>
                  <td>Basic</td>
                  <td></td>
                </tr>
                <tr
                  class=" border-b border-gray-700"
                >
                  <td>NVidia PhysX</td>
                  <td>Intermediate</td>
                  <td>1 year</td>
                </tr>
                <tr
                  class=" border-b border-gray-700"
                >
                  <td>Autodesk Inventor</td>
                  <td>Intermediate</td>
                  <td>3 years</td>
                </tr>
                <tr
                  class=" border-b border-gray-700"
                >
                  <td>Autodesk Autocad</td>
                  <td>Intermediate</td>
                  <td>3 years</td>
                </tr>
                <tr
                  class=" border-b border-gray-700"
                >
                  <td>Autodesk Maya</td>
                  <td>Intermediate</td>
                  <td>3 years</td>
                </tr>
                <tr
                  class=" border-b border-gray-700"
                >
                  <td>Adobe Photoshop</td>
                  <td>Intermediate</td>
                  <td></td>
                </tr>
                <tr
                  class=" border-b border-gray-700"
                >
                  <td>Win32</td>
                  <td>Basic</td>
                  <td></td>
                </tr>
                <tr
                  class=" border-b border-gray-700"
                >
                  <td>Houdini</td>
                  <td>Basic</td>
                  <td>1 year</td>
                </tr>
                <tr
                  class=" border-b border-gray-700"
                >
                  <td>Substance Painter</td>
                  <td>Basic</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="bg-black min-w-full rounded-lg pl-6 pt-10 pb-5">
        <h1 class="title ">Experience</h1>
        <div class="pl-6 bg-zinc-900 rounded-lg">
          <h1 class="Subtitle">Junior Render Programmer</h1>
          <h2 class="text-xl font-changa  pb-2 text-slate-300">Vertigo Games | Since August 2023 - now</h2>
          <div class="grid-container-centered">
            <div class="text-sm text-slate-300">
              <p class="">Specific tasks:</p>
              <ul class="list-disc marker:text-gPrimaryColor pl-5 pt-2 pb-2 text-slate-300">
                <li>Work on UE5 Source code</li>
                <li>Maintain code for multi-platform support</li>
                <li>Optimize code and data structures.</li>
                <li>Participate in peer reviews of designs and code</li>
              </ul>
            </div>
            <div>
              <div class="text-sm pl-2 text-slate-300">
                <p class="">Used Technologies:</p>
                <ul class="list-disc marker:text-gPrimaryColor pl-5 pt-2">
                  <li>C++</li>
                  <li>Visual Studios</li>
                  <li>Unreal Engine 5</li>
                  <li>Perforce</li>
                  <li>Renderdoc</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <br>
        <div class="pl-6 bg-zinc-900 rounded-lg">
          <h1 class="Subtitle">Render Programmer Intern</h1>
          <h2 class="text-xl font-changa  pb-2 text-slate-300">IO Interactive | 4 months</h2>
          <div class="grid-container-centered">
            <div class="text-sm text-slate-300">
              <p class="">Specific tasks:</p>
              <ul class="list-disc marker:text-gPrimaryColor pl-5 pt-2 pb-2">
                <li>Work on the Glacier 2 render code</li>
                <li>Creation of a diffuse path tracer</li>
                <li>Participate in peer reviews of designs and code.</li>
                <li>Develop and maintain render features driving the current and future titles of IOI.</li>
              </ul>
            </div>
            <div>
              <div class="text-sm pl-2 text-slate-300">
                <p class="">Used Technologies:</p>
                <ul class="list-disc marker:text-gPrimaryColor pl-5 pt-2">
                  <li>C++</li>
                  <li>Visual Studios</li>
                  <li>Perforce</li>
                  <li>Renderdoc</li>
                  <li>NVIDIA NSight Graphics </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <br>
        <div class="pl-6 bg-zinc-900 rounded-lg">
          <h1 class="Subtitle">Electronics Engineer Intern (R&D)</h1>
          <h2 class="text-xl font-changa  pb-2 text-slate-300">Shayp | 4 months</h2>
          <div class="grid-container-centered">
            <div class="text-sm text-slate-300">
              <p class="">Specific tasks:</p>
              <ul class="list-disc marker:text-gPrimaryColor pl-5 pt-2 pb-2">
                <li>Writing test code for IoT devices</li>
                <ul class="list-disc marker:text-gPrimaryColor pl-5">
                  <li>Calibration techniques</li>
                  <li>Optimization</li>
                  <li>Process management</li>
                </ul>
                <li>Energy management van IoT-devices</li>
                <li>Implementing new features for IoT devices</li>
                <li>Documenting code</li>
              </ul>
            </div>
            <div>
              <div class="text-sm pl-2 text-slate-300">
                <p class="">Used Technologies:</p>
                <ul class="list-disc marker:text-gPrimaryColor pl-5 pt-2">
                  <li>C++</li>
                  <li>VS Code</li>
                  <li>Git</li>
                  <li>Doxygen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  </div>
  <style>
    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }
     
    /* Track */
    ::-webkit-scrollbar-track {
        background: #242424;
    }
     
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 5px;
    }
     
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
  </style>
</div>


<style>
  .profileImage { 
    width:auto; height:auto; 
    max-height: 430px;
    padding: 5px;
    min-width: 50px;
}


  .name {
    @apply underline underline-offset-8 decoration-gDarkPrimaryColor text-4xl font-changa pb-5 text-gDarkPrimaryColor;
  }

  .title {
    @apply underline underline-offset-8 decoration-gDarkPrimaryColor text-4xl font-changa pl-2 pb-5 text-gPrimaryColor;
  }

  .Subtitle {
    @apply text-3xl font-changa text-slate-300;
  }

  @media screen and (min-width: 900px) {
    .grid-container {
      display: grid;
      grid-template-columns: 60% 40%;
    }

    .grid-container-centered {
      display: grid;
      grid-template-columns: 50% 50%;
    }
  }

.PrimaryButton{
    @apply  bg-gPrimaryColor text-white font-bold ease-in-out  duration-200;
}
.PrimaryButton:hover{
    @apply  bg-gDarkPrimaryColor text-white font-bold;
}
.SecondaryButton {
    @apply border-2 border-gPrimaryColor bg-gLightPrimaryColor text-gPrimaryColor font-bold uppercase 
    ease-in-out  duration-200;
}
.SecondaryButton:hover {
    @apply border-2 border-gDarkPrimaryColor bg-gPrimaryColor text-gLightPrimaryColor;
}

</style>
