function serviceLane(width, cases) { 
    let n = cases.length; 
    let arr = []; 
    let i = 0
    let j; 
    while (i < n){ 
        j = 0; 
        //console.log("i, j", i, j); 
        arr.push(width.slice(cases[i][j++],(cases[i++][j])+1)
        .reduce((a,b) => Math.min(a,b))) 
    } 
    return arr;
}