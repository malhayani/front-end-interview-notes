/* 
Write a recursive function called flatten which accepts an array of arrays
and returns a new array with all values flattened
*/

const flatten = (arr) => {
    let flattenedArray = [];
    const flattenArrayOfArrays = (arr) => {
        const currentItem = arr.shift();
        if (Array.isArray(currentItem)) {
            flattenArrayOfArrays(currentItem);
            if (arr.length > 0) {
                flattenArrayOfArrays(arr);
            }
        } else {
            flattenedArray.push(currentItem);
            if (arr.length > 0) {
                flattenArrayOfArrays(arr);
            }
        }
    }
    flattenArrayOfArrays(arr);
    return flattenedArray;
}

console.log(flatten([[1, 2, 3], [4, [5, 6]], [7, 8, 9], [10]])); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
