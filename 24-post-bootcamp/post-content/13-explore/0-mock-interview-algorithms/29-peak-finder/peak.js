// take an array to find the 'peak' of the array
// [1,4,7,3,2,1]
// [1,3,5,7,5,4,9,12,1,2,6,3]

// define function
// nested array to compare 'peaks'

function peaks(array){
    let peak = array[0]
    for (let i=0; i<array.length-1; i++) {
        if (nums.length === 1) {
            return nums[0];
        }
        if (nums[0] > nums[1]) {
            return nums[0];
        }
        if (array[i-1] < array[i] && array[i] > array[i+1]) {
            if (array[i] > peak) {
                console.log(array[i])
                peak = array[i]
            }
        }
    }
}

const arr1 = [1,3,5,7,5,4,9,12,1,2,6,3,1]
console.log(peaks(arr1))