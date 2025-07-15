// console.log("I am an external file");

// let numbers = 23;

// console.log(numbers);

// Variables

// let $greeting = "Good Morning";

// console.log($greeting);

// Var , Let and Const

// let number = 40;

// let name = "Roy";

// console.log(number)
// console.log(name)

// var number = 20;

// console.log(number)

// const number = 30;
// console.log(number)

// let number = 40;
// console.log(number)
// number = 24;

// console.log(number)

// uncaught typeError : Assignment to const variable
// it will place it will book a place of number and it will lock it, so we cannot change it  after we have made the call of assigning
// const number = 50;

// number = 56;

// console.log(number);

// const pie = 3.14;
// console.log(pie);

// function add() {

// }

// scopes

// let a = 90;
// {
// console.log(a);
// }

// var b = 30;
// {
// console.log(b);
// }

// const c = 40;
// {
//     console.log(c);
// }

// uncaught referenceError : a is not defined  (let,const)
// {
//     let a = 10;
// }
// console.log(a)

// this means this variable const or let has block scope which means if we declare the variable inside a block , then it will not be available outside
// {
//   let b = 7;
//   console.log(b);
// }

//becz var is not block scope, it is inside the block and outside the block
// {
//   var a = 93;
// }
// console.log(a);

// outside a is not available but inside is available
// function greet(){
//     var a = "Hello";
//     console.log(a)
// }

// greet();

// not available
// function greet(){
//     let a = "Hello";

// }
//   console.log(a)

// primitive datatypes

// let number = 28465873;
// console.log(number)

// let decimal = 123.455;
// console.log(decimal)

// let name ="Careerpedia";
// console.log(name)

// let isAdult = true;
// console.log(isAdult)

//undefined
// let number;
// number = 98
// console.log(number)

// let number = null;
// console.log(number)

// Arithmetic operator

// console.log(9+3)
// console.log(7-2)

// let add = 30+3;
// console.log(add)

// let mul =8*2;
// console.log(mul)

// let rem = 25%3;
// console.log(rem)

// Assignment operator

// let number = 67;
// let newnumber;
// newnumber = number;
// console.log(newnumber)

// let sum = 5;
// sum = sum +3;
// console.log(sum)

//conditional statement

// let age = 24;
// if(age>18){
//  console.log("You are eligible to vote")
// }

// let marks = 24;
// if(marks>18){
//  console.log("You are eligible to winner")
// }
// else{
//     console.log("you are not winner")
// }

// let marks = 24;
// if(marks<18){
//  console.log("You are eligible to winner")
// }
// else if(marks<20){
//     console.log("you are not winner")
// }
// else{
//     console.log("you are best")
// }

// let salary = 500000;
// switch (salary) {
//   case 100000:
//     console.log("first person");
//     break;
//   case 200000:
//     console.log("second person");
//     break;
//   case 500000:
//     console.log("third person");
//   default:
//     console.log("fourth person");
// }

// intermediate js
//loops

// for(let i=1; i<=100; i++){
//     console.log('hello')
// }

// for(let i=1; i<=100; i++){
//     console.log('i')
// }

// let i =0;
// while(i<=4){
//     console.log("Heyy buddy");
//     i++;
// }

// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// let i = 0;
// do{
//     console.log("heyy buddy");
//     i++;
// }
// while(i<=5);

// let i = 1;
// do{
//     console.log("i should not be printed");
//     i++;
// }while(i<1);

// let i =1;
// while(i<1){
//     console.log("not printed");
//     i++;
// }

// Arrays

//push=> add new ele at the end of an array
// let fruits = ["banana", "pear", "grapes"]
// fruits.push("orange");
// console.log(fruits)

// Array loops(for loop)
// let myArray = ["one", "two", "three", "four"];

// for(let i =0; i<myArray.length; i++){
//     console.log(myArray[i])
// }

//for...of loop

// let isArray = ["one", "two", "three", "four", "five"];

// for(let item of isArray){
//     console.log(item)
// }

// objects

// let student ={
//     name: "Ram",
//     id: 23,
//     class:10,
//     marks:[98,23,45]
// }
// console.log(student)

//loops in object

// let myObj = {
//     id: 1,
//     name: "John",
//     age: 25
// }
// for(let item in myObj){
//     console.log(myObj[item])
// }

// functions

// function statement() {
//   console.log("statement1");
//   console.log("statement2");
//   console.log("statement3");
// }

// statement();

// statement();

// statement();

//function declaration

// function add (a, b){
//     console.log(a+b);
// }
//calling a function
// add(2,3);
// add(7,8);

//function expression

//  const add = function add (a, b){
//     console.log(a+b);
// }
//calling a function
// add(2,9);
// add(96, 97);

//Arrow function

// let add = (a, b) => a+b;
// console.log(add(8,9));

// let add = (a, b) => console.log(a+b)
// add(24,86);

// declare the function not call

// function greet(){
//     console.log("Hello");
// }

// used function exp and declaration
// function add(a,b){
//     return a+b;
// }
// console.log(add(23, 65))

// arrow function
// let greet = (name) => console.log(`${name} Hello!`);
// greet("karan");


