var arr = [1,2,3];
var newVal = 0;

for (var i = arr.length; i>=0; i--){
    arr[i] = arr[i-1]
}
arr[0] = newVal
console.log(arr)

var arr1 = [1,2,3];
var arr2 = [];
arr2.push(0)
for (var i=0;i<arr1.length;i++){
    arr2.push(arr1[i])
}
console.log(arr2)