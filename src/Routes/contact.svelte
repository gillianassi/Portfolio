<script>
    import Header from '../components/Header.svelte';
    import IoMdMail from 'svelte-icons/io/IoMdMail.svelte'
    import {FaItchIo, FaGithub, FaLinkedin} from 'svelte-icons/fa';
</script>

<div class="bg-gBackgroundColor">
    <div class="flex flex-col h-full gap-4 w-screen flex items-center justify-center ">

        <div class="flex w-full min-h-screen justify-center items-center ">
            <div class="flex flex-col items-center gap-4" >
                
                <hi class="underline underline-offset-8 decoration-gLightPrimaryColor text-4xl font-changa pl-6 pb-5 text-gLightPrimaryColor ">
                    Contact me
                </hi>
                <div class="flex flex-col items-center space-y-6  w-full max-w-4xl
                        md:flex-row md:space-x-6 ms:space-y-0">
                    
                        <div class="flex flex-col justify-between gap-8 ">
                        <div class="flex flex-col items-center">
                            <div class="relative profileImage">
                                <img class="rounded-lg border border-gray-100 shadow-xl " src="https://ik.imagekit.io/gillianassi/ProfilePicture_K4y6avmEt.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651757031924" alt="   " />
                            </div>
                        </div>
                        
                        <div class="flex flex-col items-center gap-4">
                            <div>
                                <a class="" href="mailto:assigillian@gmail.com">
                                    <div class="socials inline-flex items-center gap-2 self-end">
                                        <IoMdMail/>
                                        <p>
                                            assigillian@gmail.com
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div class="flex gap-4 ">
                                <div class="socials">
                                    <a href="https://github.com/gillianassi" target="_blank" rel="no-referrer"><FaGithub /></a>
                                </div>
                                <div class="socials">
                                    <a href="https://www.linkedin.com/in/gillianassi/" target="_blank" rel="no-referrer"><FaLinkedin/></a>
                                </div>
                                <div class="socials">
                                    <a href="https://gillianassi.itch.io/" target="_blank" rel="no-referrer"><FaItchIo/></a>
                                </div>
                            </div>
                        </div>
                    </div> 
                <div class="md:pl-0 pr-10 pl-5 ">
                    <div class="container bg-gLightPrimaryColor rounded-xl shadow-lg p-8 text-gray-600 md:w-100">
                        <p class="text-gray-700">
                            Feel free to contact me with any questions, feedback, or job offers. <br> 
                        </p> 
                        <form  class="flex flex-col pt-2 space-y-4" action="https://formsubmit.co/assigillian@gmail.com" method="POST">
                            <div>
                                <label for="" class="text-sm">Your Name</label>
                                <input type="text" name="name" placeholder="Samus Aran" 
                                class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none 
                                focus:ring-2 focus:ring-gPrimaryColor" required> 
                            </div> 
                            <div>
                                <label for="" class="text-sm">Email Adress</label>
                                <input type="email" name="email" placeholder="SamusAran@gmail.com" 
                                class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none 
                                focus:ring-2 focus:ring-gPrimaryColor" required>
                            </div> 
                            <div>
                                <label for="" class="text-sm">Subject</label>
                                <input type="text" name="_subject" placeholder="Dream Job Oppurtunity" 
                                class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none 
                                focus:ring-2 focus:ring-gPrimaryColor" required>
                            </div>
                            <div>
                                <label for="" class="text-sm">Message</label>
                                <textarea  name="message"placeholder="I used to be an adventurer like you..." rows="2" 
                                class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none 
                                focus:ring-2 focus:ring-gPrimaryColor" required></textarea>
                            </div>
                            <input type="hidden" name="_autoresponse" value="This is an automatic response. You've Succesfully sent a mail to assigillian@gmail.com. I will try to reply as soon as possible!">
                            <button class="inline-block self-end rounded-lg px-6 py-2 PrimaryButton">
                                Submit Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
            
        </div>

      
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
    width:40%; height:auto; 
    max-height: 430px;
    padding: 5px;
    min-width: 50px;
}
    .socials {
        @apply h-6 text-gLightPrimaryColor transition-all ease-in-out  duration-200;
    }
    .socials:hover {
       @apply text-gPrimaryColor;
    }
    
    .PrimaryButton{
    @apply  bg-gPrimaryColor text-white font-bold ease-in-out  duration-200 uppercase;
    }

    .PrimaryButton:hover{
    @apply  bg-gDarkPrimaryColor text-white font-bold;
    }
</style>