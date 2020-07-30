// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

const strStr = function(haystack, needle) {
    const nLen = needle.length
    const len = haystack.length - nLen
    
    if (needle === haystack) {
        return 0
    }
    if (needle.length === 0) {
        return 0
    }
    for (let i=0; i<=len; i++) {
        if (needle == haystack.substring(i, i+nLen)) {
            return i
        }
    }
    return -1
};

console.log(strStr('hello','ll'))
console.log(strStr('aabbaaaaaa','bba'))
console.log(strStr('aabaaabaaa','bba'))