# Data Types

A variable in JavaScript can contain any data. A variable can at one moment be a string and at another be a number:

```js
// no errorlet message = "hello";
message = 123456;
```

Programming languages that allow such things are called “dynamically typed”, meaning that there are data types, but variables are not bound to any of them.

There are seven basic data types in JavaScript. Here, we’ll cover them in general and in the next chapters we’ll talk about each of them in detail.

## A number

```js
let n = 123;
n = 12.345;
```

The *number* type represents both integer and floating point numbers.

There are many operations for numbers, e.g. multiplication `*`, division `/`, addition `+`, subtraction `-`, and so on.

Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: `Infinity`, `-Infinity` and `NaN`.

- `Infinity` represents the mathematical [Infinity](https://en.wikipedia.org/wiki/Infinity) ∞. It is a special value that’s greater than any number.

  We can get it as a result of division by zero:

```js
alert(1 / 0); // Infinity
```

Or just reference it directly:

```js
alert(Infinity); // Infinity
```

- `NaN` represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:

```js
alert("not a number" / 2); // NaN, such division is erroneous
```

`NaN` is sticky. Any further operation on `NaN` returns `NaN`:

```js
alert("not a number" / 2 + 5); // NaN
```

So, if there’s a `NaN` somewhere in a mathematical expression, it propagates to the whole result.

**Mathematical operations are safe**

Doing maths is “safe” in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc.

The script will never stop with a fatal error (“die”). At worst, we’ll get `NaN` as the result.

Special numeric values formally belong to the “number” type. Of course they are not numbers in the common sense of this word.

We’ll see more about working with numbers in the chapter [Numbers](https://javascript.info/number).

## A string

A string in JavaScript must be surrounded by quotes.

```js
let str = "Hello";
let str2 = "Single quotes are ok too";
let phrase = `can embed ${str}`;
```

In JavaScript, there are 3 types of quotes.

1. Double quotes: `"Hello"`.
2. Single quotes: `'Hello'`.
3. Backticks: `Hello`.

Double and single quotes are “simple” quotes. There’s no difference between them in JavaScript.

Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in `${…}`, for example:

```js
let name = "John";
// embed a variable
alert(`Hello, ${name}!`); // Hello, John!

// embed an expression
alert(`the result is ${1 + 2}`); // the result is 3
```

The expression inside `${…}` is evaluated and the result becomes a part of the string. We can put anything in there: a variable like `name` or an arithmetical expression like `1 + 2` or something more complex.

Please note that this can only be done in backticks. Other quotes don’t have this embedding functionality!

```js
alert("the result is ${1 + 2}");
// the result is ${1 + 2} (double quotes do nothing)
```

We’ll cover strings more thoroughly in the chapter [Strings](https://javascript.info/string).

**There is no *character* type.**

In some languages, there is a special “character” type for a single character. For example, in the C language and in Java it is `char`.

In JavaScript, there is no such type. There’s only one type: `string`. A string may consist of only one character or many of them.

## A boolean (logical type)

The boolean type has only two values: `true` and `false`.

This type is commonly used to store yes/no values: `true` means “yes, correct”, and `false` means “no, incorrect”.

For instance:

```js
let nameFieldChecked = true; // yes, name field is checkedlet
ageFieldChecked = false; // no, age field is not checked
```

Boolean values also come as a result of comparisons:

```js
let isGreater = 4 > 1;
alert(isGreater); // true (the comparison result is "yes")
```

We’ll cover booleans more deeply in the chapter [Logical operators](https://javascript.info/logical-operators).

## The “null” value

The special `null` value does not belong to any of the types described above.

It forms a separate type of its own which contains only the `null` value:

```js
let age = null;
```

In JavaScript, `null` is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

It’s just a special value which represents “nothing”, “empty” or “value unknown”.

The code above states that `age` is unknown or empty for some reason.

## The “undefined” value

The special value `undefined` also stands apart. It makes a type of its own, just like `null`.

The meaning of `undefined` is “value is not assigned”.

If a variable is declared, but not assigned, then its value is `undefined`:

```js
let x;
alert(x); // shows "undefined"
```

Technically, it is possible to assign `undefined` to any variable:

```js
let x = 123;
x = undefined;
alert(x); // "undefined"
```

…But we don’t recommend doing that. Normally, we use `null` to assign an “empty” or “unknown” value to a variable, and we use `undefined` for checks like seeing if a variable has been assigned.

## Objects and Symbols

The `object` type is special.

All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.

The `symbol` type is used to create unique identifiers for objects. We mention it here for completeness, but we’ll study it after objects.

## The typeof operator

The `typeof` operator returns the type of the argument. It’s useful when we want to process values of different types differently or just want to do a quick check.

It supports two forms of syntax:

1. As an operator: `typeof x`.
2. As a function: `typeof(x)`.

In other words, it works with parentheses or without them. The result is the same.

The call to `typeof x` returns a string with the type name:

```js
typeof undefined; // "undefined"

typeof 0; // "number"

typeof true; // "boolean"

typeof "foo"; // "string"

typeof Symbol("id"); // "symbol"

typeof Math; // "object"  (1)

typeof null; // "object"  (2)

typeof alert; // "function"  (3)
```

The last three lines may need additional explanation:

1. `Math` is a built-in object that provides mathematical operations.
2. The result of `typeof null` is `"object"`. That’s wrong. It is an officially recognized error in `typeof`, kept for compatibility. Of course, `null` is not an object. It is a special value with a separate type of its own. So, again, this is an error in the language.
3. The result of `typeof alert` is `"function"`, because `alert` is a function. We’ll study functions in the next chapters where we’ll also see that there’s no special “function” type in JavaScript. Functions belong to the object type. But `typeof` treats them differently, returning `"function"`. That’s not quite correct, but very convenient in practice.

## Summary

There are 7 basic data types in JavaScript.

- `number` for numbers of any kind: integer or floating-point.
- `string` for strings. A string may have one or more characters, there’s no separate single-character type.
- `boolean` for `true`/`false`.
- `null` for unknown values – a standalone type that has a single value `null`.
- `undefined` for unassigned values – a standalone type that has a single value `undefined`.
- `object` for more complex data structures.
- `symbol` for unique identifiers.

The `typeof` operator allows us to see which type is stored in a variable.

- Two forms: `typeof x` or `typeof(x)`.
- Returns a string with the name of the type, like `"string"`.
- For `null` returns `"object"` – this is an error in the language, it’s not actually an object.

## Primitive & Non Primitive Datatypes

JavaScript provides different data types to hold different types of values. There are two types of data types in JavaScript:

1. Primitive values
2. Non-primitive values (object references)

Data types that are known as primitive values in JavaScript are numbers, strings, booleans, null, undefined. Objects such as functions and arrays are referred to as non-primitive values.

The fundamental difference between primitives and non-primitives is that primitives are immutable and non-primitives are mutable.

**Primitives** are known as being immutable data types because there is no way to change a primitive value once it gets created.

```js
var string = "This is a string.";
string[1] = "H";
console.log(string); // 'This is a string.'
```

Primitives are compared by value. Two values are strictly equal if they have the same value.

```js
    var number1 = 5;
    var number2 = 5;
    number1 === number 2; // true
    var string1 = 'This is a string.';
    var string2 = 'This is a string.';
    string1 === string2; // true
```

**Non-primitive** values are mutable data types. The value of an object can be changed after it gets created.

```js
var arr = ["one", "two", "three", "four", "five"];
arr[1] = "TWO";
console.log(arr); // [ 'one', 'TWO', 'three', 'four', 'five' ];
```

Objects are not compared by value. This means that even if two objects have the same properties and values, they are not strictly equal. Same goes for arrays. Even if they have the same elements that are in the same order, they are not strictly equal.

````js
    var obj1 = { 'cat': 'playful' };
    var obj2 = { 'cat': 'playful' };
    obj1 === obj2;  // false
    var arr1 = [ 1, 2, 3, 4, 5 ];
    var arr2 = [ 1, 2, 3, 4, 5 ];
    arr1 === arr2;  // false

Non primitive values can also be referred to as reference types because they are being compared by reference instead of value. Two objects are only strictly equal if they refer to the same underlying object.
```js
    var obj3 = { 'car' : 'purple' }
    var obj4 = obj3;
    obj3 === obj4;  // true
````

You can check if two objects are the same by doing a deep equals comparison to go through each of the properties to determine if two objects have the exact same properties.

### Summary (Primitive & Non Primitive)
---
When you assign a variable a value, the JavaScript engine must determine whether the value is a primitive or a reference value.

If the variable stores a primitive value, when you manipulate its value, you are working on the actual value stored in the variable. In other words, the variable that stores a primitive value is accessed *by value*.

Unlike the primitive value, when you manipulate an object, you are working on the *reference* to that object, rather than the actual object. In short, a variable that stores an object is accessed *by reference*.

Primitive variables are stored on the stack, whereas the reference type variables are stored on the heap. When you create an object its content is stored on the heap and then a pointer is set in the stack with the variable name pointing to its content.
