/*
Write a function called stringifyNumbers which takes in an object and finds all of the 
values which are numbers and converts them to strings. Recursion would be a great way to
solve this!
*/

const stringifyNumbers = (object) => {
    const modifiedObject = { ...object }
    const stringify = (obj, keys) => {
        const currentKey = keys.shift();
        if (typeof obj[currentKey] === 'object') {
            stringify(obj[currentKey], Object.keys(obj[currentKey]));
        } else if (typeof obj[currentKey] === 'number') {
            obj[currentKey] = obj[currentKey].toString();
        }
        if (keys.length > 0) {
            stringify(obj, keys);
        }
    }
    stringify(modifiedObject, Object.keys(object));
    return modifiedObject;
}

const object = {
    a: 2,
    b: {
        b1: 'test',
        b2: 3
    },
    c: {
        c1: 2,
        c2: {
            c21: 2,
            c22: 'test'
        }
    }
}

console.log(stringifyNumbers(object))