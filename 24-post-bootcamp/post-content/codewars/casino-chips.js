function solve(arr) {
  let count = 0
  arr.sort((a, b) => a - b)
  let i = arr[0];
  let j = arr[1];
  let k = arr[2];
  while (i>0) {
    if (k == j) {
      j--;
      i--;
      count++;
    } else {
      k--;
      i--;
      count++;
    }
  } 
  while (j>0) {
    k--;
    j--;
    count++;
  }
  return count;
}

console.log(solve([12, 12, 12]))