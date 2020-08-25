


function hourGlass(arr) {
  let total = -Infinity;
  let sum;
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      // sum the top line of hourglass
      sum = arr[y][x] + arr[y][x + 1] + arr[y][x + 2];
      // get the middle value of hourglass
      sum += arr[y + 1][x + 1];
      // sum the bottom line of hourglass
      sum += arr[y + 2][x] + arr[y + 2][x + 1] + arr[y + 2][x + 2]
      if (total < sum) {
        total = sum;
      }
    }
  }
  return total;
}