// Challenge - Find which cat would get to the mouse first.
// If both cats arrive at the same time, the mouse gets away
// Return the cat which catches the mouse, or the mouse

const catMouse = function(a,b,c) {
    let catA = c-a
    let catB = c-b
    if (Math.abs(catA)<Math.abs(catB)) {
        return "Cat A"
    } else if (Math.abs(catA)>Math.abs(catB)) {
        return "Cat B"
    } else {
        return "Mouse C"
    }
}

console.log(catMouse(1,5,3))
console.log(catMouse(2,9,5))
console.log(catMouse(2,3,5))