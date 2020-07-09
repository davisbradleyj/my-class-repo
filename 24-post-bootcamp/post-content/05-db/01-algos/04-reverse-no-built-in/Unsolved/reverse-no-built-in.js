// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverse = function(str) {
    let revStr = ""
    for (let i=str.length-1; i>=0; i--) {
        revLetter = str[i]
        revStr += revLetter
    }
    return revStr
};
