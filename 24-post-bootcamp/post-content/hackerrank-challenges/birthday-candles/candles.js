function birthdayCakeCandles(ar) {
    ar.sort((a,b) => a-b)
    let count = 0
    let high = 0
    console.log(ar)
    for (let i=0; i<ar.length; i++){
        if (ar[i] > high) {
            high = ar[i]
        } else if (ar[i] = high) {
            count++
        }
    }
    console.log(count)
}

birthdayCakeCandles([1,2,3,4,3,4])