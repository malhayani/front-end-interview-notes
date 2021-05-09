/*
Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects
*/

const nestedEvenSum = (obj) => {
    let sum = 0;
    const traverseObject = (obj, keys) => {
        const currentKey = keys.shift();
        if (typeof obj[currentKey] === 'object') {
            traverseObject(obj[currentKey], Object.keys(obj[currentKey]));
        } else {
            if (typeof obj[currentKey] === 'number') {
                if (obj[currentKey] % 2 === 0) {
                    sum = sum + obj[currentKey];
                }
            }
        }
        if (keys.length > 0) {
            traverseObject(obj, keys);
        }
    }
    traverseObject(obj, Object.keys(obj));
    return sum;
}

const object = {
    a: 1,
    b: {
        b1: 2,
        b2: 4,
        bc: 3
    },
    c: 5,
    d: 6,
    e: {
        e1: 4,
        e2: {
            e21: 1,
            e22: 2
        }
    }
}

console.log(nestedEvenSum(object)) //18