function utopianTree(n) {
    let i = 0
    let result = 1
    while (i<n){
        i++
        result += result
        console.log("I: " + i)
        console.log("Res: " + result)
        if (i<n){
            i++
            result += 1
            console.log("I: " + i)
            console.log("Res: " + result)
        }
    }
    return result
}

console.log(utopianTree(7))

// res = 0
// res = 1 i = 1
// res = 2 i 
// res = 4
// res = 
// 
