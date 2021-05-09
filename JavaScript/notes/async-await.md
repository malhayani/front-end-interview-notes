# Async/Await
Introducted in ES8 to make working with promises easier.

### Resolving
```javascript
const getNum = () => {
    return Promise.resolve(2);
}

// does the same thing as getNum
const getNum2 = async () => {
    return 2;
}
```

### Rejecting
```javascript
const getNum = () => {
    return Promise.reject('Some error');
}

// does the same thing as getNum
const getNum2 = async () => {
    throw 'Some error';
}
```

### Await vs .then 
Await can be used inside of async functions to await a response from an asynchronous call. They are similar to .then. 

.then can be used outside of asynchronous functions.

```javascript
const loadData = async () => {
    let promise1 = fetch('url');
    let promise2 = fetch('url');

    let res1 = await promise1;    
    let res2 = await promise2;

    return res1 + ' ' + res2;
}
// Since we're not in an async function anymore, we have to use .then
loadData().then(() => console.log('Done'));
```

### Error Handling
##### Promises
Handle async and sync errors separately.
```javascript
const loadData = () => {
    try { // catches synchronous errors
        getJSON().then((response) => {
            let parsed = JSON.parse(response);
        }).catch(err => {
            // catches asynchronous errors
            console.log(e);
        })
    } catch (err) {
        console.log(e)
    }
}
```
##### Async/Await 
Handle both sync and async errors in the same code block
```javascript
const loadData = async () => {
    try {
        var data = JSON.parse(await getJSON());
        console.log(data);
    } catch (err) {
        console.log(e);
    }
}
```