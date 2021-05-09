### What is asynchronous programming and why is it important in JavaScript?
- Synchronous means code is executed top to bottom.
- Asynchronous means that code is run in an event loop. When a blocking request is started, code keeps running without blocking for the result. When the result is ready, it fires and interrupt, which causes the event handler to run. 
    - UIs are asynchronous by nature, and are waiting for user input to interrupt the event loop and trigger event handlers.
    - Allow performance improvements because it doesn’t block code from being executed, and accepts incoming requests.