# Hoisting
Variables and function declarations are moved to the top of their scope before code execution.

No matter where functions and variables are declared, they are moved to the top of their scope, regardless of whether their scope if global or local.

Variable declarations are processed before any code is executed.

Undeclared variables do not exist until code assigning them is executed. This causes an assignment to a variable that is undeclared to implicitly become a global variable when the assignment is executed. 

USing `strict mode` from ES5 enforces that variables are defined before they are used, preventing some of the gotchas with hoisting.

Variable assignment takes precedency over function declaration. 

Function delcartions take precendence over variable declartions.

```javascript
function hoist() {
    a = 20;
    var b = 100;
}

hoist();
console.log(a); // 20 
console.log(b); // ReferenceError b is undefined
```

In the above code sample, since a is declared without var, it is hoisted to the top of the global scope and defined there. Whereas, b is hoisted to the top of it's function scope and defined there. So when trying to access b outside of the scope of the function, it is undeclared.

```javascript 
function hoist() {
    console.log(message);
    var message='Hoisting is all the rage!'
}

hoist(); // undefined

// hoisting will produce this
function hoist() {
    var message;
    console.log(message);
    message='Hoisting is all the rage!'
}

hoist(); // undefined

```

### Function Declarations
Function declations are hoisted

### Function Expressions
Function expressions are not hoisted 

```javascript
let expression; // this would be hoisted

expression(); // Output: typeerror: expression is not a function

let expression = () => {
    console.log('test')
}

```