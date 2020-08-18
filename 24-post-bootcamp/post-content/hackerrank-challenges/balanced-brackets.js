

function isBalanced(s) {
  let hold = true // set a placeholder to get while loop started
  while (s.length != hold) { // set while loop condition
    hold = s.length; // set hold length
    console.log('N: ', hold)
    s = s.replace('()', ''); // if matching pair present, replace with ''
    console.log('S: ', s)
    s = s.replace('[]', ''); // if matching pair present, replace with ''
    console.log('S: ', s)
    s = s.replace('{}', ''); // if matching pair present, replace with ''
    console.log('S: ', s)
  }
  if (s.length == 0) {  // in theory, if all closed pairs are replaced, string is balanced
    return "YES"
  }
  else { // else, it isn't and return NO
    return "NO"
  }
}

console.log(isBalanced('{[()]}'))
console.log(isBalanced('{[(]]}'))
console.log(isBalanced('}][}}(}][))]'))
console.log(isBalanced('[](){()}'))
console.log(isBalanced('({}([][]))[]()'))
console.log(isBalanced('()'))
