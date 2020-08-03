// Complete the saveThePrisoner function in the editor below. It should return an integer representing the chair number of the prisoner to warn.

// saveThePrisoner has the following parameter(s):

// n: an integer, the number of prisoners
// m: an integer, the number of sweets
// s: an integer, the chair number to begin passing out sweets from

function saveThePrisoner(n, m, s) {
    let prisoners = n
    let sweets = m
    let start = s

    let prisoner = start + sweets - 1;
    if (prisoner > prisoners) {
        if (prisoner % prisoners == 0) {
            return prisoners;
        }
        return prisoner % prisoners;
    }
    return (prisoner);

    // 2 + 19 - 1
    // 20
    // 20 > 19 Yes
    // 20 % 19 
    // 1

    // 7 + 3 - 1
    // 9
    // 9 > 7 Yes
    // 9 % 7
    // 2 
}

console.log(saveThePrisoner(7, 19, 2))
console.log(saveThePrisoner(3, 7, 3))