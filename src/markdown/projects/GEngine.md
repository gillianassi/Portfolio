
<script>
    import {FaItchIo, FaGithub} from 'svelte-icons/fa';
</script>


<div class="socials flex  " style="padding-bottom:20px;">
     <b style="padding-right:20px; padding-top:5px">Github Page</b>
    <span>
        <a href="https://github.com/gillianassi/G-Engine" target="_blank" rel="no-referrer"><FaGithub />
        </a>
    </span>
</div>

# G-Engine a 2D Game Engine
<br>
<b>!! Work in progress !!</b> <br>
<br>

G-Engine is the first 2D engine I tried to make from scratch using C++. The engine upholds to the principle to prefer composition over inheritance. That’s why it uses a simple entity component system similar to the one Unity uses. The creation of this engine was accompanied by the remake of an old-time arcade classic “Burger Time”.
<img class="snap-center" src="https://ik.imagekit.io/gillianassi/Projects/G-Engine/BurgerTimeBanner_OtFYc4aTz.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651708378406"/>

External includes:<br>
\-	SDL<br>
\-	OpenGL<br>
\-	Box2D<br>
\-	ImGUI<br>
<br>

## Entity component system
All game objects are represented as entities containing components. These components are used to give the entities their preferred behavior. This system makes it easy to isolate code, resulting in a more readable structure.
<br>

## Command pattern
The command pattern is used as an object-oriented replacement for callbacks. The engine has an abstract Command class which a user can easily use as an interface to create unique commands. These commands can further be passed down to the input manager provided by the engine, which will bind these action commands to input commands.
<br>

## Observer pattern
Although this is not specifically implemented in the engine, Burgertime itself makes use of the observer pattern to handle in game events.
<br>

## Service Locater 
The engine uses a service locater to provide global access services like Sound and input without coupling users to the class that implements it. Instead, the only thing a user needs to know is an interface. This way, many different implementations of providers can be created in the engine following this interface, without the user noticing any difference.
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

>A User can easily insert or change to an audio implementation of choice using the Locater class.
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

If this is not done, the Null object pattern is used to avoid that the game would crash. In this specific case, NullAudio represents the implementation of this pattern.
Furthermore, the Decorator pattern can be used to provide a wrapper to supply additional functionality. I’ve done this by creating a logged version of the base Audio which, additionally to playing the sound, also logs all function calls. This is very usefull for debugging purposes.

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

## Pointer to implementation
The Pimpl technique has been used to remove implementation details of classes such as SDL_Mixer for the BaseAudio class and Xinput  to separate dependencies between the engine and the game
<br>

# Used Technologies
•	C++
•	Visual Studios
•	Github
<br>

# Credits
C++ coding Standards: 101 Rules, Guidelines, and Best practices” by Andrei Alexandrescu and Herb Sutter
“Game Programming Patterns” by Bob Nystrom 
<br>

# Duration
Over the timespan of 1 semester (research included)
