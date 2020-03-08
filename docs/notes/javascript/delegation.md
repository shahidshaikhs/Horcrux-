# Event Delegation

Event delegation is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it.

```js
const ul = document.querySelector("ul");

ul.addEventListener("click", e => {
  if (e.target.tagName == "LI") {
    e.target.remove();
  }
});
```
