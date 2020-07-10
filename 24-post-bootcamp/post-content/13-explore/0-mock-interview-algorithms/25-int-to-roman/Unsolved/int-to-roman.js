// Write a function that takes in an integer and returns it as a Roman numeral string

const intToRoman = function(num) {
    let value = ""
    
    while (num > 0) {
    if (num >= 1000) {
        value.append("M")
        num -= 1000
    }
    if (num > 900) {
        value.append("DM")
        num -= 900
    }


    }
};

console.log(intToRoman(14))
console.log(intToRoman(190))
console.log(intToRoman(1400))
