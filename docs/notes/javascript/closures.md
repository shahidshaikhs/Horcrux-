# Javascript Closures

When a function is defined inside another function and the inner function is able to access the variables of the parent function. However, the parent is not able to access the variables of the child function. (This is lexical scope)

Now, this child function can also run outside its lexical scope. THis child function remembers its lexical scope even when running outside of is scope or parent scope.

Closure is a valid, living reference to a scope that should already be dead

```js
function sayHello(name) {
  const string = "Hello" + name;
  function print() {
    console.log(string);
  }
  return print;
}

const doIt = sayHello();
doIt(); //This guy is printing the value
```

::: tip
(In JavaScript, whenever you declare a function inside another function, the inside function(s) is/are recreated again each time the outside function is called.)
:::
