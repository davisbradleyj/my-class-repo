// given an array of socks (identified by an integer), return the count of pairs

function sockMerchant(n, arr) {
    let count = 0
    arr.sort()
    for (let i = 0; i<arr.length; i++){
        if (arr[i] === arr[i+1]) {
            count++
            i++
        }
    }
    return count

}

console.log(sockMerchant(9,[10,20,20,10,10,30,50,10,20]))