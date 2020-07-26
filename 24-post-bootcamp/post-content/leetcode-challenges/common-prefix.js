//Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs) {
    // set the prefix as an empty string
    let pre = ""
    // set condition to return an empty strings if there is no set of strings given
    if (strs === null || strs.length === 0) {
        return pre
    }
    // loop through first string in array
    for (let i=0; i<strs[0].length; i++) {
        // set a variable to hold the letter in the first word, if all corresponding words have that same letter
        let str1 = strs[0][i]
        // loop through remaining words to check if they contain the same characters in order as compared to str1
        for (let j=1; j<strs.length; j++) {
            // when a word is found not to have the same prefix, return pre
            if (strs[j][i] !== str1) {
                return pre
            }
        } 
        // build onto pre with the letters common to all elements in the strs array
        pre = pre + str1
    }
    return pre
};

console.log(longestCommonPrefix(["cat","caterpiller"]))