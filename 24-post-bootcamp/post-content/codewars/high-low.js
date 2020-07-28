// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    let high = numbers[0]
    let low = numbers[0]
    for (let i=1; i<numbers.length; i++) {
        if (numbers[i] > high) {
            high = numbers[i]
        }
        if (numbers[i] < low) {
            low = numbers[i]
        }
    }
    return "'" + high + " " + low + "'"
}
console.log(highAndLow([4,5,29,54,4,0,-214,542,-64,1,-3,6,-6]))