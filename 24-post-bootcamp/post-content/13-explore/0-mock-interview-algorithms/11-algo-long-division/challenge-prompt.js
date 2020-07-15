// Long Division

// This is the divide function. It takes in a dividend and a divisor 
// and returns the quotient from dividing the dividend by the divisor
function divide(a,b) {
    // -------------------- Your Code Here --------------------
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




    // --------------------- End Code Area --------------------
}

// Exporting the divide function for use in the test file.
module.exports = divide;