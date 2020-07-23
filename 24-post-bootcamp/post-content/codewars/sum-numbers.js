// given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

function getSum(a, b) {
    let sum = null
    if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i
            console.log(sum)
        }
        return sum
    } else if (b < a) {
        for (let i = a; i >= b; i--) {
            sum += i
            console.log(sum)
        }
        return sum
    } else {
        return a
    }
}

// console.log("Test1: " + getSum(0,1))
// console.log("Test2: " + getSum(1,0))
// console.log("Test3: " + getSum(1,1))
console.log("Test4: " + getSum(-1,4))

