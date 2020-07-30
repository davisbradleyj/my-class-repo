function maximumOccurringCharacter(text) { 
    let countHold = 0; 
    let val = '';
    let countMax = 0;
    for(let i=0; i< text.length; i++){
        countHold=0;
        for(let j=0; j< text.length; j++){
            if(text[i] === text[j]) {
                countHold++;
            }
        }
    
        if(countHold > countMax) {
            val = text[i];
            countMax = countHold; 
        }
    }
    return val;
}



console.log(maximumOccurringCharacter('helloworld'))