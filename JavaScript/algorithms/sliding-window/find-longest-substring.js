/*
Sliding Window findLongestSubstring

Write a function called findLongestSubstring, which accepts a string
and returns the length of the longest substring with all distinct characters.

Time: O(n)
*/

const findLongestSubstring = (string) => {
    let letters = {}
    let longestLength = 0;
    let i = 0;
    let j = 0;

    while ((i + j) < string.length) {
        let letter = string[(i + j)];
        if (!letters[letter]) {
            letters[letter] = 1;
            j++;
        } else {
            longestLength = Math.max(j, longestLength);
            letters = {};
            j = 0;
            i++;
        }
    }
    return Math.max(j, longestLength);
}

console.log(findLongestSubstring(''))//0
console.log(findLongestSubstring('rithmschool'))//7
console.log(findLongestSubstring('thisisawesome'))//6
console.log(findLongestSubstring('thecatinthehate'))//7
console.log(findLongestSubstring('bbbbbb'))//1
console.log(findLongestSubstring('longestsubstring'))//8
console.log(findLongestSubstring('thisishowwedoit'))//6