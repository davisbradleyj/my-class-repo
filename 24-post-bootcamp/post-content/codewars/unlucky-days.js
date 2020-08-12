// Friday 13th or Black Friday is considered as unlucky day. 
// Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

function unluckyDays(year){
    let dayCount = 0
    for (let i=0; i<12; i++) {
        dayCount += new Date(year, i, 13).getDay() === 5
        // console.log("Day Count: ",dayCount)
    }
    return dayCount
  }

  console.log(unluckyDays(2019))