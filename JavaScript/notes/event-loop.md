# Event Loop
Event Loop monitors the Call Stack and the Callback Queue. If the Call Stack is empty, the Event Loop will take the first event from the queue and will push it to the Call Stack, which effectively runs it. This iteration is called a `tick`. Each event is just a function callback.

```javascript 
console.log('hi');
setTimeout(function cb1() {
    console.log('callback');
}, 5000);
console.log('bye');
```

1. `console.log('hi')` is added to Call Stack
2. `console.log('hi')` is executed
3. `console.log('hi')` is removed from the Call Stack
4. `setTimeout(...)` is added to Call Stack
5. `setTimeout(...)` is executed
6. timer function is added to the Web Apis - handles countdown
7. `setTimeout(...)` is removed from the Call Stack
8. `console.log('bye')` is added to Call Stack
9. `console.log('bye')` is executed
10. `console.log('bye')` is removed from the Call Stack
11. after 5000 ms, `cb1` is added to the Callback Queue
12. Event Loop takes `cb1` and pushes to the Call Stack
13. `cb1` is executed and adds `console.log('callback')` to the Call Stack 
14. `console.log('callback')` is executed
15. `console.log('callback')` is removed from Call Stack
16. `cb1` is removed from the Call Stack 

### How setTimeout(...) works
setTimeout does not automatically put your callback on the event loop queue. It sets up a timer. When the time expires, the environment places your callback into the event loop. This allows a future tick to pick it up and execute it.

```javascript
setTimeout(myCallback, 1000)
```
This does not mean myCallback will be executed in 1000 ms. Instead, it means in 1000 ms, myCallback will be added to the Event Loop queue. However there might already be things in the Call Stack, and myCallback will have to wait.

`setTimeout(function, 0)` allows to write asynchronous code by postponing the function until the Call Stack is clear.

### Job Queue (ES6)
ES6 introduced the job queue. It is a layer on top of the Event Loop queue. Promises uses the Job Queue. 

The Job Queue is attached to the end of every tick in the Event Loop queue. Certain async actions that may occur during a tick of the event loop will not cause a whole new event to be added to the event loop queue. Instead adds the item (Job) to the event to the end of the current tick's Job queue.

They are similar to the setTimeout(callback, 0) method but they are `later, but as soon as possible` instead of `later`