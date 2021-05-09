# Apply, Call and Bind
These functions are used to `explicity` set the `this` keyword independent of how a function is called. 

### Apply
Sets the value of the `this` keyword and immediately calls the function.

- Takes in function arguments as an array

```javascript
myFunction.apply(this, [args]);
```
### Call
Sets the value of the `this` keyword and immediately calls the function.

- Takes in function arguments individually
- Slighty faster than apply because it does not have to process an arguments array

```javascript
myFunction.call(this, arg1, arg2, arg3, ...);
```
### Bind
Creates a copy of the function and sets the `this` keyword. This allows the function to be called later.

```javascript
let myFunc = myFunction.apply(this);
myFunc();
```

```javascript
const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42
```