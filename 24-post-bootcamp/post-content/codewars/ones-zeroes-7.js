const binaryArrayToNumber = arr => {
  let count = 0
  if (arr[arr.length - 1] === 1) {
    count += 1
  }
  if (arr[arr.length - 2] === 1) {
    count += 2
  }
  if (arr[arr.length - 3] === 1) {
    count += 4
  }
  if (arr[arr.length - 4] === 1) {
    count += 8
  }
  if (arr[arr.length - 5] === 1) {
    count += 16
  }
  if (arr[arr.length - 6] === 1) {
    count += 32
  }
  if (arr[arr.length - 7] === 1) {
    count += 64
  }
  if (arr[arr.length - 8] === 1) {
    count += 128
  }
  return count;
}

function binaryArrayToNumber2(arr) {
  return parseInt(arr.join(""), 2)
}