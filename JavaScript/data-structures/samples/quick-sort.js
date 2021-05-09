// Picks a pivot point, and moves all items smaller than the pivot point to the left. Then repeats the process
// pivot point is just going to be the first item in the array

const pivot = (arr, start = 0, end = arr.length - 1) => {
    const swap = (arr, i1, i2) => {
        let tmp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = tmp;
    }

    let pivot = arr[start];
    let swapIndex = start;
    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1); //left
        quickSort(arr, pivotIndex + 1, right); //right
    }
    return arr;
}

console.log(quickSort([5, 2, 1, 3, 8, 7, 6, 4]))