
<script>
    import GiWhiteBook from 'svelte-icons/gi/GiWhiteBook.svelte'
</script>

<div class="flex" style="padding-bottom:20px;">
    <div class="flex pr-5">
        <a href="https://www.cse.iitd.ac.in/~rijurekha/col730_2022/cudabook.pdf" target="_blank" rel="no-referrer">
            <div class="flex items-center LinkWrapper">
                <div>
                <b style="padding-left:5px; padding-right:10px; ">Learning Source</b>
                </div>
                <div class="padding-right:20px h-6 ">
                    <GiWhiteBook/>
                </div >
            </div>
        </a>
    </div>
</div>
<div  class="rounded-xl shadow-lg p-4 text-center" style="background-color:rgba(75, 0, 0, 0.1)">
    <div class="text-align: center">
        <b>Work in Progress</b><br>
        This page is being updated as I read. <br>
        New chapters coming soon!
    </div>
</div>
<br>

# Programming Massively Parallel Processors


<div id="markdownBody">
    <div class="grid-container grid-centered-container reversed-col-content">
        <div class="w-full">
            <h1 class="title">Description</h1>
            <p>
            To deepen my understanding of both modern and historical GPU architectures, I am reading <b>Massively Parallel Processors: A Hands-On Approach</b> (1st edition) by David B. Kirk and Wen-mei W. Hwu. The book provides an in-depth look at parallel computing principles, GPU hardware design, and efficient programming techniques, with a strong emphasis on <b>CUDA</b>. It covers key topics such as memory hierarchy, thread execution models, performance optimization, and real-world applications of massively parallel processing. <br>
            <br>
            Rather than summarizing the book, I will use this blog to <b>document my thoughts and approaches to its exercises</b>. My goal is to reinforce my understanding through hands-on experimentation and provide insights into practical problem-solving in GPU programming.
            </p>
        </div>
        <div class="justify-center">
            <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Research/CUDA/CUDABook_ZvUSfcFBM.jpg?updatedAt=1741634230138" alt="Action Shot"  width="auto" />
        </div>
    </div>
    <div class="grid-container grid-centered-container">
        <div class="justify-center">
            <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Research/CUDA/CUDAThreads_jG976Pr_r.png?updatedAt=1741643970860" alt="Action Shot"  width="auto" />
        </div>
        <div class="w-full">
            <h1 class="title">CH4: CUDA Threads</h1>
            <p>
                CUDA’s kernel execution configuration defines <b>grids and blocks</b>, with each thread identifying itself using <i>blockIdx</i> and <i>threadIdx</i>. Programmers must carefully structure threads and data to ensure efficient processing.<br> 
                <br>
                While CUDA’s grid-based execution scales transparently, threads in different blocks cannot synchronize unless a new kernel is launched.<br>
                <br>
                Blocks are dynamically assigned to <b>streaming multiprocessors</b> (SMs), where they are further divided into <b>warps</b>. This warp-based execution helps hide latency by keeping some warps active while others wait, ensuring smooth and efficient processing.
            </p>
        </div>
    </div>
    <div>
        <h1 class="title">Solutions Chapter 4</h1>
        <div>
            <h2 class="subtitle">Exercise 4.1</h2>
            <p>
                <i>A student mentioned that he was able to multiply two 1024 x 1024 matrices using a tiled matrix multiplication code with 1024 thread blocks on the G80. He further mentioned that each thread in a thread block calculates one element of the result matrix. What would be your reaction and why?</i><br>
            </p>
            <h2 class="subsubtitle">Solution</h2>
            <p>
                Considering that a 1024 × 1024 matrix multiplication results in <i>1,048,576 output elements</i>, the student claims to have used <i>1024 thread blocks</i> and assigned one thread per element. Since the total number of threads must match the number of output elements, this implies that <i>each thread block contains 1024 threads</i>.<br>
                In this chapter, we've also learned the following key limitations of the G80:
            </p>
            <ul class="list-disc marker:text-gPrimaryColor pl-10 pt-4">
                <li>Max <b>768 threads</b> per SM</li>
                <li>Max <b>8 thread blocks</b> per SM</li>
                <li>Max <b>512 threads</b> per block</li>
                <li>The G80 has <b>16 SMs</b></li>
            </ul><br>
            <p>
                Since 1024 threads per block exceed the maximum of 768, the kernel configuration is invalid and cannot run on a G80.<br>
            </p>
            <h2 class="subsubtitle">Extra</h2>
            <p>
                However, let's analyze what happens when 1024 thread blocks are launched.<br>
                If we distribute 1024 blocks across 16 SMs, we get <b>64 blocks per SM</b>. Since each block has 1024 threads, the total number of threads per SM would be <b>65,536 threads</b>. This far exceeds the 768-thread limit per SM, making the configuration not possible.
            </p>
            <h2 class="subsubtitle">Conclusion</h2>
            <p>
                <b>The student's claim is incorrect</b>. The thread block size must be reduced to at most 768 threads to fit within the hardware limits.<br>
                A valid alternative would be to restructure the computation by assigning multiple threads per matrix element or distributing the work differently across blocks.
                <br><br>
            </p>
        </div>
        <div>
            <h2 class="subtitle">Exercise 4.2</h2>
            <p>
                <i>The following kernel is executed on a large matrix, which is tiled into submatrices. To manipulate tiles, a new CUDA programmer has written the following device kernel to transpose each tile in the matrix. The tiles are of size BLOCK_SIZE by BLOCK_SIZE, and each of the dimensions of matrix A is known to be a multiple of BLOCK_SIZE. The kernel invocation and code are shown below. BLOCK_SIZE is known at compile time but could be set anywhere from 1 to 20.</i><br>
            </p><br>
        </div>
    </div>
</div>

```cpp
dim3 blockDim(BLOCK_SIZE,BLOCK_SIZE);
dim3 gridDim(A_width/blockDim.x,A_height/blockDim.y);
BlockTranspose<<<gridDim, blockDim>>>(A, A_width, A_height);
__global__ void BlockTranspose(float* A_elements, int A_width, int A_height)
{
    __shared__ float blockA[BLOCK_SIZE][BLOCK_SIZE];
    int baseIdx = blockIdx.x * BLOCK_SIZE + threadIdx.x;
    baseIdx += (blockIdx.y * BLOCK_SIZE + threadIdx.y) * A_width;
    blockA[threadIdx.y][threadIdx.x] = A_elements[baseIdx];
    A_elements[baseIdx] = blockA[threadIdx.x][threadIdx.y];
}
```
<br>
<div id="markdownBody">
    <div>
        <p><i>Out of the possible range of values for BLOCK_SIZE, for what values of BLOCK_SIZE will this kernel function correctly when executing on the device?</i>
        </p> 
        <br>
        <h2 class="subsubtitle">Solution</h2>
        <p>
            The given CUDA kernel attempts to perform an in-place transpose of tiles of size BLOCK_SIZE × BLOCK_SIZE in a matrix. However, there is a critical issue with this implementation that causes incorrect execution for certain values of BLOCK_SIZE.
            <br><br>
            The kernel correctly loads elements from the global memory matrix <i>A_elements</i> into shared memory <i>blockA[threadIdx.y][threadIdx.x]</i>. However, immediately after, it attempts to store <i>blockA[threadIdx.x][threadIdx.y]</i> back into <i>A_elements</i>. <br>
            <b>Shared memory accesses are not synchronized between reading and writing.</b> When BLOCK_SIZE is larger than 1, some threads may read blockA[threadIdx.x][threadIdx.y] before the corresponding data is written.
        </p>
        <h2 class="subsubtitle">Conclusion</h2>
        <p>The original kernel is only correct for <b>BLOCK_SIZE = 1</b>. Larger values for BLOCK_SIZE will lead to incorrect results.</p>
    </div>
    <br>
    <div>
        <h2 class="subtitle">Exercise 4.3</h2>
        <p>
            <i>If the code does not execute correctly for all BLOCK_SIZE values, suggest a fix to the code to make it work for all BLOCK_SIZE values.</i><br>
        </p><br>
        <h2 class="subsubtitle">Solution</h2>
        <p>
            There should be a __syncthreads() call after loading data into blockA before transposing and writing back. Without synchronization, data races may occur. The corrected kernel would look as follows:
        </p><br>
    </div>
</div>

```cpp
dim3 blockDim(BLOCK_SIZE,BLOCK_SIZE);
dim3 gridDim(A_width/blockDim.x,A_height/blockDim.y);
BlockTranspose<<<gridDim, blockDim>>>(A, A_width, A_height);
__global__ void BlockTranspose(float* A_elements, int A_width, int A_height) {
    __shared__ float blockA[BLOCK_SIZE][BLOCK_SIZE];
    int baseIdx = blockIdx.x * BLOCK_SIZE + threadIdx.x;
    baseIdx += (blockIdx.y * BLOCK_SIZE + threadIdx.y) * A_width;

    // Load data into shared memory
    blockA[threadIdx.y][threadIdx.x] = A_elements[baseIdx];

    // Synchronize before accessing shared memory for transposition
    __syncthreads();

    // Write transposed data back to global memory
    int transposedIdx = blockIdx.y * BLOCK_SIZE + threadIdx.x;
    transposedIdx += (blockIdx.x * BLOCK_SIZE + threadIdx.y) * A_width;
    A_elements[transposedIdx] = blockA[threadIdx.x][threadIdx.y];
}
```
<br>
<div id="markdownBody">
    <div>
        <h2 class="subsubtitle">Extra</h2>
        <p>
            If the kernel were executed on the <b>NVIDIA G80 GPU</b>, the primary limiting factor would be the thread block constraints.<br>
            Each thread block in this kernel has BLOCK_SIZE × BLOCK_SIZE threads. To ensure it runs correctly, BLOCK_SIZE × BLOCK_SIZE must be less than or equal to 512. This means the largest valid BLOCK_SIZE is approximately 22.6. The largest integer value is 22, ensuring that <b>all valid BLOCK_SIZE values function correctly on the G80</b>.
        </p>
    </div>
</div>
<br>

<div id="markdownBody">
    <div class="grid-container grid-centered-container reversed-col-content">
        <div class="w-full">
            <h1 class="title">CH5: CUDA Memories</h1>
            <p>
                CUDA provides faster memory types compared to global memory, such as <b>registers, shared memory, and constant memory</b>. Efficient use of these requires algorithm redesign. 
                <br><br>We explored tiled algorithms with matrix multiplication to optimize data locality and shared memory usage. However, <b>memory size limits affect thread execution</b>, making hardware awareness crucial.
            </p>
        </div>
        <div class="justify-center">
            <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Research/CUDA/CUDA_Memories_jgyD1oDMO.png?updatedAt=1741647964487" alt="Action Shot"  width="auto" />
        </div>
    </div>
</div>
<div>
    <h1 class="title">Solutions Chapter 5</h1>
    <div>
        <h2 class="subtitle">Exercise 5.1</h2>
        <p>
            <i>Consider the matrix addition where each element of the output matrix is the sum of the corresponding elements of the two input matrices. Can one use shared memory to reduce the global memory bandwidth consumption? Hint: Analyze the elements accessed by each thread and see if there is any commonality between threads.</i><br>
        </p>
        <h2 class="subsubtitle">Solution</h2>
    </div>
</div>

```c
C[i,j]=A[i,j]+B[i,j]
```
<br>
<div>
    <div>
        <p>
            Let's start by analysing the access pattern for a matrix addition:
        </p>
        <ul class="list-disc marker:text-gPrimaryColor pl-10 pt-4">
            <li><b>Each thread</b> in a CUDA kernel <b>computes one element</b> of the output matrix.</li>
            <li> To compute this, the <b>thread reads one element from each</b> of the two <b>input matrices</b>.</li>
            <li>Since each thread works on a unique output element, there is <b>no overlap in elements accessed</b>.</li>
        </ul>
        <p>
            In general, for memory we know that:
        </p>
        <ul class="list-disc marker:text-gPrimaryColor pl-10 pt-4">
            <li>Accessing <b>shared memory</b> is <i>very fast</i> and <i>highly parallel</i>, but also <i>very small</i> (<i>16KB for the G80 and GT200</i>).</li>
            <li><b>Global memory</b> is <i>slow</i> but <i>large</i> (<i>768MB on the G80 and 1024MB on the GT200</i>).</li>
            <li><i><b>Shared memory</b> is useful when threads within a block can <b>reuse the same data to avoid global memory loads</b></i>.</li>
        </ul>
        <br>
        <p>
            With this information, we can easily see how <b>caching the input elements in shared memory provides no benefit</b> since threads access distinct elements during matrix additions. Using shared memory would actually <i>add an unnecessary copying overhead</i> step, where data is loaded from global memory into shared memory to only be used by one single thread.<br><br>
            For optimizing Matrix additions, it is rather advised to focus on ensuring <b>coalesced</b> memory access to maximize global memory bandwidth efficiency.
        </p>
        <h2 class="subsubtitle">Conclusion</h2>
        <p>
            Shared memory is <b>not beneficial</b> in this case since we don't reuse input elements across threads.
            <br><br>
        </p>
    </div>
    <div>
        <h2 class="subtitle">Exercise 5.2</h2>
        <p><i>Draw the equivalent of Figure 5.4 for an 8×8 matrix multiplication with 2×2 tiling and 4×4 tiling. Verify that the reduction in global memory bandwidth is indeed proportional to the dimension size of the tiles.</i>
        </p>
        <h2 class="subsubtitle">Solution</h2>
        <p>
            Let's first start by understanding Figure 5.4 provided by the book:<br>
        </p>
        <div class="center">
            <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Research/CUDA/MatrixMultiplication_GlobalMemoryAccess_QvirlRAKu.png?updatedAt=1745913293597" alt="Figure 5.4: MatrixMultiplication_GlobalMemoryAccess"  width="auto" />
        </div><br>
        <p>
            This figure is based on a 4×4 matrix multiplication and uses four 2×2 blocks to compute the Pd Matrix. It shows the global memory accesses done by all threads in block(0,0). The figure is intended to visualise how:
        </p>
        <ul class="list-disc marker:text-gPrimaryColor pl-10 pt-4">
            <li>Each 2×2 tile is computed using <i>4 threads</i>.</li>
            <li>Each thread <i>performs 4 multiply-add</i> operations</li>
            <li><b>Threads in the same block access overlapping data</b>, which means <b>shared memory can reduce global memory loads by a factor of the tile dimension</b>. In this case, memory traffic can be cut in half.</li>
        </ul><br>
        <p>
            We get the following representation of the global memory access performed by threads in block (0,0) by applying 2×2 tiling for an 8×8 Matrix in <i>Figure 5.A</i>:
        </p>
        <div class="center">
            <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Research/CUDA/GMA_2x2_h5OLgnI0s.png?updatedAt=1745932868555" alt="Figure 5.A: MatrixMultiplication_GlobalMemoryAccess_2x2"  width="auto" />
        </div><br>
        <p>
            Similalry to <i>igure 5.4</i>, our Figure 5.A tells us the following:
        </p>
        <ul class="list-disc marker:text-gPrimaryColor pl-10 pt-4">
            <li>Each <i>row of M</i> can be <i>reused across 2 threads</i>.</li>
            <li>Each <i>column of N</i> can be <i>reused across 2 threads</i>.</li>
            <li>This means that <i>each element</i> of M and N <i>is accessed twice per tile</i></li>
            <li><b>Memory traffic can be cut in half</b> by using shared memory.</li>
        </ul><br>
        <p>
            The following tables in <i>Figure 5.B</i> showcase the global memory access performed by threads in block (0,0) by applying 4×4 tiling for an 8×8 Matrix: 
        </p>
        <div class="center">
            <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Research/CUDA/GMA_4x4_0_sKtMysro2q.png?updatedAt=1745932868817" alt="Figure 5.B0: MatrixMultiplication_GlobalMemoryAccess_4x4_0"  width="auto" />
        </div><br>
        <div class="center">
            <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Research/CUDA/GMA_4x4_1_oQi6k6M-8.png?updatedAt=1745932868554" alt="Figure 5.B1: MatrixMultiplication_GlobalMemoryAccess_4x4_1"  width="auto" />
        </div><br>
        <div class="center">
            <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Research/CUDA/GMA_4x4_3_LrurqN4wKK.png?updatedAt=1745932868742" alt="Figure 5.B2: MatrixMultiplication_GlobalMemoryAccess_4x4_2"  width="auto" />
        </div><br>
        <div class="center">
            <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Research/CUDA/GMA_4x4_2_G_JWmYg6-.png?updatedAt=1745932868546" alt="Figure 5.B3: MatrixMultiplication_GlobalMemoryAccess_4x4_3"  width="auto" />
        </div><br>
        <p>
            From <i>figure 5.B</i> we can observe that:
        </p>
        <ul class="list-disc marker:text-gPrimaryColor pl-10 pt-4">
            <li>Each <i>row of M</i> can be <i>reused across 4 threads</i>.</li>
            <li>Each <i>column of N</i> can be <i>reused across 4 threads</i>.</li>
            <li>This means that <i>each element</i> of M and N <i>is accessed four times per tile</i></li>
            <li><b>Memory traffic can be reduced to a quarter</b> by using shared memory.</li>
        </ul><br>
        <h2 class="subsubtitle">Extra</h2>
        <p>
            Does that mean there are no limits to tiling? Obviously not. For starters, <b>shared memory is limited</b>. On older GPUs like the G80, you only get 16KB per Streaming Multiprocessor. If the tile dimension gets too big, your tile won't fit. Additionally, <b>too many threads can exceed register limits or reduce occupancy</b>. More threads lead to more registers per block which, in turn, lead to fewer blocks that can run in parallel.
        </p>
        <h2 class="subsubtitle">Conclusion</h2>
        <p>
            By seeing how <i>2×2 tiling</i> can introduce an <i>improvement of x2</i>, and <i>4×4 tiling</i> can yield an <i>improvement of x4</i>, we can conclude that <b>the reduction in global memory bandwidth is indeed proportional to the dimension size of the tiles</b>.
            <br><br>
        </p>
    </div>
    <div>
        <h2 class="subtitle">Exercise 5.3</h2>
        <p><i>What type of incorrect execution behavior can happen if one forgets to use __syncthreads() function in the kernel of Figure 5.7? Note that there are two calls to __syncthreads(), each for a different purpose.</i>
        </p>
        <h2 class="subsubtitle">Solution</h2>
        <p>
            The Kernel provided was as followed:
        </p>
        <div class="center">
            <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Research/CUDA/MatrixMulKernel_VBLlnYwjV.png?updatedAt=1745936827163" alt="Figure 5.7: MatrixMulKernel"  width="auto" />
        </div><br>
        <p>
            The <i>__Syncthreads()</i> function is critical in ensuring propper synchronization between threads in a block when using shared memory. Removing them makes your code prone to data hazards, leading to unexpected behavior in the CUDA kernel.<br>
            <br>
            The first synchronisation in <b>line 10</b> ensures that all threads have <b>completed loading tiles of Md and Nd into the shared memory</b> before that data gets used.<br>
            Not using this syncronisation can lead to the following:
        </p>
        <ul class="list-disc marker:text-gPrimaryColor pl-10 pt-4">
            <li>Some threads might already start computing (<i>line 11</i>) and access Mds or Nds, while others might still be loading their part of the tiles into the shared memory.</li>
            <li>This means that <b>partial- or uninitialized values might be read</b>, leading to incorrect results.</li>
        </ul><br><br>
        <p>
            The second synchronization in <b>line 13</b> ensures that <b>all threads are finished using the current tiles of Mds and Nds before starting with the next itteration of the loop</b> <i>where they get overwritten with the next tile form global memory</i>.<br>
            Not synchronizing could lead to the following:
        </p>
        <ul class="list-disc marker:text-gPrimaryColor pl-10 pt-4">
            <li>Some threads might start overwriting the shared memory with new data, while others are still using the old data for computation</li>
            <li>This introduces <b>race conditions</b>, where the <i>data being used in the computation might be corrupted</i>.</li>
        </ul><br><br>
        <h2 class="subsubtitle">Conclusion</h2>
        <p>
            If one forgets to use the <i>__Syncthreads()</i> function in the kernel of <i>Figure 5.7</i>, on might expect to <b>read partial- or uninitialized data</b>, accompanied by <b>race conditions</b> when overwriting data.
            <br><br>
        </p>
    </div>
    <div>
        <h2 class="subtitle">Exercise 5.4</h2>
        <p><i>Assuming that capacity were not an issue for registers or shared memory, give one case that it would be valuable to use shared memory instead of registers to hold values fetched from global memory. Explain your answer.</i>
        </p>
        <h2 class="subsubtitle">Solution</h2>
        <p>
            In general, shared memory is preferred over registers in scenarios where <b>data needs to be shared or reused across multiple threads within a block</b>.<br><br>
            One example of this is matrix multiplication like we saw before. In this situation, threads within a block work together to compute a tile. Each thread <b>loads a portion of the input data into shared memory</b> and uses that memory to <b>compute a part of the output</b> matrix.<br>
            If <b>registers</b> were used instead, this shared behaviour could not be benefited from since registers are <b>private to each thread</b>. It would require each thread to load all the required data on its own, leading to redundant global memory transactions and poor performance.<br>
            <b>Shared data</b>, on the other hand, <b>reduces redundant global memory accesses</b> by allowing threads to collectively <i>load and reuse data for computations</i>, improving overall efficiency.
        </p>
        <h2 class="subsubtitle">Conclusion</h2>
        <p>
            Shared memory can reduce global memory bandwidth usage and leverage its high speed to improve kernel performance in situations where <b>data sharing and reuse</b> among threads in the same block are required. This proves to be most useful for block-level parallel tasks such as matrix multiplication, or tiled matrix transpose.
            <br><br>
        </p>
    </div>
</div>
<div>
    <div class="grid-container grid-centered-container">
        <div class="justify-center">
            <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Research/CUDA/PerformanceConsiderations_lem1SZEQg.png?updatedAt=1745960134082" alt="Figure 6.16: MeasuredPerformanceTechniques"  width="auto" />
        </div>
        <div class="w-full">
            <h1 class="title">CH6: Performance Considerations</h1>
            <p>
                Chapter 6 discusses how optimizing matrix multiplication on GPUs involves several techniques such as <b>tiling, loop unrolling, prefetching, and adjusting thread granularity</b>. Among these, <b>tile size</b> plays the biggest role. Larger tiles can <i>reduce memory bottlenecks</i>, making other optimizations more effective. By carefully combining these techniques, the performance can drastically be improved, though they must be <b>balanced</b> to avoid hardware limits.
            </p>
        </div>
    </div>
    <h1 class="title">Solutions Chapter 6</h1>
    <p>Solutions coming soon!</p>
</div>
<br>

# Credits
 <a class="text-gPrimaryColor underline font-bold" href="https://www.cse.iitd.ac.in/~rijurekha/col730_2022/cudabook.pdf" target="_blank" rel="no-referrer">Massively Parallel Processors: A Hands-On Approach </a> (2010) by <i>David B. Kirk and Wen-mei W. Hwu</i>.
<br><br>
