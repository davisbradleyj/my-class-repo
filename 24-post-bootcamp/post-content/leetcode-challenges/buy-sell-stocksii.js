// Say you have an array prices for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. 
// You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

var maxProfit = function(prices) {
    let profit = 0
    for (let i=0,j=1; j<prices.length; ) {
        let diff = prices[j]-prices[i]
        // console.log('diff: ',diff)
        if (diff > 0) {
            profit += diff;
            // console.log('profit: ',profit)
            i++; 
            j++;
            console.log('if: ',[i,j])
        } else {
            i++; 
            j++;
            console.log('else: ',[i,j])
        }
    }
    return profit
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([1,2,3,4,5]))