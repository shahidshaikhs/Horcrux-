# Object Oriented Javascript

Any methods that any object has access to are listed inside PROTO property.

Now, lets say you create array by below method:

    const ages = new Array(20,25,30)

The 'new' keyword tells us that we will be creating some kind of object. Now, in the above code, 'Array' is the constructor function which will create array object.

_Another example:_

```js
const userOne = new Object();
```

Here 'Object' is the constructor, which will create an object.

---

Now, you will keep hearing this one statement 'Everything in Javascript is an object'. This is not exactly true

But then you must be wondering, aren't strings and numbers, etc (Primitive Type) NOT objects? Then, tell me how can you use methods on them such as "length, toUpperCase(), etc"?

So to answer this: When you create a primitive type variable, JS wraps the entire variable in a wrapper object. That object has these methods and properties. Hence, we get methods like 'length, toUpperCase(), etc'

```js
const nameTwo = new String("ryu");
```

[<img src="https://www.notion.so/shahidsclutter/Object-Oriented-Javascript-8036cc99eed04554a451ff3fa96ab4ae#4712aefd8deb4f669fe906cb5e16b01d">](http://google.com.au/)

> So, eventhough everything is not an object in Javascript, but everything can behave like an object.
