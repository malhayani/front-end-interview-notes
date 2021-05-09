const findMostCommonLetter = (string) => {
    let letters = {};

    for (let letter of string) {
        if (letter !== ' ') {
            letter = letter.toLowerCase();
            if (letters[letter]) {
                letters[letter] = letters[letter] + 1;
            } else {
                letters[letter] = 1;
            }
        }
    }

    let mostCommonLetter = '';
    let mostCommonCount = 0;
    Object.keys(letters).forEach(letter => {
        if (letters[letter] > mostCommonCount) {
            mostCommonLetter = letter;
            mostCommonCount = letters[letter];
        }
    });

    return mostCommonLetter;
}

console.log(findMostCommonLetter('bookshelf')) // o
console.log(findMostCommonLetter('this is a big biggest bigger')) // g