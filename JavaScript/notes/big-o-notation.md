### Definition: 
Mathematical expression of how long an algorithm takes to run depending on how long is the input. Usually it takes the worst case scenario.

- Classifies algorithms by how they respond to change in input size.
- [Ref](https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b)

### Rules for Big O Notation:
1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in array by index, or object by key is constant
4. With loops, complexity of length of loop times the complexity of whatever
is inside

### Space Complexity:
- Auxillary space complexity - space required by the algorithm, not included space taken up by the inputs

### Rules for Space Complexity:
1. Primitives are constant space
2. Strings are O(n) space (n number of characters in string)
3. Reference types are generally O(n). N is length of array or keys of object

### Logarithms:
- Inverse of exponents
    - log2(8) = 3 -----> 2^3 = 8
    - log2(val) = exponent -----> 2^exponent = value

Logarithm of a number roughly measures the number of times you can divide the 
number by 2 (or whatever the base is) before you get a value that is less than or 
equal to one

- O(log n) - this is really good in terms of complexity

---

# 1. Constant-Time Algorithm
`O(1)` - Order 1

- Regardless of the complexity (number of items), the time is constant.

### Examples: 
- Adding an item to an array
- Getting an item from an array by index

```javascript
const getLast = items => items[items.length - 1];
getLast([a, b, c, d]) // d - 1 iteration
```

# 2. Linear-Time Algorithm
`O(N)` - Order N - single loops

- The number of items increases the time. N elements will require N interations

### Examples: 
- Finding the index of an item
- .map, .filter, etc
```javascript
const arr = [a, b, c, d]
findIndex(array, a) // best case 1 iteration
findIndex(array, d) // worst case 4 iterations
```


# 3. Quadratic-Time Algorithm
`O(N^2)` - Order N squared - nested loop

- Worst case time (iterations) is the square of the number of inputs. Time grows exponentially related to the number of inputs

### Examples
- bubble sort
- selection sort
- insertion sort

```javascript
const buildSquareMatrix = items => {
    let matrix = [];

    for(let i=0, total=items.length; i < total; i++) {
        matrix[i] = [];
        for (let j=0, total=items.length; i < total; j++) {
            matrix[i].push(items[j]);
        }
    }
    return matrix;
}

buildSquareMatrix([a, b, c]);
[
    [a,b,c],
    [a,b,c],
    [a,b,c]
]
```

# 4. Logarithmic-Time Algorithm
`O(n log n)` - Order N log N

- Usually the most efficient approach when dealing with large collections. Instead of looking through the components one by one, they split the data into chunks and discard a large amount on every iteration, usually the half, or log base 2.

### Examples:
- Quick Sort 
- Merge Sort

```javascript
const quickSort = (list) => {
    if (list.length < 2) return list;

    let pivot = list[0];
    let left = [];
    let right = [];

    for (let i=1, total=list.length; i<total; i++) {

        if (list[i] < pivot) {
            left.push(list[i]);
        } else {
            right.push(list[i]);
        }
    }

    return [
        ...quickSort(left),
        pivot,
        ...quickSort(right)
    ];
}

```

- Radix sort O(nk)

Singly Linked List:
- Insertion O(1)
- Removal O(1) or O(N)
- Searching O(N)
- Access O(N)

Stacks & Queues
- Insertion O(1)
- Removal O(1)
- Searching O(N)
- Access O(N)

Binary Search Trees
- Insertion O(log N)
- Searching O(log N)

Big O Shorthands
- Arithmetic operations are constant O(1)
- Variable assignments are constant O(1)
- Accessing elements in array (by index) or object (by key) are constant O(1)
- In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop  


