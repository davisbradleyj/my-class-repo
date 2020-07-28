// There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
    for (let i = 1; i < arr.length; i++) {
        let len = arr.length
        if (arr[1] == arr[2] && arr[0] != arr[1]) {
            return arr[0]
        }
        if (arr[len - 2] == arr[len - 3] && arr[len - 1] != arr[len - 2]) {
            return arr[len - 1]
        }
        if (arr[i - 1] != arr[i] && arr[i + 1] != arr[i]) {
            return arr[i]
        }
    }
}

console.log(findUniq([ 0, 1, 0 ]))
console.log(findUniq([ 1, 1, 1, 2, 1, 1, 1 ]))
console.log(findUniq([ 3, 10, 3, 3, 3 ]))
console.log(findUniq([2,1,1,1,1]))
console.log(findUniq([1,1,1,1,2]))