### Event propagation 
When a user clicks a button, a click event is triggered on the button, and all of the buttons ancestors, even `window` and `document` 

#### 1. Capture Phase 
starts at window/doc/root element, dives down through the ancestors of the target element 

#### 2. Target phase
Event gets triggered  on the element that was clicked

#### 3. Bubble phase
Event bubbles up through ancestors of the target element until at root/doc/window

### Event Delegation 
Instead of attaching click events to every element, you can attach/delegate a click event to the parent element. The parent element will become aware of the click event of the child during the bubble phase of event propagation
```html
<div id="buttonContainer">
    <button className="button">Click Me!</button>
    <button className="button">Click Me!</button>
    <button className="button">Click Me!</button>
</div>
```
```javascript
// This will create an click event for all the button elements as their click goes through the bubble phase
document.getElementById('buttonContainer')
    .addEventListener((e) => {
    if (e.target.className === 'button')
        console.log('I was clicked');
    });
```

### Event bubbling
Type of event propogation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy until it reaches the outermost DOM element.

### Event capturing
Event starts from top element to the target element. Opposite of event bubbline. Less common then event bubbling. 

.addEventListener uses event bubbling as the default case. The third variable allows to set the type capture

`el.addEventListener(e, function, true)`

This is beneficial when bubbling is not supported. For example `focus` does not bubble.