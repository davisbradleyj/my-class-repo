function pickingNumbers(a) {
    a = a.sort();
    let currLength = 1;
    let maxLength = currLength;
    let firstElement = a[0];
    for (let i = 0; i < a.length - 1; i++) {
        if (Math.abs(a[i] - a[i+1]) <= 1 && Math.abs(firstElement - a[i+1]) <= 1) {
            currLength += 1;
        } else {
            if (maxLength < currLength) 
            maxLength = currLength;
            currLength = 1; 
            firstElement = a[i+1];
        }
        
        if (i+1 == a.length-1 && maxLength<currLength) 
        maxLength = currLength;
    }
    return maxLength;
}

console.log(pickingNumbers([4,6,5,3,3,1]))
