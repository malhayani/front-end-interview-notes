/*
Given an array of positive integers, some elements appear twice and other
appear once, Find all the elements that appear twice in this array. Can return the elements in any order.

findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]) // [2, 3]
findAllDuplicates([4, 2, 2, 1, 0]) // []
findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // [3, 2, 1]
*/

const findAllDuplicates = (arr) => {
    let numList = {};
    let duplicates = [];

    arr.forEach(item => {
        if (numList[item]) {
            // only add to the duplicates array once
            if (numList[item] === 1) {
                duplicates.push(item);
            }
            numList[item]++;
        } else {
            numList[item] = 1;
        }
    });
    return duplicates;
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])) // [2, 3]
console.log(findAllDuplicates([4, 2, 2, 1, 0])) // [2]
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])) // [3, 2, 1]