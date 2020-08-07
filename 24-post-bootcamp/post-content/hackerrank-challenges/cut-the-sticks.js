

function cutSticks(arr) {
    let output = []; // will hold the array length
    while (arr.length != 0) { // loop through the array as long as there are items in the array
        let minVal = Math.min(...arr); // set the value to use to decrease elements 
        output.push(arr.length); // add the current count of array elements to output
        // console.log("Output: ",output)
        for (let i = 0; i < arr.length; i++) {
            let sub = arr[i] - minVal; // establish the value to be subtracted
            // console.log("sub: ",sub)
            if (sub === 0) {
                // logic which will remove elements from an the array
                arr.splice(i, 1);
                console.log('arr: ',arr)
                // decrease loop counter to account for removed element
                i -= 1;
            } else {
                arr[i] = sub; // reassign the value in the array location
                console.log('arr[i]: ',arr[i])
            }
         }
    }
    return output;
}

console.log(cutSticks([1,2,3,4,3,3,2,1]))
