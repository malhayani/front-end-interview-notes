/*
Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n.
This function should return true is the pair exists or false if it not.

findPair([6, 1, 4, 10, 2, 4], 2) // true
findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1) // true
findPair([6, 1, 4, 10, 2, 4], 22) // false
*/

const findPair = (arr, val) => {
    let i = 0;
    let j = 0;
    let hasPair = false;
    let sortedArray = arr.sort((a, b) => a < b ? -1 : 1);

    while ((i + j) < arr.length) {
        let diff = sortedArray[j] - sortedArray[i];
        if (diff === val) {
            hasPair = true;
            break;
        } else if (diff < val) {
            j++;
        } else {
            j = 0;
            i++;
        }
    }
    return hasPair;
}

console.log(findPair([6, 1, 4, 10, 2, 4], 2)) // true
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)) // true
console.log(findPair([6, 1, 4, 10, 2, 4], 22)) // false