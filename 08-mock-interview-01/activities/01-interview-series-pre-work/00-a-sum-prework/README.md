# INTERVIEW QUESTIONS

## Instructions

### Pseudocoding

Complete the Pseudocode for the following Algorithmic Prompts. Pseudocode entails *describing the necessary steps to solve the problem using programming principles* as opposed to *hard-coding* it out. 

**No Coding**

Each step of your algorithm you should make the following items clear: 

```
What are you going to do?
How are you going to do it? 
Why are you going to do it?
```

<hr>

## Prompt #1 `sum`

Create a function `calculateSum` that takes in an array of integers. 

Your function returns the sum of all integers within the input array.

Note: Complete only the Pseudocode.

### Example

Test Case 1: [1, 2, 5]  
*Expected Output: **8***

Test Case 2: [1, 2, 3, 4]  
*Expected Output: **10***

Test Case 3: [100, 50, 75, 80]  
*Expected Output: **305***

## List You Pseudocode Below: `sum`


Step One:

Q: What are you going to do? 

A: create a variable to store the summed values from given array

Q: How are you going to do it? 

A: establish a varaible "sum"

Q: Why are you going to do it? 

A: this will allow values in the array to be tracked

Step Two: 

Q: What are you going to do? 

A: establish conditions for a loop / "itereate through an array"

Q: How are you going to do it? 

A: using a for looop

Q: Why are you going to do it? 

A: to capture every element in array

Step Three: 

Q: What are you going to do? 

A: add each the value of each index point of the array to sum, and return that value

Q: How are you going to do it? 

A: += operator, then return

Q: Why are you going to do it? 

A: to calculate the sum of all values in the array, return value and end function



<hr>


## Prompt #2 `mean`

Create a function `mean` that takes in an array of integers as an argument. 

Your function returns the `mean` / `average` for all integers within the input array.

The mean is the average of a set of numbers, so use your `calculateSum` function defined in Prompt #1 and sum all numbers and then divide by the total number of integers in the input array. 


Note: Complete only the Pseudocode.

### Example
Test Case 1: [1, 2, 5]  
*Expected Output: **2.666...***

Test Case 2: [1, 2, 3, 4]   
*Expected Output: **2.5***

Test Case 3: [100, 50, 75, 80]  
*Expected Output: **76.25***

## List You Pseudocode Below: `mean`


Step One:

Q: What are you going to do? 

A: create a vaiable to store the mean value

Q: How are you going to do it? 

A: establish variable "mean"

Q: Why are you going to do it? 

A: this will allow "mean" to store the calculation of the function

Step Two: 

Q: What are you going to do? 

A: assign mean to be the result of calculateSum divided by arr.length

Q: How are you going to do it? 

A: mean = calculateSum/arr.length

Q: Why are you going to do it? 

A: basic arithmetic logic of a total divided by the number of entries to calculate mean

Step Three: 

Q: What are you going to do? 

A: return the solution (mean)

Q: How are you going to do it? 

A: return mean (coded)

Q: Why are you going to do it? 

A: output the result of our function for review/confirmation


<hr>

## Prompt #3 `median`

Create a function `median` that takes in an array of integers as an argument. 

Your function returns the median of your input array.

The median is the middle value, so first you will have to sort the numbers then find the middle value


Note: Complete only the Pseudocode

## List You Pseudocode Below: `median`


Step One:

Q: What are you going to do? 

A: reorder array to ensure the contents are in arranged from lowest interger to largest interger

Q: How are you going to do it? 

A: create a function to iterate through array

Q: Why are you going to do it? 

A: in order to accurately determine the median, we first need to have our array ordered properly

Step Two: 

Q: What are you going to do? 

A: create a function to determine the median of the reordered array

Q: How are you going to do it? 

A: introduce variables to be used to calculate median (median) and hold the previously sorted array

Q: Why are you going to do it? 

A: to determine the median, we need to know the middle index of an array

Step Three: 

Q: What are you going to do? 

A: determine if there are an even or odd number of elements in the array

Q: How are you going to do it? 

A: calculate if there is a remainder when dividing the array length by 2.

Q: Why are you going to do it? 

A: If there is a remainder, there are an odd number of elements in array, and . Else, the two middle indices need to be subjected to the function to determine their mean

Step 4

Q: What are you going to do? 

A: calculate mean of middle two index values ([i] and [i-1]) for an even number of array elements

Q: How are you going to do it? 

A: calculate mean function

Q: Why are you going to do it? 

A: this gives us our mean for an array with an even number of elements

Step 5

Q: What are you going to do? 

A: round down on the result of dividing the array.length for an odd numbered array by 2

Q: How are you going to do it? 

A: math.floor, using that number as the array[index]

Q: Why are you going to do it? 

A: this gives us our index number for an odd numbered array, which should be the mean



### Example


Test Case 1: [12, 3 ,5]    
*Expected Output: **5***

Test Case 2: [3, 13, 7, 5, 21, 23, 39, 23, 40, 23, 14, 12, 56, 23, 29]  
*Expected Output: **23***

Test Case 3: [3, 5, 7, 12, 13, 14, 21, 23, 23, 23, 23, 29, 40, 56]  
*Expected Output: **22***

*Note:* In the case where the total number of data points is even, take the average of the two middle numbers.

Test Case 4: [3, 4, 7, 9]  
*Expected Output: **5.5***



<hr>


<hr>

## Prompt #4 `mode`

Create a function `mode` that takes in an array of integers as an argument. 

Your function returns the mode of your input array.


The mode is the number that is repeated more often than any other.


Note: Complete only the Pseudocode.

## List You Pseudocode Below: `mode`


Step One:

Q: What are you going to do? 

A: examine array

Q: How are you going to do it? 

A: create a function to iterate through array

Q: Why are you going to do it? 

A: 

Step Two: 

Q: What are you going to do? 

A: 

Q: How are you going to do it? 

A: 

Q: Why are you going to do it? 

A: 

Step Three: 

Q: What are you going to do? 

A: 

Q: How are you going to do it? 

A: 

Q: Why are you going to do it? 

A: 

### Example
Test Case 1: [13, 18, 13, 14, 13, 16, 14, 21, 13]  
*Expected Output: **13***

Test Case 2: [1, 3, 1, 1, 8]  
*Expected Output: **1***

Test Case 3: [2, 14, 9, 10, 18, 14]  
*Expected Output: **14***

Test Case 4: [2, 3, 4, 5, 6]   
*Expected Output: **2*** 

*Note:* In the case where all the integers appear with the same frequency, take the first one.

<hr>
