<script>
    import Header from '../components/Header.svelte';
    import IoMdMail from 'svelte-icons/io/IoMdMail.svelte'
    import {FaItchIo, FaGithub, FaLinkedin} from 'svelte-icons/fa';
</script>

<div class="bg-gBackgroundColor h-[100vh]">
    <div class="flex flex-col h-full gap-4 w-screen flex items-center justify-center ">

        <div class="flex w-full min-h-screen justify-center items-center">
            <div class="flex flex-col items-center space-y-6 bg-purple-100 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white
                        md:flex-row md:space-x-6 ms:space-y-0">
                    <div class="flex flex-col justify-between gap-8">
                        <hi class="font-bold text-4xl tracking-wide text-gPrimaryColor">Contact me</hi>
                        <div class="relative w-24 ">
                            <img class="rounded-lg border border-gray-100 shadow-xl " src="https://ik.imagekit.io/gillianassi/ProfilePicture_K4y6avmEt.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651757031924" alt="user image" />
                            <div class="absolute top-0 right-0 h-6 w-6 my-1 border-4 border-white rounded-full bg-green-400 z-2"></div>
                        </div>
                        <div class="text-black text-sm">
                            <p>
                                Feel free to contact me with any questions, feedback, or job offers. <br> 
                            </p> 
                            <b>
                                Looking for an internship during Spring 2023.
                            </b>
                        </div>
                        
                        <div>
                            <div class="socials inline-flex items-center gap-4 self-end">
                                <span class="">
                                    
                                    <a class="socials" href="mailto:assigillian@gmail.com"><IoMdMail/></a>
                                </span>
                                <a class="text-purple-800 socials" href="mailto:assigillian@gmail.com">assigillian@gmail.com</a>
                            </div>
                        </div>
                        <div class="socials flex gap-4 ">
                            <span>
                                <a href="https://github.com/gillianassi" target="_blank" rel="no-referrer"><FaGithub /></a>
                            </span>
                            <span>
                                <a href="https://www.linkedin.com/in/gillianassi/" target="_blank" rel="no-referrer"><FaLinkedin/></a>
                            </span>
                            <span>
                                <a href="https://gillianassi.itch.io/" target="_blank" rel="no-referrer"><FaItchIo/></a>
                            </span>
                        </div>
                    </div>
                        
                <div>
                    <div class="container bg-purple-200 rounded-xl shadow-lg p-8 text-gray-600  md:w-80">
                        <form  class="flex flex-col space-y-4" action="https://formsubmit.co/assigillian@gmail.com" method="POST">
                            <div>
                                <label for="" class="text-sm">Your Name</label>
                                <input type="text" name="name" placeholder="Samus Aran" class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none 
                                focus:ring-2 focus:ring-purple-400" required> 
                            </div> 
                            <div>
                                <label for="" class="text-sm">Email Adress</label>
                                <input type="email" name="email" placeholder="SamusAran@gmail.com" class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none 
                                focus:ring-2 focus:ring-purple-400" required>
                            </div> 
                            <div>
                                <label for="" class="text-sm">Subject</label>
                                <input type="text" name="_subject" placeholder="Dream Job Oppurtunity" class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none 
                                focus:ring-2 focus:ring-purple-400" required>
                            </div>
                            <div>
                                <label for="" class="text-sm">Message</label>
                                <textarea  name="message"placeholder="I used to be an adventurer like you..." rows="4" class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2Q outline-none 
                                focus:ring-2 focus:ring-purple-400" required></textarea>
                            </div>
                            <input type="hidden" name="_autoresponse" value="This is an automatic response. You've Succesfully sent a mail to assigillian@gmail.com. I will try to reply as soon as possible!">
                            <button class="inline-block self-end bg-gPrimaryColor text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
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
  
    .headerSettings {
        height: calc(100vh * 4 / 5);
    }

    .socials span{
        @apply h-8 text-gPrimaryColor transition-all;
    }
    .socials span:hover {
       @apply text-purple-800;
    }
</style>