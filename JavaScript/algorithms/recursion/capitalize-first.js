/*
Write a function called capitalizeFirst. Given an array of strings,
capitalize the first letter of each string in the array
*/

const capitalizeFirst = (array) => {
    const capitalizedArray = [];

    const capitalize = (arr) => {
        const currentString = arr.shift();
        capitalizedArray.push(currentString.substring(0, 1).toUpperCase() + currentString.substring(1, currentString.length));
        if (arr.length > 0) {
            capitalize(arr);
        }
    }
    capitalize(array);
    return capitalizedArray;
}
console.log(capitalizeFirst(['test', 'robot', 'cake'])); // [Test, Robot, Cake]