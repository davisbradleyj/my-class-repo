// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, 
// and returns the same string with all even indexed characters in each word upper cased, 
// and all odd indexed characters in each word lower cased. 
// The indexing just explained is zero based, so the zero-ith index is even, 
// therefore that character should be upper cased.

// The passed in string will only consist of alphabetical characters and spaces(' '). 
// Spaces will only be present if there are multiple words. 
// Words will be separated by a single space(' ').

function toWeirdCase(string){
  // break apart string, capitalize first letter of work
  const str = string.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  console.log(str)
  // intantiate new array to hold words from string
  let newStr = [];
  for (let i=0; i<str.length; i++) {
    // placeholder array for letters of each word
    let hold = []
    for (let j=0; j<str[i].length; j++) {
      if (j == 0 || j%2 == 0 ) {
        hold.push(str[i][j].toUpperCase()); // push first letter from each word, and capitalized even index letters
      } 
      else {
        hold.push(str[i][j]) // push lower case letters to holding array
      }
      console.log(hold)
    }
    newStr.push(hold.join('')) // group all letters in the hold array together w/out space, push into newStr array
    console.log(newStr)
  }
  return newStr.join(' ') // return all words in the newStr array with a space between words
}

console.log(toWeirdCase( "String" ));
console.log(toWeirdCase( "Weird string case" ));