// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" 
// if that character appears only once in the original string, 
// or ")" if that character appears more than once in the original string. 
// Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){
    let string = "";
    let lower = word.toLowerCase();
    for (let i=0; i<lower.length; i++) {
        if ( lower.indexOf(lower[i]) == lower.lastIndexOf(lower[i]) ) {
            string += "(";
        } else {
            string += ")"
        }
    }
    return string
}

console.log(duplicateEncode("din")); 
console.log(duplicateEncode("recede")); 
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @")); 