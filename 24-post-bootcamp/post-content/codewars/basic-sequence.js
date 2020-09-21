// Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 
// of the arithmetic series explained above. 

//When < 0 return the sequence with negative terms.


function sumOfN(n) {
  // insert here your code
  let arr = [0]
  if (n > 0) {
    for (let i = 1; i <= n; i++)
      arr.push(arr[i - 1] + i)
      // console.log(arr)
  }
  if (n < 0) {
    n = n*-1
    for (let i = 1; i <= n; i++)
      arr.push(arr[i - 1] - i)
      console.log(arr)
  }
  return arr
};

console.log(sumOfN(-5))
// console.log(sumOfN(7))