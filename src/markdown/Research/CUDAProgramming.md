
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
            <h1 class="title">CUDA Threads</h1>
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
            <h1 class="title">CUDA Memories</h1>
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
    <p>Solutions coming soon!</p>
</div>
<br>

# Credits
 <a class="text-gPrimaryColor underline font-bold" href="https://www.cse.iitd.ac.in/~rijurekha/col730_2022/cudabook.pdf" target="_blank" rel="no-referrer">Massively Parallel Processors: A Hands-On Approach </a> (2010) by <i>David B. Kirk and Wen-mei W. Hwu</i>.
<br><br>
