function getMoneySpent(keyboards, drives, b) {
    // need to find highest sum of keyboard + drive, less than b
    // return -1 if no sum of keyboard + drive is less than b
    let highest = -1
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            if (keyboards[i] + drives[j] <= b && keyboards[i] + drives[j] > highest) {
                highest = keyboards[i] + drives[j]
            }
            console.log(highest)
        }
    }
    return highest
}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10))