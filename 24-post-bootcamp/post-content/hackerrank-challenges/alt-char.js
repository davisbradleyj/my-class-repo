//ou are given a string containing characters 'A' and 'B' only. 
// Your task is to change it into a string such that there are no matching adjacent characters. 
// To do this, you are allowed to delete zero or more characters in the string.
// Your task is to find the minimum number of required deletions.

function alternatingCharacters(s) {
  let arr = s.split('')
  let count = 0;
  let check = arr[0]
  for (let i=1; i<arr.length; i++) {
      if (arr[i] == check) { // no need to delete from array, just count
        count++
      } else { // reset the checked value
        check = arr[i]
      }
  }
  return count
}

console.log(alternatingCharacters('AABAAB'))