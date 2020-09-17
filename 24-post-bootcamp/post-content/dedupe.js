function dedupe(arr) {
  // solve
  // loop over array
  // track each unique
  // remove duplicate
  // return unique array

  let newArr = [];
  for (let i=0; i<arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i])
    }
  }
  return newArr

  // also!!!!
  // return Array.from(new Set(arr))
}

console.log(dedupe('pepperoni'))