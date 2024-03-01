# Multithreaded Software raytracer

This software raytracer can render both simple geometry (such as triangles spheres and planes) and meshes. In this method, multiple rays are shot from the camera outwards to check if they collide with any geometry. How much an object is lit is simulated by checking if a ray, emitted from a light source, reaches that object. The influence of this light is calculated using the Lambert Cosine Law.
Because this, as a software raytracer, was computationally heavy I subdivided the rays onto multiple threads. This was a huge optimization and made the application significantly smoother. Although there is still a lot of room for improvement.<br><br>

# Used Technologies
\-	C++<br>
\-	Visual Studios <br>
\-	Perforce<br>
<br>

# Duration
1 month
