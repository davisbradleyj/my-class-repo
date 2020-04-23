//  YOUR WORK HERE
// 
function algo(arr,num) {
    var chunk = [];
    for (var i=0; i <arr.length; i+=num) {
        chunk.push(arr.slice(i,i+num));
    }
    return chunk
}
console.log(algo([1,3,5,6,7,3,4,6,7,4,3,6,7,2,8,9,9,4,2,2,4,],5))