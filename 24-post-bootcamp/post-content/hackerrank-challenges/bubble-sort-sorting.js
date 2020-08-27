function countSwaps(a) {
  let len = a.length;
  let count = 0
  for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
          if (a[j] > a[j + 1]) {
              let temp = a[j];
              a[j] = a[j + 1];
              a[j + 1] = temp;
              count++
          }
      }
  }
  console.log(`Array is sorted in ${count} swaps.`)
  console.log(`First Element: ${a[0]}`)
  console.log(`Last Element: ${a[len-1]}`)
  return 
}

// Array is sorted in 3 swaps.  
// First Element: 1  
// Last Element: 6 

console.log((Math.round(Math.random() * -100))+101)
// console.log((Math.round(Math.random() * 20))+1)
// console.log((Math.round(Math.random() * 10))+1)
// console.log((Math.round(Math.random() * 8))+1)
