/*
Given an array of 1s and 0s, which has all 1s first followed by all 0s.
Write a function called countZeros, which returns the number of zeroes in the array.
countZeroes([1, 1, 1, 1, 0, 0 ]) // 2
countZeroes([1, 0, 0, 0, 0 ]) // 4
countZeroes([0, 0, 0]) // 3
countZeroes([1, 1, 1, 1]) // 0
*/

const countZeroes = (arr) => {
    let countOfZeroes = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 1) {
            break;
        } else {
            countOfZeroes++;
        }
    }
    return countOfZeroes;
}

console.log(countZeroes([1, 1, 1, 1, 0, 0])) // 2
console.log(countZeroes([1, 0, 0, 0, 0])) // 4
console.log(countZeroes([0, 0, 0])) // 3
console.log(countZeroes([1, 1, 1, 1])) // 0