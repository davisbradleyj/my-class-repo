//Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs) {
    let pre = ""
    if (strs === null || strs.length === 0) {
        return pre
    }
    for (let i=0; i<strs[0].length; i++) {
        let str1 = strs[0][i]
        console.log("Str1: ",str1)
        for (let j=1; j<strs.length; j++) {
            if (strs[j][i] !== str1) {
                return pre
            }
        } 
        pre = pre + str1
        console.log("Pre: ",pre)
    }
    return pre
};

console.log(longestCommonPrefix(["cat","caterpiller"]))