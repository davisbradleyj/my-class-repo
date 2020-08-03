// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.
//


var isValid = function(s) {
    let stack = [];
    const m = { '(':')' , '{':'}' , '[':']' }
    for (const paren of s) {
        if (stack && paren === m[stack[0]]) {
            stack.shift();
            console.log(stack)
        } else {
            stack.unshift(paren);
            console.log(stack)
        }
    }
    return stack.length === 0;
};

console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("({[]{}})"))
console.log(isValid("()[]{}})"))