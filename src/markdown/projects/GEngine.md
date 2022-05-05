# G-Engine a 2D Game Engine
<br>
<b>!! Work in progress !!</b> <br>
<br>

G-Engine is the first 2D engine I tried to make from scratch using C++. The engine upholds to the principle to prefer composition over inheritance. That’s why it uses a simple entity component system similar to the one Unity uses. The creation of this engine was accompanied by the remake of an old-time arcade classic “Burger Time”.
<img class="snap-center" src="https://ik.imagekit.io/gillianassi/G-Engine/BurgerTimeGamePlay_k1t5EY_50.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651694259815"/>

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
<br>

----------------------

<pre style='color:#000000;background:#ffffff;'><span style='color:#800000; font-weight:bold; '>class</span> AudioInterface
<span style='color:#800080; '>{</span>
<span style='color:#800000; font-weight:bold; '>public</span><span style='color:#e34adc; '>:</span>
	<span style='color:#800000; font-weight:bold; '>virtual</span> <span style='color:#808030; '>~</span>AudioInterface<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>default</span><span style='color:#800080; '>;</span>
	<span style='color:#800000; font-weight:bold; '>virtual</span> <span style='color:#800000; font-weight:bold; '>void</span> <span style='color:#400000; '>PlaySound</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>int</span> soundID<span style='color:#808030; '>)</span> <span style='color:#808030; '>=</span> <span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span>
	<span style='color:#800000; font-weight:bold; '>virtual</span> <span style='color:#800000; font-weight:bold; '>void</span> StopSound<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>int</span> soundID<span style='color:#808030; '>)</span> <span style='color:#808030; '>=</span> <span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span>
	<span style='color:#800000; font-weight:bold; '>virtual</span> <span style='color:#800000; font-weight:bold; '>void</span> StopAllSounds<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>=</span> <span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span>
	<span style='color:#800000; font-weight:bold; '>virtual</span> <span style='color:#800000; font-weight:bold; '>int</span> AddSound<span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>const</span> <span style='color:#666616; '>std</span><span style='color:#800080; '>::</span><span style='color:#603000; '>string</span><span style='color:#808030; '>&amp;</span> path<span style='color:#808030; '>)</span> <span style='color:#808030; '>=</span> <span style='color:#008c00; '>0</span><span style='color:#800080; '>;</span>
<span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>
</pre>
<!--Created using ToHtml.com on 2022-05-04 23:01:37 UTC -->
----------------------
<br>

>A User can easily insert or change to an audio implementation of choice using the Locater class.
<br><br>

----------------------
<pre style='color:#000000;background:#ffffff;'><span style='color:#800000; font-weight:bold; '>public</span><span style='color:#e34adc; '>:</span>
    <span style='color:#800000; font-weight:bold; '>static</span> AudioInterface<span style='color:#808030; '>&amp;</span> getAudio<span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span> <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#808030; '>*</span>m_pAudioProvider<span style='color:#800080; '>;</span> <span style='color:#800080; '>}</span>

    <span style='color:#800000; font-weight:bold; '>static</span> <span style='color:#800000; font-weight:bold; '>void</span> provide<span style='color:#808030; '>(</span>AudioInterface<span style='color:#808030; '>*</span> service<span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>

<span style='color:#800000; font-weight:bold; '>private</span><span style='color:#e34adc; '>:</span>
    <span style='color:#800000; font-weight:bold; '>static</span> AudioInterface<span style='color:#808030; '>*</span> m_pAudioProvider<span style='color:#800080; '>;</span>
    <span style='color:#800000; font-weight:bold; '>static</span> NullAudio m_AudioNullProvider<span style='color:#800080; '>;</span>
</pre>
<!--Created using ToHtml.com on 2022-05-04 23:03:59 UTC -->
<br>

----------------------
<pre style='color:#000000;background:#ffffff;'>NullAudio Locator<span style='color:#800080; '>::</span>m_AudioNullProvider<span style='color:#800080; '>;</span>
AudioInterface<span style='color:#808030; '>*</span> Locator<span style='color:#800080; '>::</span>m_pAudioProvider<span style='color:#800080; '>{</span> <span style='color:#808030; '>&amp;</span>m_AudioNullProvider <span style='color:#800080; '>}</span><span style='color:#800080; '>;</span>

<span style='color:#800000; font-weight:bold; '>void</span> Locator<span style='color:#800080; '>::</span>provide<span style='color:#808030; '>(</span>AudioInterface<span style='color:#808030; '>*</span> service<span style='color:#808030; '>)</span>
<span style='color:#800080; '>{</span>
    <span style='color:#800000; font-weight:bold; '>if</span> <span style='color:#808030; '>(</span>service <span style='color:#808030; '>=</span><span style='color:#808030; '>=</span> <span style='color:#800000; font-weight:bold; '>nullptr</span><span style='color:#808030; '>)</span>
    <span style='color:#800080; '>{</span>
        <span style='color:#696969; '>// return adress as an insurrance that this will never be nullptr</span>
        m_pAudioProvider <span style='color:#808030; '>=</span> <span style='color:#808030; '>&amp;</span>m_AudioNullProvider<span style='color:#800080; '>;</span>
    <span style='color:#800080; '>}</span>
    <span style='color:#800000; font-weight:bold; '>else</span>
    <span style='color:#800080; '>{</span>
        m_pAudioProvider <span style='color:#808030; '>=</span> service<span style='color:#800080; '>;</span>
    <span style='color:#800080; '>}</span>
<span style='color:#800080; '>}</span>
</pre>
<!--Created using ToHtml.com on 2022-05-04 23:04:55 UTC -->
----------------------
<br>

If this is not done, the Null object pattern is used to avoid that the game would crash. In this specific case, NullAudio represents the implementation of this pattern.
Furthermore, the Decorator pattern can be used to provide a wrapper to supply additional functionality. I’ve done this by creating a logged version of the base Audio which, additionally to playing the sound, also logs all function calls. This is very usefull for debugging purposes.
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
