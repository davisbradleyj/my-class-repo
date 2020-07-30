// Given a non-empty string check if it can be constructed by taking a substring of it and 
// appending multiple copies of the substring together. 
// You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

const repeatedSubstringPattern = function(s) {
    // establish a length constant as a whole value integer
    const len = parseInt(s.length/2)
    for (var i = len; i>=1; i--){
        // check if i is divisible by len without remainder
        if (s.length%i===0){
            // establish a new variable as placehold for i
            let j=i;
            // determine substring
            let sub=s.substring(0,j);
            // create a while loop to confirm that the substring remains the same for the duration of the entire string
            while (s.indexOf(sub,j)==j) {
                // add i to the placeholder as the new index to search from for the substring
                j+=i;
            }
            // if j and string 'length' are the same, and the sub array is repeating the entirety of the string, return true
            if (j==s.length){
                return true;
            }
        }
    }
    return false;

};

console.log(repeatedSubstringPattern('abab'))
console.log(repeatedSubstringPattern('ababab'))
console.log(repeatedSubstringPattern('abababab'))
