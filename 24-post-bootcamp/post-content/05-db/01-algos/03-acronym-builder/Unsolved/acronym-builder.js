// Write code to create a function that accepts a string and returns an acronym for the given string

var acronymBuilder = function(str) {
    // acronym will be the first letter of each word
    // split string
    let string = str.split(" ")
    let acronym = ""
    // loop through each word in each string and store the first letter of each word
    for (let i=0; i<string.length; i++) {
        word = string[i]
        acronym += word[0].toUpperCase();
    }
    // return that acronym with each letter toUpperCase
    return acronym
};
