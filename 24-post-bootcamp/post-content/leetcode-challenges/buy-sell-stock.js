// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock)
// design an algorithm to find the maximum profit.

var maxProfit = function(prices) {
    // establish first price as lowest, and the profit
    let low = prices[0]
    let profit = 0
    // loop through array
    for (let i=1; i<prices.length; i++) {
    // iterate through loop to find the low value, and the profit once low is established
        low = Math.min(prices[i],low)
        console.log("low: ", low)
        profit = Math.max(profit,prices[i]-low)
        console.log("profit: ",profit)
    }
    return profit
}

console.log(maxProfit([7,1,5,3,6,4]))