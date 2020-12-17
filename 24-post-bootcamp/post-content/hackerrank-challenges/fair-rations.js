function fairRations(B) {
  // if the sum of B is odd, there is no way to ensure 'even' rations are distributed
  // iterate through array and sum the elements in the array
  let sum = 0
  for (let i = 0; i < B.length; i++) {
    sum += B[i]
  }
  if (sum % 2 !== 0) return 'NO'
  // iterate through array increasing the value of B[i] and B[i+1]
  let count = 0;
  for (let i = 0; i < B.length; i++) {
    if (B[i]%2 !== 0) {
      B[i]++;
      B[i+1]++;
      count += 2;
      // console.log("B[i]: "+ B[i] + ", B[i+1]: " + B[i+1] + ", Count: " + count)
    }
  }
  return count;
}

