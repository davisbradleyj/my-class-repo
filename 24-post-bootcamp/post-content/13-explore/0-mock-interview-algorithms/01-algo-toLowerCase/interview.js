//  take in a string, return all characters as lower case
// CaMeLcAsE lIkE iTs ThE YeAr 2000

// make a function
function toLowerCase(str) {

    // declare an empty string

    var newStr = ""
    // declare mapping object to set uppercase letter as lowercase letter

    var lower = {
        A: "a",
        B: "b",
        C: "c",
        D: "d",
        E: "e",
        F: "f",
        G: "g",
        H: "h",
        I: "i",
        J: "j",
        K: "k",
        L: "l",
        M: "m",
        N: "n",
        O: "o",
        P: "p",
        Q: "q",
        R: "r",
        S: "s",
        T: "t",
        U: "u",
        V: "v",
        W: "w",
        X: "x",
        Y: "y",
        Z: "z"
    }

    // iterate through original string
    for (var i = 0; i < str.length; i++) {
        if (lower.hasOwnProperty(str[i])) {
            newStr += lower[str[i]]
        } else {
            newStr += str[i]
        }

    }
    return newStr

}

console.log(toLowerCase("CaMeLcAsE lIkE iTs ThE YeAr 2005"))