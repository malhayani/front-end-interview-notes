/*
Write a function called someRecursive which accepts an array and
a callback. The function returns true is a single value in the array
returns true when passed into the callback. Otherwise it returns false
*/

const someRecursive = (arr, cb) => {
    const checkArray = (arr) => {
        const currentItem = arr.pop();
        if (cb(currentItem)) {
            return true;
        } else {
            if (arr.length > 0) {
                return checkArray(arr);
            } else {
                return false;
            }
        }
    }
    return checkArray(arr);
}

const callback = (string) => {
    return string.length === 5;
}

console.log(someRecursive(['test', 'tests', 'fly'], callback)); // true
console.log(someRecursive(['hi', 'bye', 'cry'], callback)); //false