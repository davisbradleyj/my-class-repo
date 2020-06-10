// Write a function that takes in a Roman Numeral string and returns its integer form

var romanToInt = function(str) {
    // declare numerals
    var numbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    // declare a variable to hold values
    var value = 0;
    // iterate through string
    for (var i=0;i<str.length;i++) {
        var Num1 = str[i]
        var Num2 = str[i+1]
        var Val1 = numbers[Num1]
        var Val2 = numbers[Num2]
        // failed test with Val1>Val2, 
        if (Val1 < Val2) {
            value -= Val1
        } else {
            value += Val1
        }
    }
    return value;
};
