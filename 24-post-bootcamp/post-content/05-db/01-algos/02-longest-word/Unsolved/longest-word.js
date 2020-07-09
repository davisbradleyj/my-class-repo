// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

const longestWord = function(str) {
    let wordList = str.split(" ")
    let longWord = wordList[0]

    for (let i=0; i<wordList.length; i++) {
        let currWord = wordList[i]
        // make sure you are accounting for the length of currWord and longWord
        if (currWord.length > longWord.length) {
            longWord = currWord
        }
    }
    return longWord
};
