// write function that takes a number and reverses it
function reverse(num) {
// make string
    num = num + "";
    console.log(num)
// split numbers, then
    return num.split("")
// reverse order
    .reverse()
// join
    .join("")
}
// 
console.log(reverse(12356))
// 
 