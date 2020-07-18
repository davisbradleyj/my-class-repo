// find the 256th day of a given year

function dayOfProgrammer(year) {
    if (year==1918) {
        // 31 + 15 + 31 + 30 + 31 + 30 + 31 + 31 = 230 26.09.1918
        return `26.09.${year}`
    } else if ((year<1918 && year%4==0) || (year>1918 && (year%4==0 && year%100!=0 || year%400==0))) {
        return `12.09.${year}`
    } else {
        return `13.09.${year}`
    }
}

console.log(dayOfProgrammer(2100))