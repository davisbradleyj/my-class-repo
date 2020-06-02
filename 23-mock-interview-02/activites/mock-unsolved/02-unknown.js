// arr = tacocat
// function for a lowercase word being a palindrome
// loop through array, starting at last letter, and pushing to a new array
// 
// 
// 

var arr = "tacocat"
var arr2 = []
function palindrome(arr) {
    console.log(arr)
    for (var i=arr.length-1;i>=0;i--) {
    arr2.push(arr[i])
    console.log(arr2)
    }
    if (arr === arr2.join("")) {
        return true
    } else {
        return false
    }
}

console.log(palindrome(arr));