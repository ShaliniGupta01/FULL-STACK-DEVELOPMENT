// console.log(value);

// let value = "My Data"; //cannot access value before initialization
// const value = "My Data";

// var value = "My Data"; //undefined

//calling
// add(10, 29); // 39

//declaration with before
// function add(a, b){
//     console.log(a+b);
// }

//expression

// let add = function (a, b) {
//   console.log(a + b);  //error
// };

//arrow function

// let add = (a, b) => {
//   console.log(a + b); //cannot access with before
// };

// Higher order function

// function greet(morning) {
//   return morning();
// }

// greet(() =>{
//     console.log("Good Morning");

// });

//return another function

// function greet() {
//   return function () {
//     console.log("Namaste");
//   };
// }

// let function1 = greet();

// function1();

//SetTimeout

// let greet = () => {
//     console.log("Hello world");

// }

// setTimeout(greet, 2000); //After two second then print

// setTimeout(() =>{
//     console.log("I am a function"); //after 2 sec

// }, 2000);

// console.log("I got printed first"); // first print

// setInterval

// setInterval(() =>{
//     console.log("I am a function"); //after every  2 sec  print function

// }, 2000);

// Hoisting

//Map
// let numbers = [23, 43, 32, 23, 45];

// let addNumber5 = numbers.map((number) => {
//   return number + 10;
// });

// console.log(numbers);
// console.log(addNumber5);

//Filter

// let greaterThan30 = numbers.filter((number) => {
//   return number > 30;
// });

// console.log(numbers);

// console.log(greaterThan30);

//Reduce

// let sum = numbers.reduce((total, number) => {
//   return (total += number);
// });

// console.log(sum);

//Sort
//(b-a) descending order

// let sortArray= numbers.sort((a , b) => {
//   return (a - b); //ascending order
// });

// console.log(sortArray);

// let marks = [45, 34, 90, 56, 39, 50];

// let graceMarks = marks
//   .filter((mark) => {
//     return mark < 40;
//   })
//   .map((mark) => {
//     return mark + 10;
//   });

// console.log(graceMarks);

// let marks = [45, 34, 90, 56, 39, 50];

// let graceMarks = marks
//   .map((mark) => {
//     return mark + 10;
//   })
//   .filter((mark) => {
//     return mark < 40;
//   })

// console.log(graceMarks);

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.map((results) => {
//   return results * 2;
// });

// console.log(result);

// Destructuring

// let names = ["steve", "rob", "kevin", "peter"];

// let element1 = names[0];
// let element2 = names[1];

// let [element1, , ,  element2] = names;

// console.log(element1);
// console.log(element2);

// let user = {
//   name:"xyz",
//   age:34,
//   gender: "male"
// }

// let { name, age, gender} = user;

// console.log(name, age, gender);

//Spread

// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers);

// let newArray = [0, 6, 7, 8, 9,...numbers];

// console.log(newArray);

//Rest

// let add = (a, b) =>{
//     console.log(a+b);

// }

// add(3, 4);

// add(32,45);

// rest operator avoid the three number
// add(1, 445, 32);

// let add = (...input) => {
//   let sum = 0;
//   for (let i of input) {
//     sum += i;
//   }
//   console.log(sum);
// };

//adding the all number
// add(1, 2);

// add(1, 2,3);

//Closure

// {
//   let name = "XYZ";
// }

// console.log(name);

// let closure;
// {
//   let value = "XYZ";

//   closure = () =>{
//     console.log(value);

//   }
// }

// console.log(value);

// closure();

// let closure;
// {
//   let myObj = {
//     name: "XYZ",
//     age: 34,
//   };

//   closure = () => {
//     return myObj;
//   };
// }

// console.log(closure); //not response

// let value = closure();

// console.log(value);

// function greeting(){
//   let message = "Hi";

//   function sayHi(){
//     console.log(message);

//   }
//   return sayHi;
// }

// sayHi();

// let function2 = greeting();
// function2();

//Asynchronous JS

//callback

// let stepOne = (callback) => {
//   console.log("I am in Step 1");
//   callback();
// };

// let stepTwo = (callback) => {
//   console.log("I am in step 2");
//   callback();
// };

// let stepThree = (callback) => {
//   console.log("I am in step 3");
//   callback();
// };

// let stepFour = (callback) => {
//   console.log("I am in step 4");
// callback()
// };

// stepOne(stepTwo);  // I am in Step 1
// I am in Step 2

// stepOne(() => {
//   stepTwo(() => {
//     stepThree(() => {
//       stepFour();
//     });
//   });
// });

//Promises
// if(false)=> Error
// let stepOne = () => {
//   return new Promise((resolve, reject) => {
//     if (true) {
//       console.log("I am step 1");
//       resolve();
//     } else {
//       reject();
//     }
//   });
// };

// let stepTwo = () => {
//   console.log("I am step 2");
// }

// let stepThree = () => {
//   console.log("I am step 3");
// };

// stepOne()
//   .then(() => {
// console.log("Success");
//     stepTwo();
//   })
//   .then(() =>{
//     stepThree();
//   })
//   .catch(() => {
//     console.log("Error");
//   });

//Fetch API will help us in order to get the data from any server(from external api)

// Async and Await

// let stepOne = () => {
//   return new Promise((resolve, reject) => {
//     if (true) {
//       console.log("I am step 1");
//       resolve();
//     } else {
//       reject("error in step 1");
//     }
//   });
// };

// let stepTwo = () => {
//   return new Promise((resolve, reject) => {
//     if (false) {
//       console.log("I am step 2");
//       resolve();
//     } else {
//       reject("error in step 2");
//     }
//   });
// };

// async function working() {
//   try {
//     await stepOne();
//     await stepTwo();
//     // console.log("All steps completed successfully");
//   } catch (error) {
//     console.log( error);
//   }
// }

// working();

// Fetch API

// Fetch API is used to make network requests to servers and retrieve data.
// It returns a promise that resolves to the response of the request.
// It is commonly used to fetch data from APIs or send data to servers.
// Example of using Fetch API to get data from a public API

// let url = "https://jsonplaceholder.typicode.com/posts";
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("There was a problem with the fetch operation:", error);
//   });

// let url = "https://jsonplaceholder.typicode.com/users";

// fetch(url, {
//   method: "Post",
//   body: JSON.stringify({
//     name: "xyz",
//     email: "xyz@gmail.com",
//   }),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     // Correct way: data is an object, so just access the email property
//     console.log(data);
//   });

// Event Bubbling and Capturing

// const html = document.querySelector("html");
// const body = document.querySelector("body");
// const div = document.querySelector("div");
// const span = document.querySelector("span");
// const button = document.querySelector("button");

// // Event Bubbling: The event starts from the target element and bubbles up to the root element.
// //Used the propagation method to stop the event from bubbling up to parent elements.

// html.addEventListener("click", (event) => {
//   console.log("Html clicked");
//   event.stopPropagation(); // Prevents the event from bubbling up to parent elements
// })
// body.addEventListener("click", (event) => {
//   console.log("Body clicked");
//   event.stopPropagation(); // Prevents the event from bubbling up to parent elements
// })
// div.addEventListener("click", (event) => {
//   console.log("Div clicked");
//   event.stopPropagation(); // Prevents the event from bubbling up to parent elements
// })
// span.addEventListener("click", (event) => {
//   console.log("Span clicked");
//   event.stopPropagation(); // Prevents the event from bubbling up to parent elements
// })
// button.addEventListener("click", (event) => {
//   console.log("Button clicked");
//   event.stopPropagation(); // Prevents the event from bubbling up to parent elements
// });

// Event Delegation: Attaching a single event listener to a parent element to handle events for multiple child elements.

// Event Delegation: Attaching a single event listener to a parent element to handle events for multiple child elements.

// const button1 = document.getElementById("button1");
// const button2 = document.getElementById("button2");
// const button3 = document.getElementById("button3");

// button1.addEventListener("click", () => {
//   console.log("Button 1 clicked");
// });

// button2.addEventListener("click", () => {
//   console.log("Button 2 clicked");
// });

// button3.addEventListener("click", () => {
//   console.log("Button 3 clicked");
// });

// const div = document.querySelector("div");

// div.addEventListener("click", (event) => {
//   if (event.target.tagName === "BUTTON") {
// console.log(`${event.target.id} clicked`);
// console.log(event.target.innerText);
// console.log("Button 1 clicked");

// }

// click the button then show the paragraph

//    if (event.target.tagName === "P") {
//     console.log(event.target.innerText);
//   }
// })

//This keyword

// 1.
// console.log(this); //In the global scope, 'this' refers to the global object (window in browsers)

// 2.
// const test = () => {
//   console.log(this); //In an arrow function, 'this' refers to the lexical scope, which is the global object in this case.
// }

// test(); //In an arrow function, 'this' refers to the lexical scope, which is the global object in this case.

// 3.

// function test() {
//   console.log(this); //In a regular function, 'this' refers to the object that called the function. In this case, it will be the global object (window in browsers).
// }
// test(); //In a regular function, 'this' refers to the object that called the function. In this case, it will be the global object (window in browsers).

// 4.Implicit binding

// const book = {
//   name: "My Book",
//   author: "Myself",

//   description: function () {
//     // Corrected template literal syntax
//     console.log(`The name of the book is ${this.name} and it is written by ${this.author}`);
//   },
// };

//Arrow functions do not have their own 'this' context, so they inherit 'this' from the parent scope.
// const book = {
//   name: "My Book",
//   author: "Myself",

//   description:()=>{
//     // Corrected template literal syntax
//     console.log(`The name of the book is ${this.name} and it is written by ${this.author}`);
//   },
// };

// book.description();

//Explicit binding
//Bind
// The 'bind' method creates a new function that, when called, has its 'this' keyword set to the provided value.
// const john = {
//   name: "John",
//   age: 30,
// };

// const karen = {
//   name: "Karen",
//   age: 25,
// };

// function  description  () {
//   console.log(`My name is ${this.name} and I am ${this.age} years old.`);
// };

// const descJohn = description.bind(john); // Explicitly binding 'this' to 'john'
// const descKaren = description.bind(karen); // Explicitly binding 'this' to 'karen'
// descJohn(); // Output: My name is John and I am 30 years old.
// descKaren(); // Output: My name is Karen and I am 25 years old.


//Call
// The 'call' method calls a function with a given 'this' value and arguments provided individually.
// const john = {
//   name: "John",
//   age: 30,
// };
// const karen = {
//   name: "Karen",
//   age: 25,
// };
// function description(gender) {
//   console.log(`My name is ${this.name} and I am ${this.age} years old.My gender is ${gender}.`);
// }
// description.call(john, "Male"); // Output: My name is John and I am 30 years old.
// description.call(karen, "Female"); // Output: My name is Karen and I am 25 years old


//Apply
// The 'apply' method calls a function with a given 'this' value and arguments provided
// as an array.
// const john = {
//   name: "John",
//   age: 30,
// };
// const karen = {
//   name: "Karen",
//   age: 25,
// };
// function description() {
//   console.log(`My name is ${this.name} and I am ${this.age} years old.`);
// }
// description.apply(john); // Output: My name is John and I am 30 years old.
// description.apply(karen); // Output: My name is Karen and I am 25 years old

