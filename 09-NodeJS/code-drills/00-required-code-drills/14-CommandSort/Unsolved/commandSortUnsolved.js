
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

let args = process.argv;
let array = [];
for (let i = 2; i < args.length; i++) {
  array.push(parseFloat(args[i]))
}

console.log(array.sort(numSort))

function numSort(a,b) {
  return (a-b)
}

