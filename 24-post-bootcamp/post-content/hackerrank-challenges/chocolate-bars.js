// Complete the chocolateFeast function in the editor below. It must return the number of chocolates Bobby can eat after taking full advantage of the promotion.

// chocolateFeast has the following parameter(s):

// n: an integer representing Bobby's initial amount of money
// c: an integer representing the cost of a chocolate bar
// m: an integer representing the number of wrappers he can turn in for a free bar


function chocolateFeast(n, c, m) {  
    let total = 0
    let bars = parseInt(n/c)
    // 6 / 2 = 3
    // console.log(bars)
    total += bars
    // 3
    // console.log(total)
    let wrappers = bars;
    // console.log(wrappers)
    while (wrappers >= m) {
        let moreBars = parseInt(wrappers/m)
        // 3 / 2 = 1
        // console.log(moreBars)
        total += moreBars
        // 4 = 3 + 1
        // console.log(total)
        wrappers = wrappers - moreBars * m + moreBars
        // = 3 - 1 * 2 + 1
        // 3 - 2 + 1
        // 2
    }
    return total
}

console.log(chocolateFeast(10,2,5))
console.log(chocolateFeast(12,4,4))
console.log(chocolateFeast(6,2,2))