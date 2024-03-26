### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

  Using async and await can help run code without the delay of running other functions.

- What is a Promise?

  A promise is a value that will be delivery in the future.

- What are the differences between an async function and a regular function?

  An async function always returns a promise.

- What is the difference between Node.js and Express.js?

  Node allows the use of js on the server side. While Express is a framework in Node that is used for web applications.

- What is the error-first callback pattern?

  A function that first attempts to catch an error, and if there isn't an errors, it will run and return the desired function.

- What is middleware?

  Middleware is the time between a server receiving a request and when it sends a response back.

- What does the `next` function do?

  Next function calls on the next middleware to be ran. If next is not called, it will only run and stop at the initial function.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

  Awaiting 3 different request can take a longer time to complete. Using Promise.all() can run each simultaneously.

```js
async function getUsers() {
  const elie = await $.getJSON("https://api.github.com/users/elie");
  const joel = await $.getJSON("https://api.github.com/users/joelburton");
  const matt = await $.getJSON("https://api.github.com/users/mmmaaatttttt");

  return [elie, matt, joel];
}
```
