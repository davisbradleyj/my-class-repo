// Given a list of integers and a single sum value, return the first two values (parse from the left please) 
// in order of appearance that add up to form the sum.


var sum_pairs1 = function (ints, s) {
    let view = {}
    for (let i=0; i<ints.length; i++) {
        console.log("Difference: ",s-ints[i])
        if (view[s - ints[i]]) {
            return [s - ints[i], ints[i]];
        }
        console.log(view[ints[i]])
        view[ints[i]] = true
        console.log(view)
    }
}

console.log(sum_pairs1([10, 5, 2, 3, 7, 5],10))
console.log(sum_pairs([1, 4, 8, 7, 3, 15], 8))