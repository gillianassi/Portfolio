<script>
  import Header from "../components/Header.svelte";
</script>

<div>
  <div class="bg-gBackgroundColor md:h-[90vh]">
    <div
      class="flex flex-col h-full gap-4 w-screen flex items-center justify-center "
    >
      <div class="flex w-full min-h-screen justify-center items-center">
        <div
          class="flex flex-col items-center space-y-6 bg-purple-100 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white
                      md:flex-row md:space-x-6 ms:space-y-0"
        >
          <div class="item-body p-4 max-w-prose text-black">
            <h1 class="title text-gPrimaryColor">GILLIAN ASSI</h1>
            <div class="text-justify p-3 w-prose">
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
                always been both a passion and hobby of mine. Thats why I became
                an <b class="text-gPrimaryColor">electronics-ICT engineer</b>
                and <b class="text-gPrimaryColor">Game Developer</b>.
              </p>
              <p>
                Past years, game implementations for <b
                  class="text-gPrimaryColor">VR development</b
                >
                and <b class="text-gPrimaryColor">Graphics Programming</b> became
                topics that intrigued me the most. However, I am always able to find
                joy in engine programming and designing game mechanics.
              </p>
            </div>
            <div class="pt-5 pl-10">
              <a href="https://drive.google.com/file/d/1uWvIqh3ZUkYAi5jaOaQLkjx9hSg3vQYw/view?usp=sharing"  target="_blank" >
                <button class="inline-block self-end bg-gPrimaryColor text-white font-bold rounded-lg 
                  px-6 py-2 uppercase text-m">
                  Download Resume
                </button>
              </a>
            </div>
          </div>
          <div class="profileImage">
            <img src="https://ik.imagekit.io/gillianassi/ProfilePicture_K4y6avmEt.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651757031924" 
            alt="Profile" class="rounded-lg shadow-xl"/>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-neutral-900 h-flex">
    <div
      class="font-mono text-7xl py-5 text-gSecondaryColor font-changa w-full text-center"
    >
      Extra Info
    </div>

    <div class="grid-container text-purple-200 pt-10 ">
      <div class="">
        <div id="Education" class="pt-10">
          <h1 class="title">Education</h1>

          <div class="overflow-x-auto relative shadow-md sm:rounded-lg pl-2 ">
            <table
              class="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr class="">
                  <th scope="col" class="py-3 px-6">Degree</th>
                  <th scope="col" class="py-3 px-6">Specialisation</th>
                  <th scope="col" class="py-3 px-6">Year</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <td
                    >Bachelor degree <b class="text-gPrimaryColor"
                      >Digital Arts & Entertainment</b
                    ></td
                  >
                  <td>Game Development</td>
                  <td>2020 - now</td>
                </tr>
                <tr
                  class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700"
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
                  class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
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
              class="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr class="">
                  <th scope="col" class="py-3 px-6">Language</th>
                  <th scope="col" class="py-3 px-6">Proficiency</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <td>C++</td>
                  <td>Advanced</td>
                </tr>
                <tr
                  class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td>C#</td>
                  <td>Advanced</td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <td>HLSL</td>
                  <td>Intermadiate</td>
                </tr>
                <tr
                  class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td>Matlab</td>
                  <td>Intermadiate</td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <td>SQL</td>
                  <td>Basic</td>
                </tr>
                <tr
                  class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td>php</td>
                  <td>Basic</td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <td>html/CSS</td>
                  <td>Basic</td>
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
              class="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr class="">
                  <th scope="col" class="py-3 px-6">Language</th>
                  <th scope="col" class="py-3 px-6">Proficiency</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <td>Visual Studios & Visual Code</td>
                  <td>Advanced</td>
                </tr>
                <tr
                  class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td>Unreal Engine</td>
                  <td>Advanced</td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <td>Unity</td>
                  <td>Advanced</td>
                </tr>
                <tr
                  class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td>Nvidia PhysX</td>
                  <td>Intermediate</td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <td>Oculus SDK</td>
                  <td>Basic</td>
                </tr>
                <tr
                  class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td>Git</td>
                  <td>Experienced</td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <td>Perforce</td>
                  <td>Experienced</td>
                </tr>

                <tr
                  class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <td>Autodesk Inventor</td>
                  <td>Intermediate</td>
                </tr>
                <tr
                  class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td>Autodesk Autocad</td>
                  <td>Intermediate</td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <td>Autodesk Maya</td>
                  <td>Intermediate</td>
                </tr>
                <tr
                  class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td>Adobe Photoshop</td>
                  <td>Intermediate</td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <td>Win32</td>
                  <td>Basic</td>
                </tr>
                <tr
                  class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td>Houdini</td>
                  <td>Basic</td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <td>Substance Painter</td>
                  <td>Basic</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="bg-black min-w-full rounded-lg pl-6 pt-10 pb-5">
        <h1 class="title ">Experience</h1>
        <div class="pl-6 bg-zinc-900 rounded-lg">
          <h1 class="Subtitle">Intern electronics Engineer (R&D)</h1>
          <div class="grid-container-centered">
            <div class="text-sm pl-2">
              <p class="">Specific tasks:</p>
              <ul class="list-disc marker:text-gPrimaryColor pl-10 pt-2 pb-2">
                <li>Writing test code for IoT-devices</li>
                <ul class="list-disc marker:text-purple-300 pl-10">
                  <li>Calibration techniques</li>
                  <li>Optimization</li>
                  <li>Process management</li>
                </ul>
                <li>Energy management van IoT-devices</li>
                <li>Implementing new features for IoT-devices</li>
                <li>Documenting code</li>
              </ul>
            </div>
            <div>
              <div class="text-sm pl-2">
                <p class="">Used Technologies:</p>
                <ul class="list-disc marker:text-gPrimaryColor pl-10 pt-2">
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
  </div>
</div>

<style>
  .profileImage { 
    width:50%; height:auto; 
    max-height: 300px;
    Padding: 5px;
    min-width: 50px;
}

  .headerSettings {
    height: calc(100vh * 4 / 5);
  }
  .grid-container {
  }

  .grid-container-centered {
  }

  .grid-container-listing {
    display: inline-grid;
    grid-template-columns: 80% 20%;
    @apply grid-rows-3;
  }

  .title {
    @apply underline underline-offset-8 decoration-purple-800 text-4xl font-changa pl-6 pb-5;
  }

  .Subtitle {
    @apply text-3xl font-changa pb-2;
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
</style>
