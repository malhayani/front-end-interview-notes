/*
Sliding Window - minSubArrayLen

Write a function called minSubArrayLen which accepts two parameters - an
array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which
the sum is greater than or equal to the integer passed to the function. If there isn't one,
return 0 instead.

Time: O(n)
Space: O(1)
*/

const minSubArrayLen = (arr, num) => {
    let i = 0;
    let j = 0;
    let currentValue = 0;
    let smallestLength = null;
    while ((i + j) < arr.length) {
        currentValue = currentValue + arr[i + j];
        j++;
        if (currentValue >= num) {
            if (!smallestLength || j < smallestLength) smallestLength = j;
            i++;
            j = 0;
            currentValue = 0;
        }
    }
    return smallestLength || 0;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))// 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9))// 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52))// 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39))// 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 1], 55))// 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11))// 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95))// 0