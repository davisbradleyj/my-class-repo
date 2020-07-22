var isPalindrome = function(x) {
    let num = x.toString().split('').reverse().join('')
    if (num == x) {
        return true
    } else {
        return false
    }
};

console.log(isPalindrome(-121))