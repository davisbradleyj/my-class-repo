function solve(n, k) {
    let count = 0
    let hold = n.toString().split('')
    for (let i = hold.length; i>=0; i--) {
        if (hold[i + 1] < hold[i]) {
            hold.splice(i,1)
            count++
            if (count === k) {
                return hold.join('')
            }
            else if (count<k && hold[i] > hold[i-1]) {
                hold.splice(i,1)
                count++
                if (count === k) {
                    return hold.join('')
                }
    
            }
        }
    }
};

console.log(solve(123056,1))
console.log(solve(123056,2))
console.log(solve(123056,3))
console.log(solve(123056,4))