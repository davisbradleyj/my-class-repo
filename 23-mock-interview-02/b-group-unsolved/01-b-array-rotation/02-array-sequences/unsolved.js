// array-sequences

// iterate through array 
// instantiate a sub array
// push the first element into sub array
// for each element i, check that the following element is = to n+1, if true, push into subarray
// if following element is not equal to n+1, start new sub array with element added
// continue for all elements



function sequence(arr){
    const result = []
    let subArr = [arr[0]]
    for (let i=0; i<arr.length; i++){
        if (arr[i+1] !== arr[i]+1) {
            result.push(subArr)
            subArr = []
        }
            subArr.push(arr[i+1])     
    }
    return result
}
arr = [1,2,3,6,7,8,15,18,19,21,22,24]
console.log(sequence(arr))