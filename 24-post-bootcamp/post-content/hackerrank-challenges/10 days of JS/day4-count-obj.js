// Return a count of the total number of objects 'o' satisfying o.x == o.y.


const getCount = function(objects) {
    let count = 0
    objects.map((item) => {
        if (item.x == item.y) {
            count++
        }
    })
    return count
}

