function whatCentury(year) {
  let x = parseInt(year)
  x++
  let century = x.toString().split('').slice(0,2).join('')
  if (century == 20) {
    return '21st'
  } else if (century == 21) {
    return '22nd'
  } else if (century == 22) {
    return '23rd'
  } else if (century == 30) {
    return '31st'
  } else if (century == 31) {
    return '32nd'
  } else if (century == 32) {
    return '33rd'
  } else if (century == 40) {
    return '41st'
  } else if (century == 41) {
    return '42nd'
  } else if (century == 42) {
    return '43rd'
  } else if (century == 50) {
    return '51st'
  } else if (century == 51) {
    return '52nd'
  } else if (century == 52) {
    return '53rd'
  } else if (century == 60) {
    return '61st'
  } else if (century == 61) {
    return '62nd'
  } else if (century == 62) {
    return '63rd'
  } else if (century == 70) {
    return '71st'
  } else if (century == 71) {
    return '72nd'
  } else if (century == 72) {
    return '73rd'
  } else if (century == 80) {
    return '81st'
  } else if (century == 81) {
    return '82nd'
  } else if (century == 82) {
    return '83rd'
  } else if (century == 90) {
    return '91st'
  } else if (century == 91) {
    return '92nd'
  } else if (century == 92) {
    return '93rd'
  } else {
    century++
    return century+'th'
  }
}

console.log(whatCentury("2111"))
console.log(whatCentury("1999"))