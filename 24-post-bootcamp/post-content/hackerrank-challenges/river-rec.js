function maxTrailing(levels) {
  let high = levels[0]
  let countLow = 0
  let low = levels[0]
  for (let i=1; i<levels.length; i++) {
      if (levels[i]>high) {
          high = levels[i]
          
      }
      else if (levels[i] < low) {
          low = levels[i]
      }
  }

}

console.log(maxTrailing([5,3,6,7,4]))