/*
    Given two strings, write a function to determine if the second
    string is an anagram of the first. An anagram is a word or phrase, or name formed
    by rearranging the letters of another, such as cinema, formed by iceman.
*/
const lettersInString = (string) => {
    let letters = {};
    for (let i = 0; i < string.length; i++) {
        let l = string[i];
        if (letters[l]) {
            letters[l] = letters[l] + 1;
        } else {
            letters[l] = 1;
        }
    }
    return letters;
};

const validAnagram = (str1, str2) => {
    let lettersInString1 = lettersInString(str1);
    let lettersInString2 = lettersInString(str2);
    for (let i = 0; i < Object.keys(lettersInString2).length; i++) {
        let letter = Object.keys(lettersInString2)[i];
        if (lettersInString1[letter]) {
            if (lettersInString1[letter] !== lettersInString2[letter]) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
};

console.log(validAnagram('', '')); //true
console.log(validAnagram('aaz', 'zza')); //false
console.log(validAnagram('anagram', 'nagaram')); //true
console.log(validAnagram('rat', 'car')); //false
console.log(validAnagram('awesome', 'awesom')); //false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')); //false
console.log(validAnagram('qwerty', 'qeywrt')); //true
console.log(validAnagram('texttwisttime', 'timetwisttext')); //true
