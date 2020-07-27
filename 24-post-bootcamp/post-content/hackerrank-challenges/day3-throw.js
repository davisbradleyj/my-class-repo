// given a value, ff the value of is positive, the function must return the string YES. 
// Otherwise, it must throw an Error according to the following rules:
// 0 must return "Zero error"
// negative must return "negative error"

function isPositive(a) {
    let result = 'YES'
    if (a == 0){
        result = "Zero error"
    } else if (a < 0) {
        result = "Negative error"
    }
    return result
}

console.log(isPositive(2))
console.log(isPositive(0))
console.log(isPositive(6))
console.log(isPositive(-1))
console.log(isPositive(20))