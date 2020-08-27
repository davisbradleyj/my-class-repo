var lengthOfLongestSubstring = function (s) {
    let hold = []
    let pointer = 0;
    let count = 0;
    if (s.length <= 1) {
        return s.length
    }
    for (let i = 0; i < s.length; i++) {
        hold = s.substring(pointer, i)
        if (hold.includes(s[i])) {
            pointer += hold.indexOf(s[i]) + 1
        }
        hold = s.substring(pointer, i + 1)
        if (count < hold.length) {
            count = hold.length;
        }

    }
    return count
};

console.log(lengthOfLongestSubstring("banana"));