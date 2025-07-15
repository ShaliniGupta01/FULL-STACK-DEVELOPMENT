// Write JavaScript code to extract name and age from the person object, then log a message to the console.

const person = { name: "John", age: 30 };

const { name, age } = person;
const message = `${name} is ${age} years old.`;
console.log(message);
