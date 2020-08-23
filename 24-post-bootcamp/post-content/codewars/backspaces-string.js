// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.


function cleanString(s) {
  let temp = []
  s = s.split('')
  console.log(s)
  for (let i=0; i<s.length; i++) {
    if (s[i] != '#') {
      console.log('i: ',i)
      temp.push(s[i])
      console.log('temp:',temp)
    } else if (s[i] == '#') {
      console.log('i: ',i)
      temp.splice(temp.length-1,1)
      console.log('temp:',temp)
    }
  }
  if (temp == []) {
    return []
  } else {
    return temp.join('')
  }
};

console.log(cleanString('abc#d##c'))
console.log(cleanString('abc####d##c#'))