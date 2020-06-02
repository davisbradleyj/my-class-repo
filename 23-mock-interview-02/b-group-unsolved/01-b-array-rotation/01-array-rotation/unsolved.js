// array-rotation

// index(i-3) = index(i)
// slice(3)
// loop brings in the 0(n)

// function array rotation - inputs are array, number
// store sliced array as a separate var (with sliced values being number)
// loop through remaining array until i less than n

// push 0-n-1 element to sliced array

function rotation (array,num){
    let sliceArr = array.slice(num)
    for (i=0; i<num; i++){
        sliceArr.push(array[i]);
    }
    return sliceArr
}
arr = [1,2,3,4,5,6]
num = 3
console.log(rotation(arr,num))