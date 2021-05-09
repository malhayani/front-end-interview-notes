const bubbleSort = (arr, comparator) => {
    if (typeof comparator !== 'function') {
        comparator = (a, b) => a > b ? 1 : a < b ? -1 : 0;
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
            if (comparator(arr[i], arr[i + 1]) > 0) {
                arr = swap(arr, i, i + 1);
                hasSwaped = true;
            }
        }
        if (hasSwaped) return sort(arr);
        else return arr;
    }

    return sort(arr);
}

console.log(bubbleSort([5, 3, 8, 1, 9, 4, 1, 10, 2])) // [1, 1, 2, 3, 4, 5, 8, 9, 10]
console.log(bubbleSort(['rat', 'mouse', 'dog', 'cat'])) // [cat, dog, mouse, rat]

const reverseSort = (a, b) => {
    return a < b ? 1 : a > b ? -1 : 0;
}

console.log(bubbleSort(['rat', 'mouse', 'dog', 'cat'], reverseSort)) // [rat, mouse, dog, cat]

let people = [
    {
        name: 'Cat',
        age: 4
    },
    {
        name: 'Mom',
        age: 26
    },
    {
        name: 'Dad',
        age: 25
    },
    {
        name: 'Dog',
        age: 3
    },
];
const sortByAgeAscending = (a, b) => {
    return a.age > b.age ? 1 : a.age < b.age ? -1 : 0;
}
console.log(bubbleSort(people, sortByAgeAscending)) // [Dog, Cat, Dad, Mom]
