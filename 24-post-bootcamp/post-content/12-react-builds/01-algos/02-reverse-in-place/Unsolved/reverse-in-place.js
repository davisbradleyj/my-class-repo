// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

var reverseInPlace = function(arr) {
    let a = 0
    let z = arr.length - 1

    while (a != z) {
        let temp = arr[a]
        console.log('temp: ',temp)
        arr[a] = arr[z]
        console.log('arr[a]: ',arr[a])
        arr[z] = temp
        console.log('arr[z]: ',arr[z])

        a++
        console.log('a: ',a)
        z--
        console.log('z: ',z)
    }
    return arr
};

console.log(reverseInPlace([1,2,3,4,5]))