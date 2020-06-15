// create a function, takes in string, determines if palindrome
// establish function (passes through a string)
function palindrome(str1) {
    // instantiate a second string, contain output of loop
    var str2 = "";
    // create a loop to itereate through the array
    for (var i = str1.length - 1; i >= 0; i--) {
        str2 = str2 + str1[i]
        console.log(str2)
    }
    if (str1 == str2) {
        return true
    } else {
        return false
    }

}

console.log(palindrome("tacocat"))