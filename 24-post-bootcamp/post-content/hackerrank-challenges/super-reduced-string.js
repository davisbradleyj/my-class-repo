function superReducedString(s) {
  let str = s.split('')
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j] && i+1 == j) {
        str.splice(j, 1);
        str.splice(i, 1);
        i-=2;
      }
    }  
  }
  if (str.length === 0) {
    return 'Empty String'
  } else {
    return str.join('') 
  }    
}
console.log(superReducedString('aaabccddd'))
console.log(superReducedString('baab'))
console.log(superReducedString('txxmubonuhlaryeuujgftedrmmhmaadxrplneqpwhsketqicdpqlecluydmgykrubgmpwfqviabkjoiqdftbbwwgiuudmgrdbkrr'))