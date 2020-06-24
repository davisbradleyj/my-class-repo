// Write a function that takes an array of integers containing exactly one peak. A peak is defined as a location in the array where the value is greater than every number to the left and every number to the right. Return the value found at the array's peak

var peakFinder = function(array) {
    let peak = array[0]
    if (array.length === 1) {
        return array[0];
    }
    for (let i=0; i<array.length-1; i++) { 
        if (array[i-1] < array[i] && array[i] > array[i+1]) {
            if (array[i] > peak) {
                console.log(array[i])
                peak = array[i]
            }
        }
    }
    if (array[array.length-1] > peak){
        peak = array[array.length-1]
    }
    return peak
};
