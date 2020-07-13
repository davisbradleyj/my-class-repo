// given an array of scores, return the count of each time a high score is set, and a low score is set

function breakingRecords(scores) {
    let high = scores[0]
    let low = scores[0]
    let countHigh = 0
    let countLow = 0
    for (let i=1; i<scores.length; i++) {
        if (scores[i]>high){
            high = scores[i]
            countHigh++
        }
         else if (scores[i]<low){
            low = scores[i]
            countLow++
        }
    }
    return [countHigh,countLow]
}