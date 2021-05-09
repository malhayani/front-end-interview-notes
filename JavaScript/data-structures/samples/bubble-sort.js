/* 
    The largest value bubbles to the top. Continue to pass over the array until no more swaps occur.

    Can be solved through recursion or nested loops. In this solution below we have optimized bubble sort because once the algorithm detect that it didn't
    needed to swap anything, it stops.
*/

const bubbleSort = (arr, comparator) => {
    if (typeof comparator !== 'function') {
        comparator = (a, b) => {
            if (a > b) return 1
            else if (a < b) return -1
            else return 0;
        }
    }

    const swap = (arr, i1, i2) => {
        let tmp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = tmp;
        return arr;
    }
    const sort = (arr) => {
        let hasSwaped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (comparator(arr[i], arr[i + 1]) === 1) {
                arr = swap(arr, i, i + 1);
                hasSwaped = true;
            }
        }
        if (hasSwaped) return sort(arr);
        else return arr;
    }
    sort(arr);
    return arr;
}

console.log(bubbleSort([30, 37, 10, 14, 18, 14, 29])) // 10, 14, 14, 18, 29, 30, 37