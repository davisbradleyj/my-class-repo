// given an array of integers, if the integer is less than 3 from the higher value (divisible by 5) round up.
// any value less than 40, that would not round to 40 is left alone
// return all values when rounding is included


const gradingStudents = function(grades) {
    let round = []
    for (let i = 0; i<grades.length; i++) {
        if (grades[i]<38){
            round.push(grades[i])
        } else if (grades[i]%5 === 3) {
            round.push(grades[i]+2)
        } else if (grades[i]%5 === 4) {
            round.push(grades[i]+1)
        } else {
            round.push(grades[i])
        }
    }
    return round
}

console.log(gradingStudents([73,67,38,33]))