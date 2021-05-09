/* 
Multiple Pointers - averagePair

Write a function called averagePair. Given a sorted array of integers and a target average, 
determine if there is a pair of value in the array where the average of the pair equals the
target average. There may be more than on pair that matches the average target.

Time: O(N)
Space: O(N)
*/

const averagePair = (arr, avg) => {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let currentAverage = (arr[i] + arr[j]) / 2;
        if (currentAverage < avg) {
            i++;
        } else if (currentAverage > avg) {
            j--;
        } else {
            return true;
        }
    }
    return false;
}

console.log(averagePair([1, 2, 3], 2.5)) // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false
console.log(averagePair([], 4)) // false