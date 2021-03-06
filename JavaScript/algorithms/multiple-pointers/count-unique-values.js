/*
Multiple Pointers - countUniqueValues

Implement a function called countUniqueValues, which accepts a sorted
array, and counts the uniqye values in the array. There can be negative
numbers in the array, but it will always be sorted
*/

const countUniqueValues = (array) => {
    if (array.length > 0) {
        let uniqueCount = 1;
        let length = array.length;
        for (let i = 1; i < Math.ceil(length / 2); i++) {
            let c = (length - 1) - i;
            if (array[i] !== array[i - 1]) {
                uniqueCount++;
            }
            if (array[c] !== array[c + 1]) {
                uniqueCount++;
            }
        }
        return uniqueCount;
    }
    return 0;
}


console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4