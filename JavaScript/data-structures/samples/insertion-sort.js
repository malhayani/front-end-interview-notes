/* 
    Builds up the sort by gradually creating a larger left half which is always sorted
*/

const insertionSort = (arr) => {
    const swap = (arr, i1, i2) => {
        let tmp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = tmp;
        return arr;
    }

    for (let i = 1; i < arr.length; i++) {
        // needs to be moved
        if (arr[i] < arr[i - 1]) {
            let indexOfSelection = i;
            for (let j = indexOfSelection - 1; j >= 0; j--) {
                if (arr[indexOfSelection] < arr[j]) {
                    swap(arr, indexOfSelection, j);
                    indexOfSelection = j;
                }
            }
        }
    }
    return arr;
}

console.log(insertionSort([3, 44, 38, 5, 47, 15])) // 3, 5, 15, 38, 44, 47 
