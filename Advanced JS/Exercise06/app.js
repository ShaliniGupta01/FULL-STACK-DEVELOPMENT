// Write JavaScript code that resolves a promise with 'Hello, ', then appends 'World!' and logs the message.

const promise = Promise.resolve("Hello, ");
// I can use .then() to handle the resolved value and append 'World!' before logging it

promise.then((message) => {
  message += "World!";
  console.log(message);
});
