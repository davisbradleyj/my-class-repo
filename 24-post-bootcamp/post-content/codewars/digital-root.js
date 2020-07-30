// Given n, take the sum of the digits of n. 
// If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
// This is only applicable to the natural numbers.

function digitalRoot(n) {
    let m = n.toString();
    let i; 
    let o = 0;

    if (m.length === 1) {
        return +m;
    }
    for (i = 0; i < m.length; i++) {
        o += +m[i];
        if (o>10) {
            digitalRoot(o)
        }
    }
    return o;
}

console.log(digitalRoot(456))