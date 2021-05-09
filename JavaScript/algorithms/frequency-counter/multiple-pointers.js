/* 
Frequency Counter / Multiple Pointers - areThereDuplicates

Implement a function called, areThereDuplicates which accepts a variable number
of arguments, and checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.
*/

const areThereDuplicates = (...args) => {
    args = args.sort((a, b) => a < b ? -1 : 1);
    let i = 0;
    let j = args.length - 1;
    while (i < j) {
        if (args[i] === args[i + 1]) {
            return true;
        } else if (args[j] === args[j - 1]) {
            return true;
        } else {
            i++;
            j--;
        }
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true
console.log(areThereDuplicates('a', 'b', 'c', 'b')) // true
console.log(areThereDuplicates('a', 'b', 'c', 'e')) // false