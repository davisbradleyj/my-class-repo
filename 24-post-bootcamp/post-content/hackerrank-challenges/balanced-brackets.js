

function isBalanced(s) {
  let hold = true // set a placeholder to get while loop started
  while (values.length != hold) { // set while loop condition
    hold = values.length; // set hold length
    console.log('N: ', hold)
    s = values.replace('()', ''); // if matching pair present, replace with ''
    console.log('S: ', s)
    s = values.replace('[]', ''); // if matching pair present, replace with ''
    console.log('S: ', s)
    s = values.replace('{}', ''); // if matching pair present, replace with ''
    console.log('S: ', s)
  }
  if (values.length == 0) {  // in theory, if all closed pairs are replaced, string is balanced
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
