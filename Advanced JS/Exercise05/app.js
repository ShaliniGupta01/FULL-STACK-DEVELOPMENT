// Understand hoisting, higher order functions, and closures in JavaScript.

//Hoisting in JS

// console.log(s);  //undefined

// var s = 5;

// var a;
// console.log(a); // undefined
// a = 4;

// console.log(b); //ReferenceError
// let b = 3;

//Higher order function

function greetUser(name) {
  return `Hello, ${name}!`;
}

function processUserInput(callback) {
  const name = "Shalini";
  console.log(callback(name)); // Hello , Shalini!
}

processUserInput(greetUser);

//Closure

function outerFunction(x) {
  return function innerFunction(y) {
    return x + y;
  };
}

const add5 = outerFunction(5); // x = 5
console.log(add5(10)); // 15
