var lengthOfLongestSubstring = function (s) {
    let arr = s.split('')
    if (arr.length == 1) {
        return 1
    }
    if (arr.length == 2 && arr[0] == arr[1]) {
        return arr[0] == arr[1] ? 1 : 2
    }
    // Still inprogress

  };
  
  lengthOfLongestSubstring("banana");