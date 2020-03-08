# Spread & Rest Operator

The spread operator “spreads” the values in an iterable (arrays, strings) across zero or more arguments or elements.

The spread operator (…) takes the values of arr1 and spreads them across arr2. We could also write the above example like this:

```js
const someArray = [1, 2, 3, 4, 5];
const someArray2 = [7, 8, 9, 20];

const newArray = [...someArray, ...someArray2];
console.log(newArray);
```

More example

```js
//  Rest Parameter
const double = (...nums) => {
  // do something
  return nums.map(num => num * 2);
};

const result = double(1, 3, 5, 4, 8);
console.log(result);

// Spread Parameter
const people = ["shaun", "ryu", "crystal"];
const morepeople = ["mario", "newMario"];
const allpeople = [...people, ...morepeople];

console.log(...people);
console.log(allpeople);

// Spread with Objects
const person = { name: "shahid", age: 24 };
const personClone = { ...person };
console.log(personClone);
```
