// given an array, return the count of times the segements requested equal the sum specified

function birthday(arr, d, m) {
    let res = 0
    for (let i=0; i<arr.length; i++){
        if (arr.slice(i,i+m).reduce((a,b) => a+b,0) === d ) {
            res++
        }
    }
    return res
}

console.log(birthday([1,2,1,3,2],3,2))