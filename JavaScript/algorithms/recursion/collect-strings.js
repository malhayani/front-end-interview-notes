/* 
Write a function called collectStrings which accepts an object and returns an array of all
the values in the object that have the typeof string
*/

const collectStrings = (obj) => {
    const strings = [];
    const findStrings = (obj, keys) => {
        let currentKey = keys.shift();
        if (typeof obj[currentKey] === 'object') {
            findStrings(obj[currentKey], Object.keys(obj[currentKey]));
        } else if (typeof obj[currentKey] === 'string') {
            strings.push(obj[currentKey]);
        }
        if (keys.length > 0) {
            findStrings(obj, keys);
        }
    }
    findStrings(obj, Object.keys(obj));
    return strings;
}

const obj = {
    test: 'test',
    test1: 1,
    test2: {
        test: 1,
        test1: 'test',
        test2: 2
    }
}

console.log(collectStrings(obj))