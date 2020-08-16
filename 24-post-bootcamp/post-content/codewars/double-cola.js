// Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; 
// there are no other people in the queue. 
// The first one in the queue (Sheldon) buys a can, drinks it and doubles! 
// The resulting two Sheldons go to the end of the queue. 
// Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.

// Write a program that will return the name of the person who will drink the n-th cola.

function whoIsNext(names, r){
    for (let i=0; i<r; i++) {
        names.push(names[i])
        names.push(names[i])
    }
    return names[r-1]
}

// console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7))

function imNext(names,r) {
    var newQueue = names.slice();
    if(r === 1){
      return names[0];
    }
    newQueue.push(newQueue[0], newQueue[0])
    newQueue = newQueue.slice(1, newQueue.length);
    
    return imNext(newQueue, r-1);
}

console.log(imNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7))
