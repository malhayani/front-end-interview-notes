/* 
    Write a function called binarySearch which accepts a sorted array and a value
    and returns the index at which the value exists, otherwise it returns -1.

    This algorithm should be more efficient than linearSearch - you can read how to implement it here:
*/

const binarySearch = (arr, num) => {
    let index = -1;
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let middle = Math.ceil((right + left) / 2);
        if (num > arr[middle]) {
            left = middle;
        } else if (num < arr[middle]) {
            right = middle;
        } else {
            index = middle;
            break;
        }
    }
    return index;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)) // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)) // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)) // 2
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)) // 16
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)) // -1