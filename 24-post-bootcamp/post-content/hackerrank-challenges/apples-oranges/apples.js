function countApplesAndOranges(s, t, a, b, apples, oranges) {
    console.log(apples.reduce((sum, d) => sum + (s - a <= d && d <= t - a), 0));
    console.log(oranges.reduce((sum, d) => sum + (s - b <= d && d <= t - b), 0));
    
    let ahLeft = Math.abs(s-a);
    let ahRight = Math.abs(t-a);
    let ohLeft = Math.abs(b-s);
    let ohRight = Math.abs(b-t);
    let aHits = 0;
    let oHits = 0;

    for (let i=0; i<=apples.length; i++) {
        // if(apples[i] <= 0 ) continue;
        if (apples[i] >= ahLeft && apples[i] <= ahRight) {
            aHits++;
        }
    }

    for (let i=0; i<=oranges.length; i++) {
        // if(oranges[i] >= 0 ) continue;
        if (oranges[i] <= ohLeft && oranges[i] >= ohRight) {
            oHits++;
        }
    }
    // console.log(aHits)
    // console.log(oHits)


}

countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6])
countApplesAndOranges(2,3,1,5,[2],[-2])