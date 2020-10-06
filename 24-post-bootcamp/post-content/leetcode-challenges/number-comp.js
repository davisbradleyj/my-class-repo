var findComplement = function(num) {
  let bin = (num >>> 0).toString(2)
  bin = bin.split('')
  let revBin = []
  for (let i=0; i<bin.length; i++) {
    if (bin[i] === '1') {
      revBin.push('0')
    }
    else {
      revBin.push('1')
    }
  }
  return parseInt(revBin.join(''),2)
};
console.log(findComplement(5));