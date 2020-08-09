

function jumpingOnClouds(c) {
    let count = -1
    for (let i=0; i<c.length; ) {
        if (c[i+2] === 0) {
            i = i+2
            count++
        } else {
            i = i+1
            count++
        }
    }
    return count
}

console.log(jumpingOnClouds([0,0,1,0,0,1,0]))
console.log(jumpingOnClouds([0,0,0,1,0,0]))
