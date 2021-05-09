# Prototypal Inheritance 

### Definition 
Everything in JS is an object. Prototypal inheritance means is that an object can point to another object and inherit all its properties. This allows multiple instances of an object to share common properties

### Example 
```javascript
// This creates an object 
let classObject = function () {
    console.log('I am the base class');
}

// We are adding an object to the base class. This creates a static method that only exists on this object and not it's child objects
classObject.classMethod = function () {
    console.log('I am the base class method');
}

// This creates a new instance of the base class. This will not have the classMethod defined
let newObject = new classObject();
newObject.classMethod() // this is undefined
newObject.classMethod = function () {
    console.log('I am the new class method');
}

// All created instances from here on out will have the classMethod defined on them
classObject.prototype.classMethod = classObject.classMethod;

let newerObject = new classObject();
// will console log the classMethod on classObject
newerObject.classMethod(); 
```

### Types of Prototypal Inheritance
##### Delegation
prototype chain

##### Concatenative
Concatenative inheritance is the ability to add to a class after it’s been defined
Object.assign()
```javascript
const test = { test: function () { console.log('hello') } } 
const test2 = { ...test, extra: 'hi' }
test2.test(); // hello
```

##### Functional
Function that creates a closure or encapsulation
