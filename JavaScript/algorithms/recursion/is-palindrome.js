/* 
Write a recursive function called isPalindrome which returns true if the
string passed to it is a palindrome (reads the same way forwards and backwards).
Otherwise it is false
*/

const isPalindrome = (string) => {
    const reverseString = (str, i) => {
        if (i < 0) {
            return str;
        } else {
            return reverseString(str + string[i], i - 1);
        }
    }

    let reversedString = reverseString('', string.length - 1);
    return string === reversedString;
}

console.log(isPalindrome('snowman')) // false
console.log(isPalindrome('racecar')) // true
