// Write a JavaScript function that increments and logs a counter each time it's called.

function counter() {
  var count = 0;
  return function inner() {
    count++;
    console.log(`Counter:${count}`);
  };
}

const incrementCounter = counter();

incrementCounter();

incrementCounter();
