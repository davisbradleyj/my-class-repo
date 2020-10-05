function addArrays(array1, array2) {
  if ((array1 = []) && (array2 = [])) {
    return []
  }
  let arraySum = parseInt(array1.join('')) + parseInt(array2.join(''))
  if (arraySum >= 0) {
    arraySum = arraySum.toString().split('')
    let sum = []
    for (let i = 0; i < arraySum.length; i++) {
      sum.push(parseInt(arraySum[i]))
    }
    return sum
  } else {
    arraySum = arraySum.toString().split('')
    let sum = []
    sum.push(parseInt(arraySum[1] * -1))
    for (let i = 2; i < arraySum.length; i++) {
      sum.push(parseInt(arraySum[i]))
    }
    return sum
  }
}

console.log(addArrays([6, 7], [6, 7]))
console.log(addArrays([3, 2, 6, 6], [-7, 2, 2, 8]))