
<script>
    import {FaGithub} from 'svelte-icons/fa';
</script>

<div class="socials flex  " style="padding-bottom:20px;">
     <b style="padding-right:20px; padding-top:5px">Github Page</b>
    <span>
        <a  href="https://github.com/gillianassi/ResearchProject_Regression" target="_blank" rel="no-referrer"><FaGithub />
        </a>
    </span>
</div>

# Supervised Learning: Regression


<div id="markdownBody">
    <div class="grid-container grid-centered-container reversed-col-content">
        <div>
            <h1 class="title">Description</h1>
            <p>
            This research was conducted to inform myself about artificial intelligence, more specifically, regression. I implemented a set of exercises with both self-generated data and existing data sets to get a better grasp of the subject. It focuses on the different types of regression algorithms, who try to predict dependent values based on known datasets. <br>Feel free to visit the <a class="text-gPrimaryColor underline font-bold" href="https://github.com/gillianassi/ResearchProject_Regression" target="_blank" rel="no-referrer">Github page</a> for a more elaborate explenation.
            </p>
        </div>
        <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Research/Regression/Linear-vs-Multiple-Regression-02-min_L9CJMuYX4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661776191112" alt="Action Shot"  width="auto" />
    </div>
    <div class="grid-container grid-centered-container">
        <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Research/Regression/SimpleLinearRegression_8azNrUgLj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651710302539" alt="Action Shot"  width="auto" />
        <div>
            <h1 class="title">Simple Linear Regression</h1>
            <p>
                First, I analyzed the most commonly known form of linear regression called least squares fitting. This method aims to fit a polynomial curve to data in a way that the sum of squares of all distances from the data points to the line is minimized. When this is done on a single explanatory variable (Only one parameter), the method is called simple linear regression.
                To understand the concept of simple linear regression I generated some experimental data adding artificial noise using the equation.
                y = a0 + a1 * x, where a0 = 2 and a1 = 1.
            </p>
        </div>
    </div>
    <div class="grid-container grid-centered-container reversed-col-content">
        <div>
            <h1 class="title">Gradient Descent</h1>
            <div>
                <p>
                    As we want to minimize the sum of squared residuals, we need an algorithm that could help us minimize these values.
                    Gradient descent is an algorithm that perfectly fits this purpose. The algorithm defines a base function by a set of parameters. After the initialization of such a set, it will gradually move towards a set of parameters that minimize a cost function using calculus.
                    I generated my own relevant data on which I implemented linear regression. The generated data tries to estimate the relation between age of a child and their height.
                </p>
            </div>
        </div>
         <img class="rounded-3xl shadow-xl" src="https://ik.imagekit.io/gillianassi/Research/Regression/Example1GDSLR_TE9XgftoL.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651710536113" alt="Action Shot"  width="auto" />
    </div>
    <div class="grid-container grid-centered-container">
        <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Research/Regression/GradientDescent_RhBz63wz1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651710302569" alt="Action Shot"  width="500px" />
        <div>
            <h1 class="title">Gradient descent visualization</h1>
            <p>
                By implementing the definition of the cost function, I was able to calculate all parameters and visualize them inside of a surface plot. The red line indicates the calculated parameters in the previous example. Note that this line can be found in the valley of the surface plot, where the cost function is at its lowest (which means the generated line optimally fits the data)
            </p>
        </div>
    </div>
    <div class="grid-container grid-centered-container reversed-col-content">
        <div>
            <h1 class="title">Multivariate Linear regression</h1>
            <div>
                <p>
                    It is also possible to analyze the linear relation of multiple datasets. This is based on the same concept of the previous linear regression but adds extra variables to the field.
                    I visualized in a graph how the cost gets influenced by the learning rate.
                </p>
            </div>
        </div>
         <img class="rounded-3xl shadow-xl" src="https://ik.imagekit.io/gillianassi/Research/Regression/MultivariateRegression_zkX3UQMNl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651710302552" alt="Action Shot"  width="auto" />
    </div>
    <div class="grid-container grid-centered-container">
        <img class="rounded-3xl shadow-xl"  src="https://ik.imagekit.io/gillianassi/Research/Regression/NewtonsMethod_OpZynmfNa.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651710302813" alt="Action Shot"  width="500px" />
        <div>
            <h1 class="title">Logistic regression</h1>
            <p>
                Logistic regression is a separate branch of supervised learning that focuses on classification problems. It builds a regression model that predicts the probability that a given data set belongs to a specific category. These are binary classification problems, which means that there are only two options: 0 or 1. The value 1 is often referred to as the positive class, whereas the value 0 the negative class.
                I used Newton’s method to estimate the chances of students getting accepted into college based on their scores on two exams. It created a decision boundary between the admitted and not admitted student. 
            </p>
        </div>
    </div>
    <div class="grid-container grid-centered-container reversed-col-content">
        <div>
            <h1 class="title">Regularised Logistic regression</h1>
            <div>
                <p>
                    Finally, I used regularized logistic regression to create a decision boundary that indicates whether microchips from a fabrication plan passes Quality Assurance by means of two tests. Because two tests were used to assess the validation of the microchips, I had to adjust the cost function and gradient formulas. 
                    Also in this case, a fairly accurate decision boundary was able to separate most faulty microchips from the working ones.
                </p>
            </div>
        </div>
         <img class="rounded-3xl shadow-xl" src="https://ik.imagekit.io/gillianassi/Research/Regression/RegulisedLogisticRegression_7r6x1Qkpy.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651710302550" alt="Action Shot"  width="auto" />
    </div>
</div>
<br>

# Credits
 <a class="text-gPrimaryColor underline font-bold" href="https://sdsclub.com/linear-regression-vs-multiple-regression-know-the-difference/" target="_blank" rel="no-referrer">sdsclub</a> for the regression image
<br><br>

# Duration
1 month
