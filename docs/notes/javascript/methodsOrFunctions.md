# Methods and functions

It's semantics and has to do with what you are trying to express.

In javascript every function is an object. An object is a collection of key:value pairs. If a value is a primitive (number, string, boolean), or another object, the value is considered a property. If a value is a function, it is called a 'method'.

Within the scope of an object, a function is referred to as a method of that object. It is invoked from the object namespace 'MyObj.theMethod()'. Since we said a function is an object, a function within a function is considered a method of that function. You can say I am going to use the save **method** of my object. Or you could say, "the save method accepts a **function** as a parameter". But you generally wouldn't say a function accepts a method as a parameter.

::: tip
So it could happen that a function A, being an object, has properties and methods, one of which happens to be another function B. Then B can accept a function C as an argument and, when executed, can return another function D.
:::
