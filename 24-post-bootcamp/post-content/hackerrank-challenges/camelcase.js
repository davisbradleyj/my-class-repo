// There is a sequence of words in CamelCase as a string of letters, 's' , having the following properties:

// It is a concatenation of one or more words consisting of English letters.
// All letters in the first word are lowercase.
// For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
// Given 's', determine the number of words in 's'.

function camelcase(s) {
  let count = 1;
  let camel = s.split('')
  for (let i = 0; i<camel.length; i++) {
    if (camel[i] === camel[i].toUpperCase()) count++
  }
  return count
}

console.log(camelcase('saveChangesInTheEditor'))