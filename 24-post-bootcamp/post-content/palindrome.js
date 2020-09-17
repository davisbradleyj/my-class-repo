function isPalindrome(word) {
  // solve
  word = word.replace(/[\.\,\!\?\s]/g, '').toLowerCase()
  return (word.split('').reverse().join('') === word)
}

console.log(isPalindrome('Taco cat'))