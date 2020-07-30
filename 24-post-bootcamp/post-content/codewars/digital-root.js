// Given n, take the sum of the digits of n. 
// If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
// This is only applicable to the natural numbers.

function digita_root(n) {
    let result = 0
    String(n).split('').map(num => {
        result += Number(num);
        console.log("Res: ",result)
    })
    return result >= 10 ? digital_root(result) : result
}

console.log(digitalRoot(456))
console.log(digitalRoot(457))
console.log(digitalRoot(10001))