
var arg1 = process.argv[2]
// console.log(arg1)
function fizzBuzz(arg1) {
// ===================== YOUR WORK HERE =====================
for (var i=1; i<arg1; i++) {
    console.log(i)
    if (i % 3 === 0) {
        console.log("fizz")
    }
    if (i % 5 === 0 ) {
        console.log("buzz")
    }
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz")
    }
}
// ==========================================================
}
fizzBuzz(arg1)

