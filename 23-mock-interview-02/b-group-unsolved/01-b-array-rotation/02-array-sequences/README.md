# INTERVIEW QUESTIONS

## Return the consecutive sets - medium

## Instructions
Given a sorted array of integers, return the same integers broken down into consecutive sequences.

## Example
Given [1,2,3,6,7,8,15,18,19,21,22,23], we want to return [[1,2,3],[6,7,8],[15],[18,19],[21,22,23]]. 

In short, we want to return an array of arrays. Each sub-array should only contain consecutive, non-sorted integers. If an integer does not have a consecutive neighbor, it should be in a sub array of its own, like the 15 in the example above.

## Optimal time
O(n)

## Hints
- You need to iterate through the array of numbers
- How do you check if something is in sequence?
- Have a sub-array you're using to track the current sequence
- When a number isn't part of the current sequence, you push the previous array and start a new sub-array


// iterate through array 
// instantiate a sub array
// push the first element into sub array
// for each element i, check that the following element is = to n+1, if true, push into subarray
// if following element is not equal to n+1, start new sub array with element added
// continue for all elements

