function getTotalX(a, b) {
  let count = 0;
  for (let i = 1; i <= 100; i++) {
    if (a.every(int => (i % int == 0))) {
      // 4 % 2 == 0
      // 4 % 4 == 0
      // 8 % 2 == 0
      // 8 % 4 == 0
      // 12 % 2 == 0
      // 12 % 4 == 0
      // 16 % 2 == 0
      // 16 % 4 == 0
      // .
      // .
      // .
      if (b.every(int => (int % i == 0))) {
        // 16 % 4 == 0
        // 32 % 4 == 0
        // 96 % 4 == 0
        // 16 % 8 == 0
        // 32 % 8 == 0
        // 96 % 8 == 0
        // 16 % 12 != 0 X
        // 32 % 12 != 0 X
        // 96 % 12 == 0 X
        // 16 % 16 == 0
        // 32 % 16 == 0
        // 96 % 16 == 0
        // console.log(i)
        count++;
      }
    }
  }
  return count;
}

console.log(getTotalX([2,4],[16,32,96]))