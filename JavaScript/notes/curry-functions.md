# Curry Function
Process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument

```javascript
const sum = x => y => x + y;
sum(2)(1); // 3
sum(2); // y => 2 + y;
```

### First class functions
In functional programming JavaScript has first class functions because it supports functions as arguments and return values.