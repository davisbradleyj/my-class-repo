// Complete the findDigits function in the editor below. 
// It should return an integer representing the number of digits of n that are divisors of n.


function findDigits(n) {
    let temp = n.toString().split('')
    let count = 0
    console.log(temp)
    for (let i=0; i<temp.length; i++) {
        if (n % temp[i] === 0) {
            count++
        }
    }
    return count
}

console.log(findDigits(1012))