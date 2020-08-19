// Complete the marsExploration function in the editor below. 
// It should return an integer representing the number of letters changed during transmission.

// marsExploration has the following parameter(s):

// s: the string as received on Earth

function marsExploration(s) {
  let count = 0
  for (let i=0; i<s.length; i+=3) {
    if (s[i] != 'S') {
      count++
    }
  }
  for (let j=1; j<s.length; j+=3) {
    if (s[j] != 'O') {
      count++
    }
  }
  for (let k=2; k<s.length; k+=3) {
    if (s[k] != 'S') {
      count++
    }
  }
  return count
}

console.log(marsExploration('SOSSPSSQSSOR'))
console.log(marsExploration('SOSSOSSOS'))