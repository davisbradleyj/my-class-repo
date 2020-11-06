function wave(str) {
  str = str.split('');
  let waveArr = [];
  for (let i = 0; i < str.length;) {
    let temp = [];
    if (str[i] === ' ') {
      i++;
    } else {
      for (let j = 0; j < str.length; j++) {
        if (i === j && str[j] !== ' ') {
          temp.push(str[j].toUpperCase());
        } else if (i === j && str[j] === ' ') {
          temp.push(' ')
        }
        else {
          temp.push(str[j]);
        }
      }
      i++;
    }
    waveArr.push(temp.join(''));
    for (let k = 0; k < waveArr.length; k++) {
      if (waveArr[k] === '') {
        waveArr.splice(k, 1)
      }
    }
  }
  return waveArr;
}

console.log(wave('two words'))
console.log(wave(' gap '))

function wave2(str) {
  let waveArr = [];
  for (let i=0; i<str.length; i++ ){
    let temp = str.split('')
    if (temp[i] !== ' ') {
      temp[i] = temp[i].toUpperCase()
      waveArr.push(temp.join(''))
    }
  }
  return waveArr;
}

console.log(wave2('two words'))
console.log(wave2(' gap '))
