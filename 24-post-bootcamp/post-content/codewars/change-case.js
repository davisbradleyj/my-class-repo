// you will be given a string that may have mixed uppercase and lowercase letters
// your task is to convert that string to either lowercase only or uppercase only based on:
// a) make as few changes as possible
// b) if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

function solve(s){
    let upperCount = 0
    let lowerCount = 0
    for (let i=0; i<s.length; i++) {
        if (s[i] === s[i].toLowerCase()) {
            lowerCount++
        } else {
            upperCount++
        }
    }
    if (upperCount < lowerCount) {
        return s.toLowerCase()
    } else if ( upperCount > lowerCount ) {
        return s.toUpperCase()
    } else {
        return s.toLowerCase()
    }
}

console.log(solve("code"))
console.log(solve("CODe"))
console.log(solve("COde"))
console.log(solve("Code"))