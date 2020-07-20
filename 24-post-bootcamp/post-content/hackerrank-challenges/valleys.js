// given a string denoting whether the hiker has gone up or down, determine how many valleys the hiker has entered

function countingValleys(s) {
    let altitude = 0
    let count = 0
    for (let i=0; i<s.length; i++) {
        if (s[i] === "D" && altitude == 0) {
            count++
            altitude--
        } else if (s[i] === "D" && altitude != 0) {
            altitude--
        } else if (s[i] === "U") {
            altitude++
        }
    }
    return count
}

console.log(countingValleys("UDDDUDUU"))
console.log(countingValleys("DDUUDDUDUUUD"))