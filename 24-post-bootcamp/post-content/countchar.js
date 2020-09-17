function countChar(char, str) {
  // solve
  // iterate over char in str
  // count amounf of a char
  // return amount
  let count = 0
  for (let i = 0; i < str; i++) {
    if (str[i] === char) {
      count++
    }
  }
  return count 
}

function countChar2(char, str) {
  // solve
  // iterate over char in str
  // count amounf of a char
  // return amount
  return str.split('').filter(c => c===char).length
}

console.log(countChar('p','pepperoni'))