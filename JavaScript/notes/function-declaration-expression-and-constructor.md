# Difference Between Function Declaration, Function Expression and Function Constructor

### Function Declaration
Declares a function statement but it does not execute. It is registered in the global namespace.
```javascript
function Person() {};
```
### Function Expression
Executes a function and assigns the response to a variable.
```javascript
let person = Person();
```
### Function Construction
Instantiating a new object of a class constructor. A function declaration is just a regular function unless it has been instantiated, then it becomes a class constructor.
```javascript
let person = new Person();
```