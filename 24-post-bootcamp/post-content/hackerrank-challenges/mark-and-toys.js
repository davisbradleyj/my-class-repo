

function maximumToys(prices, k) {
  prices.sort((a, b) => a - b)
  // console.log(prices)
  let toys = 0;
  let sum = 0
  for (let i=0; i<prices.length;i++) {
    sum += prices[i]
    if (sum <= k) {
      toys++
    }
  }
  return toys
}

console.log(maximumToys([1,12,5,111,200,1000,10],50))