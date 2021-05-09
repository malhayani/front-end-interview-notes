/*
Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and a integer.
The function should return the index of the integer in the array. If the value
not found, return -1

findRotatedIndex([3, 4, 1, 2], 4) // 1
findRotatedIndex([6, 7, 8, 8, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 4) // 6
findRotatedIndex([37, 44, 66, 102, 10, 22], 14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16) // 5
*/

const findRotatedIndex = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }
    return -1;
}

console.log(findRotatedIndex([3, 4, 1, 2], 4)) // 1
console.log(findRotatedIndex([6, 7, 8, 8, 1, 2, 3, 4], 8)) // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 4, 3], 4)) // 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)) // -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)) // -1
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)) // 5