# Supervised Learning: Regression

This research was conducted to inform myself about artificial intelligence, more specifically, regression. I implemented a set of exercises with both self-generated data and existing data sets to get a better grasp of the subject. It focuses on the different types of regression algorithms, who try to predict dependent values based on known datasets. (mainly linear and logistic regression)<br>
For a more academical approach to this subject with more explenation, I would recommend visiting the following github link (https://github.com/gillianassi/ResearchProject_Regression), where I go over all my steps accompanied with links to the used code <br>
<br>

## Simple Linear regression
First, I analyzed the most commonly known form of linear regression called least squares fitting. This method aims to fit a polynomial curve to data in a way that the sum of squares of all distances from the data points to the line is minimized. When this is done on a single explanatory variable (Only one parameter), the method is called simple linear regression.
To understand the concept of simple linear regression I generated some experimental data adding artificial noise using the equation. <br>
y = a0 + a1 * x, where a0 = 2 and a1 = 1. This is shown in the following image, containing a yellow line indicating the computed linear regression:
<img class="snap-center" src="https://ik.imagekit.io/gillianassi/Research/Regression/SimpleLinearRegression_8azNrUgLj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651710302539"/>
<br><br>

## Gradient Descent
As we want to minimize the sum of squared residuals, we need an algorithm that could help us minimize these values.
Gradient descent is an algorithm that perfectly fits this purpose. The algorithm defines a base function by a set of parameters. After the initialization of such a set, it will gradually move towards a set of parameters that minimize a cost function using calculus.
I generated my own relevant data on which I implemented linear regression. The generated data tries to estimate the relation between age of a child and their height.
The implementation focusses on using the update rule to update the parameter θ. In the following image, the red line indicates the first calculated regression line after 1 iteration of the update rule. This is clearly an inaccurate representation of the dataset, but after 1478 iterations, both theta's have convoluted to a fixed value. The regression line found with these theta values is shown by the yellow line.
<img class="snap-center" src="https://ik.imagekit.io/gillianassi/Research/Regression/Example1GDSLR_TE9XgftoL.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651710536113"/>
This regression line can further be used to estimate the average height of children with a specific age, an example can be found in the code.<br><br>

Note that it is important to adjust the learning rate with different datasets. This can either make or break the linear regression.<br>
<br>

## Gradient descent visualization
By implementing the definition of the cost function, I was able to calculate all parameters and visualize them inside of a surface plot. The red line indicates the calculated parameters in the previous example. Note that this line can be found in the valley of the surface plot, where the cost function is at its lowest (which means the generated line optimally fits the data)
<img class="snap-center" src="https://ik.imagekit.io/gillianassi/Research/Regression/GradientDescent_RhBz63wz1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651710302569"/>
<br><br>

## Multivariate Linear regression
It is also possible to analyze the linear relation of multiple datasets. This is based on the same concept of the previous linear regression but adds extra variables to the field.
I visualized in a graph how the cost gets influenced by the learning rate.
<img class="snap-center" src="https://ik.imagekit.io/gillianassi/Research/Regression/MultivariateRegression_zkX3UQMNl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651710302552"/>
By analyzing the graph, we can assume that a small learning rate will cause the cost function to convolute too slowly. This increases the amount of iterations needed to reach the convoluted value of the cost function. However, this clearly does not mean you can simply increase the learning rate without consequences. By comparing the blue-striped line with the red-striped line, we can see how a higher learning rate can make the convergence slower or even impossible.
<br><br>

## Logistic regression
Logistic regression is a separate branch of supervised learning that focuses on classification problems. It builds a regression model that predicts the probability that a given data set belongs to a specific category. These are binary classification problems, which means that there are only two options: 0 or 1. The value 1 is often referred to as the positive class, whereas the value 0 the negative class.
I used Newton’s method to estimate the chances of students getting accepted into college based on their scores on two exams. It created a decision boundary between the admitted and not admitted student. 
<img class="snap-center" src="https://ik.imagekit.io/gillianassi/Research/Regression/NewtonsMethod_OpZynmfNa.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651710302813"/>
<br><br>
A clear decision boundary splits the two categories as accurately as possible with a linear line. Just like with gradient descent, we can see how the cost function converges to a minimum value. However, notice that it only takes 4 iterations for this method to converge compared to the 1500 iterations of gradient descent. This indicates that Newton's method is significantly faster than gradient descent.<br>
<br><br>

Finally, I used regularized logistic regression to create a decision boundary that indicates whether microchips from a fabrication plan passes Quality Assurance by means of two tests. Because two tests were used to assess the validation of the microchips, I had to adjust the cost function and gradient formulas. 
Also in this case, a fairly accurate decision boundary was able to separate most faulty microchips from the working ones.
<img class="snap-center" src="https://ik.imagekit.io/gillianassi/Research/Regression/RegulisedLogisticRegression_7r6x1Qkpy.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651710302550"/>
<br><br>

# Duration
1 month
