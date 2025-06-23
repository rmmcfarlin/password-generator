
const lowercaseAlphabet = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

const uppercaseAlphabet = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specialCharacters = [
  "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", 
  ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"
];



function generatePassword (passwordLength, lowercaseCheck, uppercaseCheck, numCheck, symbolCheck) {

    console.log("check")

    let selectedChars = []
    
    if (lowercaseCheck) {
        selectedChars.push(...lowercaseAlphabet)
    }

    if (uppercaseCheck) {
        selectedChars.push(...uppercaseAlphabet)
    }

    if (numCheck) {
        selectedChars.push(...digits)
    }

    if (symbolCheck) {
        selectedChars.push(...specialCharacters)
    }


    let curIndex = selectedChars.length

    while (curIndex > 0) {

        let randIndex = Math.floor(Math.random() * curIndex);
        curIndex--;

        [selectedChars[curIndex], selectedChars[randIndex]] = [selectedChars[randIndex], selectedChars[curIndex]]

    }

    let passwordOutput = []

    for (let i = 0; i < passwordLength; i++ ) {
        passwordOutput.push(selectedChars[i])
    }

    return passwordOutput.join('')
}



export default generatePassword