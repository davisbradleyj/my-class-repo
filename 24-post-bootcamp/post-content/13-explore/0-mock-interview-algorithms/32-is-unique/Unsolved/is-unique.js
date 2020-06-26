// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
    let map = {}
    for (let i=0; i<arr.length; i++) {
        let num = arr[i]
        if (map.num===true) {
            return false
        }
        map.num = true
    }
    return true
};
