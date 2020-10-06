// Given an array of numbers, return the smallest number of the most frequently occuring number


function migratoryBirds(arr) {
    let most = 0
    let count = most
    let bird = 0
    arr.sort((a,b) => a-b)
    console.log(arr)
    for (let i=0; i<arr.length; i++) {
        most = (arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i])) + 1;
        if (most > count) {
            count = most;
            bird = arr[i]
            console.log(bird)
        }
    }
    return bird
}

console.log(migratoryBirds([1,2,3,4,5,4,3,2,1,3,4]))


function migrantBirds(arr){
    arr.sort(function (a, b) { return a - b})
    const numMap = {};
    let maxNum = 0;
    let maxChar = 0;
    for (let num of arr) { 
        if (numMap[num]) {
            numMap[num]++;
        } else { 
            numMap[num] = 1;
        }
    }
    for (let num in numMap) { 
        if (numMap[num] > maxNum) { 
            maxNum = numMap[num];
            maxChar = num;
        }
    }
    return maxChar;
}

console.log(migratoryBirds([1,2,3,4,5,4,3,2,1,3,4]))