function vowelMultiplier(n, str) {
  // solve
  // loop over char in str
  // check for voesl
  // duplicate vowels n times
  // return string w dupes
  return str.split('').map(c => c.match(/[aeiouy]/g) ? c.repeat(n) : c).join('')

}

console.log(vowelMultiplier(3, 'Hello World'))