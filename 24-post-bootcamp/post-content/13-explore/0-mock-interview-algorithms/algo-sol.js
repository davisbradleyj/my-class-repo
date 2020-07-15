// given two integers, return quotient and console remainder (if any)
//  eg. a=5 b=2, expectation is a quotient = 2, remainder console.log = 1
// 

const quotient = function (a, b) {
    let sub = 0;
    // create a loop to count the number of times b can be subtracted from a, or a can be subtracted from b
    // if statement to determine which is larger
    while (a >= b) {
        a -= b
        sub++
    }
    let remain = a
    console.log(remain)
    return sub
}

console.log(quotient(10,10))
