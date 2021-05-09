# Spread & Rest

### Spread
Copies everything into new variable.

Similar to the concat function but is must more performant.

Enforces immutability because it copies the values into a new array 

```javascript
const arr1 = [1,2,3];
const arr2 = [3,2,1];

const arr3 = [...arr1, ...arr2];
console.log(arr3) //[1,2,3,3,2,1]
```

### Rest
Retrieves all remaining elements after a descructuring operation

```javascript
const arr1 = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = arr1;
console.log(one) //1
console.log(two) //2
console.log(rest) //[3,4,5,6]
```