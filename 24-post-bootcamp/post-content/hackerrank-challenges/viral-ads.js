// HackerLand Enterprise is adopting a new viral advertising strategy. 
// When they launch a new product, they advertise it to exactly 5 people on social media.

// On the first day, half of those 5 people (i.e. floor(5/2) = 2 ) like the advertisement and each shares it with  of their friends. 
// At the beginning of the second day, (floor(5/2) X 3 (2 X 3) = 6)  people receive the advertisement.

// Each day, (Floor (recipients)/2) of the recipients like the advertisement and will share it with 3 friends on the following day. 
// Assuming nobody receives the advertisement twice, determine how many people have liked the ad by the end of a given day, beginning with launch day as day 1.

function viralAdvertising(n) {
    let shared = 5
    let liked = Math.floor(shared/2)
    console.log("liked: ",liked)
    let sum = liked
    console.log(sum)
    for (let i=1; i<=n; i++) {
            shared = liked*3
            console.log("liked: ",liked)
            console.log("shared: ",shared)
            sum += liked
            console.log("liked: ",liked)
            console.log("sum: ",sum)
    }
    return sum
}

console.log(viralAdvertising(3))