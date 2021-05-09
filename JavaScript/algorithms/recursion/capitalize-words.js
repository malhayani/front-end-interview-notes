/* 
Write a recursive function called capitalizeWords. Given an array of words, return a new
array containing each word capitalized.
*/

const capitalizeWords = (arr) => {
    const capitalizedArray = [];

    const capitalize = (arr) => {
        const currentWord = arr.shift();
        capitalizedArray.push(currentWord.toUpperCase());
        if (arr.length > 0) {
            capitalize(arr);
        }
    }

    capitalize(arr);
    return capitalizedArray;
}

console.log(capitalizeWords(['test', 'test'])) // [TEST, TEST]