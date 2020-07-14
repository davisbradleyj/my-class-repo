// Given an array, determine if value b is equal to the sum of (array/2), less value k.  If true, return "Bon Appetit"
// else return the difference between the average and k

function bonAppetit(bill, k, b) {
    // remove bill[k] from array
    let split = 0
    let diff = 0
    bill.splice(k,1)
    for (let i=0; i<bill.length; i++) {
        split += bill[i]
    }
    if ((split/2) === b) {
        return "Bon Appetit"
    } else {
        return Math.abs((split/2)-b)
    }

    // calculate sum of (bill/2) and compare to k
    // if k = bill/2, return "Bon Appetit", else return abs(k-(bill/2))

}

console.log(bonAppetit([3,10,2,9],1,7))