// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    let high = parseInt(numbers[0])
    let low = parseInt(numbers[0])
    for (let i=1; i<numbers.length; i++) {
        if (parseInt(numbers[i]) > high) {
            high = parseInt(numbers[i])
        }
        if (parseInt(numbers[i]) < low) {
            low = parseInt(numbers[i])
        }
    }
    return high+" "+low
}
console.log(highAndLow([4,5,29,54,4,0,-214,542,-64,1,-3,6,-6]))