// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

// If the last word does not exist, return 0.

var lengthOfLastWord = function (s) {
    // let arr = s.split(' ')
    // for (let j = 0; j < arr.length; j++) {
    //     if (arr[j] === '') {
    //         arr.splice(j, 1)
    //         j--;
    //     }
    // }
    // return arr[arr.length-1].length
    s = s.trim().split(' ')
    let len = s.length-1
    return s[len].length
};

console.log(lengthOfLastWord("b   a    "))