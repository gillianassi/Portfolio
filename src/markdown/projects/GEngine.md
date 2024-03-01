
<script>
    import {FaGithub} from 'svelte-icons/fa';
</script>

<div class="flex" style="padding-bottom:20px;">
    <div class="flex pr-5">
        <a href="https://github.com/gillianassi/G-Engine" target="_blank" rel="no-referrer">
            <div class="flex items-center LinkWrapper">
                <div>
                <b style="padding-left:5px; padding-right:10px; ">GitHub Page</b>
                </div>
                <div class="padding-right:20px h-6 ">
                    <FaGithub/>
                </div >
            </div>
        </a>
    </div>
</div>

# G-Engine a 2D Game Engine

<div id="markdownBody">
    <div class="grid-container grid-centered-container reversed-col-content">
        <div class="w-full">
            <h1 class="title">Description</h1>
            <p>
            G-Engine is the first 2D engine I tried to make from scratch using C++. The engine upholds the principle of preferring composition over inheritance. That’s why it uses a simple entity component system similar to the one Unity uses. The creation of this engine was accompanied by the remake of an old-time arcade classic “Burger Time”.
            </p>
        </div>
        <div class="justify-center">
            <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/G-Engine/BurgerTimeBanner_OtFYc4aTz.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651708378406" alt="Action Shot"  width="300" />
        </div>
    </div>
    <div class="grid-container grid-centered-container">
        <div class="justify-center">
            <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/G-Engine/opengl_logo_OWyUSjjBe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661773296157" alt="Action Shot"  width="auto" />
        </div>
        <div class="w-full">
            <h1 class="title">External Includes</h1>
            <ul class="list-disc marker:text-gPrimaryColor pl-10">
                <li>SDL</li>
                <li>OpenGL</li>
                <li>Box2D</li>
                <li>ImGUI</li>
            </ul>
        </div>
    </div>
    <div class="grid-container grid-centered-container reversed-col-content">
        <div class="w-full">
            <h1 class="title">Covered Topics</h1>
            <ul class="list-disc marker:text-gPrimaryColor pl-10">
                <li>Entity component system</li>
                <li>Command pattern</li>
                <li>Observer pattern</li>
                <li>Pointer to implementation</li>
                <li>Service Locator</li>
            </ul>
        </div>
         <div class="justify-center"> 
            <img class="rounded-3xl shadow-xl" src="https://ik.imagekit.io/gillianassi/Projects/G-Engine/Burger_Time_Uldat3P1yF.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661773296097" alt="Action Shot"  width="auto" />
        </div>
    </div>
    <div class="grid-container grid-centered-container">
        <div class="justify-center">
            <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/G-Engine/Unity_Technologies_logo.svg_koQ3UZCQN.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661774014225" alt="Action Shot"  width="500px" />
        </div>
        <div class="w-full">
            <h1 class="title">Simple Component system</h1>
            <p>
                Based on Unity's component hierarchy, all game objects in G-Engine are represented as entities containing components. These components are used to give the entities their preferred behaviour. This system makes it easy to isolate code, resulting in a more readable structure. I do stress that the component system used in this project is just a simple version to show its uses.
            </p>
        </div>
    </div>
    <div class="grid-container grid-centered-container reversed-col-content">
        <div class="w-full">
            <h1 class="title">Command Pattern</h1>
            <p>
                The command pattern is used as an object-oriented replacement for callbacks. The engine has an abstract Command class which a user can easily use as an interface to create unique commands. These commands can further be passed down to the input manager provided by the engine, which will bind these action commands to input commands.
            </p>
        </div>
         <div class="justify-center">
            <img class="rounded-3xl shadow-xl" src="https://ik.imagekit.io/gillianassi/Projects/G-Engine/command-en-3x_qBLP8Ymt5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661774210767" alt="Action Shot"  width="500" />
         </div>
    </div>
    <div class="grid-container grid-centered-container">
        <div class="justify-center">
            <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Projects/G-Engine/observer-3x_-l1b1J1T5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661774275526" alt="Action Shot"  width="500px" />
        </div>
        <div class="w-full">
            <h1 class="title">Observer Pattern</h1>
            <p>
                Although this is not specifically implemented in the engine, Burgertime itself makes use of the observer pattern to handle in-game events.
            </p>
        </div>
    </div>
</div>
<br>

## Pointer to implementation
The Pimpl technique has been used to remove implementation details of classes such as SDL_Mixer for the BaseAudio class and Xinput  to separate dependencies between the engine and the game

## Service Locator 
The engine uses a service locator to provide global access services like Sound and input without coupling users to the class that implements it. Instead, the only thing a user needs to know is an interface. This way, many different implementations of providers can be created in the engine following this interface, without the user noticing any difference.
The following code snippets will show how I implemented this for sound.
I use an audio interface to provide the interface that users need to know about.
<br><br>

----------------------
<br>

```cpp
class AudioInterface
{
public:
	virtual ~AudioInterface() = default;
	virtual void PlaySound(int soundID) = 0;
	virtual void StopSound(int soundID) = 0;
	virtual void StopAllSounds() = 0;
	virtual int AddSound(const std::string& path) = 0;
};
```

<br>

-------------------------
<br>

>A User can easily insert or change to an audio implementation of choice using the Locator class.
<br><br>

----------------------
<br>


```cpp

class Locator
{
public:

    Locator() = delete;
    ~Locator() = delete;
    Locator(const Locator& other) = delete;
    Locator(Locator&& other) = delete;
    Locator& operator=(const Locator& other) = delete;
    Locator& operator=(Locator&& other) = delete;

    static AudioInterface& getAudio() { return *m_pAudioProvider; }

    static void provide(AudioInterface* service);

private:
    static AudioInterface* m_pAudioProvider;
    static NullAudio m_AudioNullProvider;

};
```

<br>

----------------------
<br>

If this is not done, the Null object pattern is used to avoid crashes. In this specific case, NullAudio represents the implementation of this pattern.
Furthermore, the Decorator pattern can be used to provide a wrapper to supply additional functionality. I’ve done this by creating a logged version of the base Audio which, additionally to playing the sound, also logs all function calls. This is very useful for debugging purposes.

<br>

----------------------
<br>

```cpp
class NullAudio : public AudioInterface
{
public:
	NullAudio() = default;
	virtual ~NullAudio() = default;
	virtual void PlaySound(int) {}
	virtual void StopSound(int) {}
	virtual void StopAllSounds() {}
	virtual int AddSound(const std::string&) { return -1; }
};
```
<br>

----------------------
<br>

# Used Technologies
<div>
    <ul class="list-disc marker:text-gPrimaryColor pl-10">
        <li>C++</li>
        <li>Visual Studios</li>
        <li>Github</li>
    </ul>
</div> 
<br>


# Credits

<div>
    <ul class="list-disc marker:text-gPrimaryColor pl-10">
        <li>"C++ coding Standards: 101 Rules, Guidelines, and Best Practices" by Andrei Alexandrescu and Herb Sutter</li>
        <li>"Game Programming Patterns” by Bob Nystrom </li>
        <li><a class="text-gPrimaryColor underline font-bold" href="https://refactoring.guru/design-patterns/command" target="_blank" rel="no-referrer">Refactoring Guru</a> for the provided drawings and amazing explanation about design patterns</li>
    </ul>
</div> 
<br>

# Duration
Over the timespan of 1 semester (research included)
