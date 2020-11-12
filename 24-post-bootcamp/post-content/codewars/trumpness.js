function trumpDetector(trumpySpeech) {
  let vowelCount = 0;
  let vowelRepeat = 0;
  let vowels = 'aeiou';
  let trumpSpeech = trumpySpeech.toLowerCase().split('');
  console.log(trumpSpeech)
  for (let i = 0; i < trumpSpeech.length; i++) {
    if (vowels.includes(trumpSpeech[i].toLowerCase()) && trumpSpeech[i] !== trumpSpeech[i - 1]) {
      console.log(trumpSpeech[i])
      vowelCount++;
      console.log(vowelCount)
    }
  }
  for (let j = 0; j < trumpSpeech.length; j++) {
    if (vowels.includes(trumpSpeech[j].toLowerCase()) && trumpSpeech[j] === trumpSpeech[j - 1]) {
      console.log(trumpSpeech[j])
      vowelRepeat++;
      console.log(vowelRepeat)
    }
  }
  return parseFloat((vowelRepeat / vowelCount).toFixed(2))
}

console.log(trumpDetector('HUUUUUGEEEE WAAAAAALL'))
console.log(trumpDetector("MEXICAAAAAAAANS GOOOO HOOOMEEEE"))
console.log(trumpDetector("listen migrants: IIII KIIIDD YOOOUUU NOOOOOOTTT"))
console.log(trumpDetector("America NUUUUUKEEEE Oooobaaaamaaaaa"))