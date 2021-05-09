/*
Multiple Pointers - isSubsequence

Write a function called isSubsequence which takes in two strings and checks
whether the characters in the first string form a subsequence of the characters in the second
string. In other words, the function should check whether the characters in the first string
appear somewhere in the second string, without their order changing.

Time Complexity: O(N + M)
Space Complexity: O(1)
*/

const isSubsequence = (str1, str2) => {
    let i = 0;
    let j = 0;
    while (i < str2.length) {
        if (str2[i] === str1[j]) {
            j++;
        }
        i++;
    }
    if (j === str1.length) {
        return true;
    }
    return false;
}

console.log(isSubsequence('hello', 'hello world')); //true
console.log(isSubsequence('sing', 'sting')); //true
console.log(isSubsequence('abc', 'abracadabra')); //true
console.log(isSubsequence('abc', 'acb')); //false
console.log(isSubsequence('hat', 'thats hilarious haha')); //true