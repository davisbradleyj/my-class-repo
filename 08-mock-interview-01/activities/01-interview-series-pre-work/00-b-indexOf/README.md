# INTERVIEW QUESTIONS

## `Index-Of`

## Instructions
Given an array and an element, find the index of that element in the array. If it does not exist in the array, return -1. If there are multiple occurences of that element in the array, return the index of first occurence

We will be recreating the native JS `indexOf` function from scratch.

## Example
Test Case 1: [1, 2, 1, 3, 2, 4, 2, 3, 3, 1, 3, 3], 3  

*Expected Output: **3***

Test Case 2: [1, 2, 3, 4], 5  

*Expected Output: **-1***


Step One:

Q: What are you going to do? 

A: iterate through the array

Q: How are you going to do it? 

A: a for loop (for (var i=0; i<arr.length;i++>)

Q: Why are you going to do it? 

A: review the contents of the array

Step Two: 

Q: What are you going to do? 

A: return the index of an element, if they match

Q: How are you going to do it? 

A: if statement where arr[i]===element

Q: Why are you going to do it? 

A: confirm a matching value

Step Three: 

Q: What are you going to do? 

A: return a -1 if no matches are found

Q: How are you going to do it? 

A: close the if statement, use return -1

Q: Why are you going to do it? 

A: if no value was returned by the previous step, the element must not exist in the array, therefore the index is -1