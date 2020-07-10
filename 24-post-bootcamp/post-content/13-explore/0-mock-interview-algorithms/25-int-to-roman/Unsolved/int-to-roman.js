// Write a function that takes in an integer and returns it as a Roman numeral string

const intToRoman = function (num) {
    let value = ""

    while (num > 0) {
        if (num >= 1000) {
            value += "M"
            num -= 1000
        } else if (num >= 900) {
            value += "CM"
            num -= 900
        } else if (num >= 500) {
            value += "D"
            num -= 500
        } else if (num >= 400) {
            value += "CD"
            num -= 400
        } else if (num >= 100) {
            value += "C"
            num -= 100
        } else if (num >= 90) {
            value += "XC"
            num -= 90
        } else if (num >= 50) {
            value += "L"
            num -= 50
        } else if (num >= 40) {
            value += "XL"
            num -= 40
        } else if (num >= 10) {
            value += "X"
            num -= 10
        } else if (num >= 9) {
            value += "IX"
            num -= 9
        } else if (num >= 5) {
            value += "V"
            num -= 5
        } else if (num >= 4) {
            value += "IV"
            num -= 4
        } else if (num >= 1) {
            value += "I"
            num -= 1
        }
    }
    return value
};

console.log(intToRoman(14))
console.log(intToRoman(190))
console.log(intToRoman(1400))
