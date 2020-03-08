# Asynchronous JS

To allow us to understand what asynchronous JavaScript is, we ought to start off by making sure we understand what synchronous JavaScript is. This section recaps some of the information we saw in the previous article.

A lot of the functionality we have looked at in previous learning area modules is synchronous — you run some code, and the result is returned as soon as the browser can do so.

```js
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  alert("You clicked me!");

  let pElem = document.createElement("p");
  pElem.textContent = "This is a newly-added paragraph.";
  document.body.appendChild(pElem);
});
```

In this block, the lines are executed one after the other:

1. We grab a reference to a `[<button>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)` element that is already available in the DOM.
2. We add a `[click](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)` event listener to it so that when the button is clicked:
   1. An `[alert()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)` message appears.
   2. Once the alert is dismissed, we create a `[<p>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)` element.
   3. We then give it some text content.
   4. Finally, we append the paragraph to the document body.

While each operation is being processed, nothing else can happen — rendering is paused. This is because as we said in the [previous article](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing), [JavaScript is single threaded](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts#JavaScript_is_single_threaded). Only one thing can happen at a time, on a single main thread, and everything else is blocked until an operation completes.

So in the example above, after you've clicked the button the paragraph won't appear until after the OK button is pressed in the alert box. You can try it for yourself:

**Asynchronous JavaScript**

_To start something now and finish it later_

For reasons illustrated earlier (e.g. related to blocking), many Web API features now use asynchronous code to run, especially those that access or fetch some kind of resource from an external device, such as fetching a file from the network, accessing a database and returning data from it, accessing a video stream from a web cam, or broadcasting the display to a VR headset.

Why is this difficult to get to work using synchronous code? Let's look at a quick example. When you fetch an image from a server, you can't return the result immediately. That means that the following (pseudocode) wouldn't work:

```js
let response = fetch("myImage.png");
let blob = response.blob();
// display your image blob in the UI somehow
```

That's because you don't know how long the image will take to download, so when you come to run the second line it will throw an error (possibly intermittently, possibly every time) because the `response` is not yet available. Instead, you need your code to wait until the `response` is returned before it tries to do anything else to it.

There are two main types of asynchronous code style you'll come across in JavaScript code, old-style callbacks and newer promise-style code. In the below sections we'll review each of these in turn.

**Async callbacks**

Async callbacks are functions that are specified as arguments when calling a function which will start executing code in the background. When the background code finishes running, it calls the callback function to let you know the work is done, or to let you know that something of interest has happened. Using callbacks is slightly old-fashioned now, but you'll still see them in use in a number of older-but-still-commonly-used APIs.

An example of an async callback is the second parameter of the `[addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)` method (as we saw in action above):

```js
btn.addEventListener("click", () => {
  alert("You clicked me!");

  let pElem = document.createElement("p");
  pElem.textContent = "This is a newly-added paragraph.";
  document.body.appendChild(pElem);
});
```

The first parameter is the type of event to be listened for, and the second parameter is a callback function that is invoked when the event is fired.

When we pass a callback function as an argument to another function, we are only passing the function's reference as an argument, i.e, the callback function is **not** executed immediately. It is “called back” (hence the name) asynchronously somewhere inside the containing function’s body. The containing function is responsible for executing the callback function when the time comes.

```js
function loadAsset(url, type, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = type;

  xhr.onload = function() {
    callback(xhr.response);
  };

  xhr.send();
}

function displayImage(blob) {
  let objectURL = URL.createObjectURL(blob);

  let image = document.createElement("img");
  image.src = objectURL;
  document.body.appendChild(image);
}

loadAsset("coffee.jpg", "blob", displayImage);
```

Here we create a `displayImage()` function that simply represents a blob passed to it as an object URL, then creates an image to display the URL in, appending it to the document's `<body>`. However, we then create a `loadAsset()` function that takes a callback as a parameter, along with a URL to fetch and a content type. It uses `XMLHttpRequest` (often abbreviated to "XHR") to fetch the resource at the given URL, before then passing the response to the callback to do something with. In this case the callback is waiting on the XHR call to finish downloading the resource (using the `[onload](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget/onload)` event handler) before it passes it to the callback.

Callbacks are versatile — not only do they allow you to control the order in which functions are run and what data is passed between them, they also allow you to pass data to different functions depending on circumstance. So you could have different actions to run on the response downloaded, such as `processJSON()`, `displayText()`, etc.

Note that not all callbacks are async — some run synchronously. An example is when we use `[Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)` to loop through the items in an array ([see it live](https://mdn.github.io/learning-area/javascript/asynchronous/introducing/foreach.html), and [the source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/introducing/foreach.html)):

```js
const gods = ["Apollo", "Artemis", "Ares", "Zeus"];

gods.forEach(function(eachName, index) {
  console.log(index + ". " + eachName);
});
```

In this example we loop through an array of Greek gods and print the index numbers and values to the console. The expected parameter of `forEach()` is a callback function, which itself takes two parameters, a reference to the array name and index values. However, it doesn't wait for anything — it runs immediately.

**Promises**

Promises are the new style of async code that you'll see used in modern Web APIs. A good example is the `[fetch()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)` API, which is basically like a modern, more efficient version of `[XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)`. Let's look at a quick example, from our [Fetching data from the server](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data) article:

```js
fetch("products.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    products = json;
    initialize();
  })
  .catch(function(err) {
    console.log("Fetch problem: " + err.message);
  });
```

Here we see `fetch()` taking a single parameter — the URL of a resource you want to fetch from the network — and returning a [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). The promise is an object representing the completion or failure of the async operation. It represents an intermediate state, as it were. In essence, it's the browser's way of saying "I promise to get back to you with the answer as soon as I can," hence the name "promise."

This concept can take practice to get used to; it feels a little like [Schrödinger's cat](https://en.wikipedia.org/wiki/Schr%C3%B6dinger's%20cat) in action. Neither of the possible outcomes have happened yet, so the fetch operation is currently waiting on the result of the browser trying to complete the operation at some point in the future. We've then got three further code blocks chained onto the end of the `fetch()`:

- Two `then()` blocks. Both contain a callback function that will run if the previous operation is successful, and each callback receives as input the result of the previous successful operation, so you can go forward and do something else to it. Each `.then()` block returns another promise, meaning that you can chain multiple `.then()` blocks onto each other, so multiple asynchronous operations can be made to run in order, one after another.

- The `catch()` block at the end runs if any of the `.then()` blocks fail — in a similar way to synchronous `[try...catch]` blocks, an error object is made available inside the `catch()`, which can be used to report the kind of error that has occurred. Note however that synchronous `try...catch` won't work with promises, although it will work with [async/await], as you'll learn later on.
