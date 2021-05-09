/* 
Write a recursive function called reverse which accepts a string and
returns a new string in reverse
*/

const reverse = (str) => {
    const reverseString = (string, i) => {
        if (i < 0) {
            return string;
        } else {
            return reverseString(string + str[i], i - 1);
        }
    }
    return reverseString('', str.length - 1);
}

console.log(reverse('cat')) // tac
console.log(reverse('dog')) // god
console.log(reverse('this is a test')) // tset a si siht