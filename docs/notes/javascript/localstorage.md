# Local Storage

The read-only **`localStorage`** property allows you to access a `[Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage)` object for the `[Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)`'s origin; the stored data is saved across browser sessions. `localStorage` is similar to `[sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)`, except that while data stored in `localStorage` has no expiration time, data stored in `sessionStorage` gets cleared when the page session ends — that is, when the page is closed.

It should be noted that data stored in either `localStorage` or `sessionStorage` **is specific to the protocol of the page**.

The keys and the values are **always strings** (note that, as with objects, integer keys will be automatically converted to strings).

```js
// Store data
localStorage.setItem("name", "mario");
localStorage.setItem("age", 50);
localStorage.setItem("type", "game");

// get data
let name = localStorage.getItem("name");
let age = localStorage.getItem("age");
console.log(name);
console.log(age);

// Update
localStorage.setItem("name", "shahid");
name = localStorage.getItem("name");
console.log(name);

// Deleting
console.log(localStorage.getItem("type"));
localStorage.removeItem("type");
console.log(localStorage.getItem("type"));

// Remove all items
// localStorage.clear();
```

Storing Array in LocalStorage

```js
const users = [
  { name: "shawn", premium: true },
  { name: "mike", premium: false },
  { name: "john", premium: false },
  { name: "stan", premium: true }
];

console.log(JSON.stringify(users));

localStorage.setItem("users", JSON.stringify(users));

const usersData = localStorage.getItem("users");
console.log(JSON.parse(usersData));
```

What are we doing here?

1. Convert JSON to String use JSON.stringify()
2. Store this new string to the localstorage
3. Get this value from the localStorage
4. Now convert this string to the JSON value using JSON.parse();
