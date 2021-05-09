const bubbleSort = (arr) => {

    const swap = (arr, i1, i2) => {
        let tmp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = tmp;
        return arr;
    }

    const sort = (arr) => {
        let hasSwaped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                hasSwaped = true;
            }
        }
        if (hasSwaped) return sort(arr);
        else return arr;
    }

    return sort(arr);
}


const findNGreatestElementInArray = (arr, k) => {
    const sortedArr = bubbleSort(arr);

    let numbers = {};
    let kGreatest = arr[0];
    let counter = 0;

    for (let num of sortedArr) {
        if (!numbers[num]) {
            numbers[num] = 1;
            counter++;
        }
        if (counter === k) {
            kGreatest = num;
            break;
        }
    }

    return kGreatest;
}

console.log(findNGreatestElementInArray([5, 6, 1, 7, 9, 8, 2, 5, 2, 9], 4));
