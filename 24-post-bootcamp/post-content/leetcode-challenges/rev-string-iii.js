// Given a string, you need to reverse the order of characters in each word within a sentence 
// while still preserving whitespace and initial word order.

var reverseWords = function(s) {
    s = s.split(' ')
    let temp = []
    console.log(s)
    for (let i=0; i<s.length; i++) {
        temp.push(s[i].split('').reverse().join(''))
    }
    return temp.join(' ')
};

console.log(reverseWords("Let's take LeetCode contest"))