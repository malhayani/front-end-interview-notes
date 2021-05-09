# this 

### Definition
In JS, `this` does not refer to the function in which it is used, or it’s scope. It is determined mostly by the invocation context of the function. The context of `this` is determined by execution context. There are four ways to bind the `this` keyword.

### Priority (highest to lowest)
New Binding -> Explicit -> Implicit -> Default

### 1. Default Binding
The default binding of this is the global scope (window)
```javascript
var myFunc = function () { 
    console.log(this.a) 
} 
var a = 5; 
myFunc() // 5
```
### 2. Implicit Binding
Object before the dot is what is bound
```javascript
var myFunc = function () { 
    console.log(this.a) 
} 
var obj = { 
    a:5, 
    myFunc: myFunc 
}; 
obj.myFunc() // 5
```
```javascript
var myFunc = function () { 
    console.log(this.a) 
} 
var obj = { 
    a:5, 
    myFunc: myFunc 
}; 
var test = obj.myFunc
test() // undefined - since this is just a reference to the function, it uses the default this
```
### 3. Explicit Binding
Using `call`, `apply` or `bind` will tell a function to use a particular object for it’s this binding
```javascript
function greet() { 
    console.log(this.name) 
};
var person = {name: ‘Alex’}
// call
greet.call(person, arg1, arg2, arg3, …) // Alex
// apply
greet.apply(person, [args]) // Alex
// bind
var greetPerson = greet.bind(person)
greetPerson() //Alex
```
## 4. New Binding
Using the new keyword. 
##### Process that occurs when using the new keyword
1. Empty object is created and referenced by this (inherits prototype of the function). 
2. Properties and methods are added to the object referenced by this. 
3. Newly created object referenced by this is returned at the end implicitly 
```javascript
function Foo() { 
    this.name = "Tim"; 
    this.say = () => {
        console.log(this.name) 
    };
var name = "other name";
var person = new Foo();
console.log(person.name) //Tim
```

### 5. Arrow Functions (New since ES6)
Arrow functions bind the context of this on the lexical scope. 
- They do not rebind this.
- They are not impacted by any rule mentioned above. 
- Cannot use the arrow function with the new keyword
```javascript
const outerThis = this;
const function = () => {
	console.log(outerThis === this)
}
new func(); // will throw an error
func.call(null) //true
func.apply(undefined)//true
func.bind({})(); //true
```
