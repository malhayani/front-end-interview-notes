/*
Given a sorted array and a number, write a function called sortedFrequency that counts the
occurrences of the numnber in the array
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2) //4
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3) //1
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1) //2
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4) //-1
*/

const sortedFrequency = (arr, num) => {
    let count = 0;
    let isFound = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            count++;
            isFound = true;
        }
        if (arr[i] > num) {
            break;
        }
    }
    return isFound ? count : -1;
}

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)) //4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)) //1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)) //2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)) //-1