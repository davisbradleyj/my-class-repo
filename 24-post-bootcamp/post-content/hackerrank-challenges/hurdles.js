// Given an array denoting hurdle height, and an integer denoting the maximum a person can jump,
// Print an integer denoting the minimum doses of magic potion Dan must drink to complete the hurdle race.

function hurdleRace(k, height) {
    let highest = 0
    for (let i=0; i<height.length; i++) {
        if (k < height[i]) {
            let diff = height[i] - k
            if (diff > highest) {
                highest = diff
            }
        }
    }
    if (highest == 0) {
        return 0
    } else {
        return highest
    }
}

console.log(hurdleRace(4,[1,6,3,5,2]))
console.log(hurdleRace(7,[2,5,4,5,2]))