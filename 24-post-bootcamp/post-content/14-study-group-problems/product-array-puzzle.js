// Given an array arr[] of n integers, construct a Product Array prod[] (of same size) 
// such that prod[i] is equal to the product of all the elements of arr[] except arr[i]. 
// Solve it without division operator in O(n) time.

function prodArr(arr) {
  const reducer = (acc, curr) => acc * curr
  let hold = arr.reduce(reducer)
  let newArr = []
  console.log(hold)
  for (let i = 0; i < arr.length; i++) {
    newArr.push(hold / arr[i])
  }
  return newArr
}

// console.log(prodArr([1, 2, 3]))

function productExceptSelf(arr) {
  // create array of left to right multipliers, which is basically the product for all previous values in arr up to arr[i]
  let prodArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      prodArr[i] = 1;
    } else {
      prodArr[i] = prodArr[i - 1] * arr[i - 1];
    }
  }
  console.log(prodArr)

  // create values for right to left multiplication of the prodArr values 
  let product;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i === arr.length - 1) {
      product = 1;
    } else {
      product = product * arr[i + 1];
    }
    prodArr[i] = prodArr[i] * product;
  }

  return prodArr;
}

console.log(productExceptSelf([2, 1, 5, 4, 3]))

function prodArr1(arr) {
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === 0) {
      
    }
  }
}

// console.log(prodArr([1, 2, 3]))