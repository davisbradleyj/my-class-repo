var arr = [1,2,3]
var newArr = []
var num;

function activity(arr, num) {
    for (var i=0; i<arr.length; i++) {
       if (num === arr[i]) {
            newArr.push(num)
       } else {
           return false
       }
    } return newArr
}
