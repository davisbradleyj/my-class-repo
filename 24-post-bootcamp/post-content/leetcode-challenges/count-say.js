// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence. 
// You can do so recursively, in other words from the previous member read off the digits, 
// counting the number of digits in groups of the same digit.

// Note: Each term of the sequence of integers will be represented as a string.

var countAndSay = function (n) {
    let str = '1';
    let temp = '';
    let last = '';
    let count = 0;
    let len = 0;

    for (var i = 1; i < n; i++) {
        temp = '';
        last = '';
        count = 0;
        len = str.length;

        for (var j = 0; j < len; j++) {
            if (last === '') {
                last = str[j];
                count = 1;
                continue;
            }
            if (str[j] === last) {
                count += 1;
            } else {
                temp += '' + count + last;
                last = str[j];
                count = 1;
            }
        }

        if (last) {
            temp += '' + count + last;
        }
        
        str = temp;
    }
    return str;
};

console.log(countAndSay(5))