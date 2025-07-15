//Array methods example

//used map()

const numbers = [23, 34, 56, 66, 55, 12];

const doubleNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubleNumbers);

//used filter()

let marks = [45, 34, 90, 56, 39, 50];

let graceMarks = marks.filter((mark) => {
  return mark < 40;
});

console.log(graceMarks);

//used reduce()

let add = numbers.reduce((total, number) => {
  return (total += number);
});

console.log(add);

//Destructuring

let names = ["john", "num", "babel", "port"];

let [element1, , , element2] = names;

console.log(element1);
console.log(element2);


//Spread operator merage two array

let number = [9, 7, 6, 7, 8];

console.log(number);

let newArray = [...number, 3,2,5,6,2,4,6,1];

console.log(newArray);