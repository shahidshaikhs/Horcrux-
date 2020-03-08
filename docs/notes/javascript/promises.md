# Promises VS Callbacks

Promises have some similarities to old-style callbacks. They are essentially a returned object to which you attach callback functions, rather than having to pass callbacks into a function.

However, promises are specifically made for handling async operations, and have many advantages over old-style callbacks:

- You can chain multiple async operations together using multiple `.then()` operations, passing the result of one into the next one as an input. This is much harder to do with callbacks, which often ends up with a messy "pyramid of doom" (also known as [callback hell](http://callbackhell.com/)).
- Promise callbacks are always called in the strict order they are placed in the event queue.
- Error handling is much better — all errors are handled by a single `.catch()` block at the end of the block, rather than being individually handled in each level of the "pyramid".
- Promises avoid inversion of control, unlike old-style callbacks, which lose full control of how the function will be executed when passing a callback to a third-party library.
