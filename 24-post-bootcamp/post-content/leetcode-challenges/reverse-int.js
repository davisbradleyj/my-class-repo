// given a 32-bit integer, reverse it

const reverse = (x) => {
    let num = parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x)
    if (num < 2147483647 && num > -2147483647) {
        return num
    } else {
        return 0
    }
}