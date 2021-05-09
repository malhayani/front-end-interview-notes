/* 
Frequency Counter - sameFrequency

Write a function called sameFrequency. Given two positive integers,
find out if the two numbers have the same frequency of digits.

Your solutions MUST have the following complexities: Time O(N)
*/

const trackNumberFrequency = (num) => {
    let numbers = {};
    for (let i = 0; i < num.length; i++) {
        let n = num[i];
        if (!numbers[n]) numbers[n] = 1;
        else numbers[n] = numbers[n] + 1;
    }
    return numbers;
}

const sameFrequency = (num1, num2) => {
    num1 = num1.toString();
    num2 = num2.toString();
    if (num1.length !== num2.length) {
        return false;
    } else {
        let num1Frequency = trackNumberFrequency(num1);
        let num2Frequency = trackNumberFrequency(num2);
        for (let i = 0; i < Object.keys(num1Frequency).length; i++) {
            let n = Object.keys(num1Frequency)[i];
            if (num2Frequency[n] !== num1Frequency[n]) {
                return false;
            }
        }
        return true;
    }
}

console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false