// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence. 
// You can do so recursively, in other words from the previous member read off the digits, 
// counting the number of digits in groups of the same digit.

// Note: Each term of the sequence of integers will be represented as a string.

var countAndSay = function(n) {
    let result = '1';
    for (let i=1; i<n; i++) {
        result = say(result)
        console.log("Passing through N: ",result)
    }
    return result
};
var say = function(string) {
    console.log("Taking result: ", string)
    let result = '';
    let count = 0;
    let number = string[0];
    for (let i=0; i<string.length; i++) {
        console.log("Number: ",number)
        console.log("String[i]: ",string[i])
        if (string[i] === number) {
            count++
            console.log(count)
        } else {
            console.log("Else result: ", result)
            console.log("Else count: ", count)
            console.log("Else number: ", number)
            result += count + string[i-1]
            count = 1
            number = string[i]
        }
    }
    return result + count + number
}

console.log(countAndSay(13))