/*
    Similar to bubble sort but it moves the smallest number to the front

    Iterate through the array to find the smallest item. Once found, swaps the position with the current indexed item
*/

const selectionSort = (arr) => {
    const swap = (arr, i1, i2) => {
        let tmp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = tmp;
        return arr;
    }

    const sort = (arr, index) => {
        let indexOfSmallest = index
        let hasSwaped = false;
        for (let i = index; i < arr.length; i++) {
            if (arr[i] < arr[indexOfSmallest]) indexOfSmallest = i;
        }
        if (indexOfSmallest !== index) {
            hasSwaped = true;
            swap(arr, index, indexOfSmallest);
        }
        if (hasSwaped) sort(arr, index + 1);
        else return arr;
    }

    sort(arr, 0);
    return arr;
}

console.log(selectionSort([5, 3, 4, 1, 2])); // 1, 2, 3, 4, 5
console.log(selectionSort([34, 22, 10, 19, 17])); // 10, 17, 19, 22, 34