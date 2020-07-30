function reverseVowels(word) {
    let vowels = 'aeiouAEIOU'
    let vowArr = []
    for (let i = 0; i<word.length; i++) {
        if (vowels.includes(word[i])) {
            vowArr.push(word[i])
        }
    }
    let arr = word.split('')
    arr.forEach((letter,j) => {
        if (vowels.includes(letter)) {
            arr[j] = vowArr.pop()
            console.log(arr[j])
        }
    })
    return arr.join('')
}

console.log(reverseVowels('hello WOrld'))