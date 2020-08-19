// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag (str) {

  str = str.split(' ')
  let arrUpper = ['#']
  for (let i=0; i<str.length; i++) {
    arrUpper.push(str[i].charAt(0).toUpperCase() + str[i].slice(1))
    console.log(arrUpper)
  }
  arrUpper = arrUpper.join('')
  console.log(arrUpper)
  if (arrUpper.length > 140 || arrUpper.length < 2) {
    return false
  } else {
    return arrUpper
  }
}

console.log(generateHashtag("Do We have A Hashtag"))
console.log(generateHashtag("Codewars"))
console.log(generateHashtag("Codewars is nice"))