# Closures
Inner functions inside of outer functions. They have their own local scope, but also have access to outer function's scope, parameters. They also have access to global variables.

### Benefits:
- JavaScript is a `function-level scope` rather than other languages, which are `block-level scope`. 
- JavaScript is an asynchronous/event driven language

### How closures work
1. After outer function has been executed and returned, closure can still run.
2. Closures can store references to the other function's variables. They will always have access to the updated values of the outer function's variables.
3. Since they have access to the updated version of the outer functions variables, this can cause issues with for loops. This can be mitigated with IIFE.

```javascript 
let blogPost = [
  {
    title: 'title0',
    id: 0
  },
  {
    title: 'title1',
    id: 0
  },
  {
    title: 'title2',
    id: 0
  }
];

function generateBlogPostId(thePost) {
    let uniqueId = 100;
    for (let i = 0; i < blogPosts.length; i++) {
        // by immediately invoking this function, it ensures that i is the correct value, otherwise i would be the final i value for all of them
        thePost[i]['id'] = function (j) {
            return uniqueId + j;
        }(i);
    }
    return thePost;
}
```