// Should continue to break apart the array until they are individual arrays of 1. Then should slowly merge them into the correct order

const mergeArrays = (arr1, arr2) => {
    let arr = [];
    let i = 0;
    let j = 0;
    // compare the two arrays against each other
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr.push(arr1[i]);
            i++;
        } else {
            arr.push(arr2[j]);
            j++;
        }
    }

    // need to make sure the array is fully drained
    while (i < arr1.length) {
        arr.push(arr1[i]);
        i++;
    }

    // need to make sure the array is fully drained
    while (j < arr2.length) {
        arr.push(arr2[j]);
        j++;
    }
    return arr;
}
// console.log(mergeArrays([1, 2, 5], [3, 7, 8, 10])); // 1, 2, 3, 5, 7, 8, 10
// console.log(mergeArrays([3, 7, 8, 10], [1, 2, 5])); // 1, 2, 3, 5, 7, 8, 10
// console.log(mergeArrays([], [1, 3])); // 1, 3


const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    else {
        let half = Math.floor(arr.length / 2);
        let left = mergeSort(arr.slice(0, half));
        let right = mergeSort(arr.slice(half));
        return mergeArrays(left, right);
    }
}

console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2])) // 1, 2, 3, 4, 5, 6, 7, 8