// YOUR WORK HERE

const unsorted = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
bubbleSort = (unsorted) => {
    unsorted.forEach(i => {
        for (let j = 0; j < unsorted.length; j++) {
            if (unsorted[j-1] > unsorted[j]) {
                let temp = unsorted[j-1]
                unsorted[j-1] = unsorted[j]
                unsorted[j] = temp
            }
        }
    })
    return unsorted
}
console.log(bubbleSort(unsorted))