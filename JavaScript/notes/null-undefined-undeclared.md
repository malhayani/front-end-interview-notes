# Null, Undefined & Undeclared

### Null
Value of a variable and is a type of `object`
```javascript
    let b = null;
    console.log(b); // null
    console.log(typeof b); //object
```

### Undefined
Variable that is defined, but no value exists and is of type `undefined`
```javascript
    let b;
    console.log(b); // undefined
    console.log(typeof b); //undefined
```

### Undeclared
This is variable that is not defined. 

- Variables are declared without the `var`, `let` or `const` keyword are created as global variable.
```javascript
    console.log(undeclaredVariable); // ReferenceError: undeclaredVariable is not defined
    undeclaredVariable = 'test';

    console.log(undeclaredVariable); // test
```