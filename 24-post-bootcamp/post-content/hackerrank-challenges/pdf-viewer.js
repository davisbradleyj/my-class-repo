
// Complete the designerPdfViewer function in the editor below. 
// It should return an integer representing the size of the highlighted area.

function designerPdfViewer(h, word) {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let wordHeight = []

    for (let i=0; i<word.length; i++) {
        wordHeight.push(h[letters.indexOf(word[i])])
    }

    let height = wordHeight.sort()[wordHeight.length-1]

    return height*word.length
}   