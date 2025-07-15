//Promise example

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds"); //like write the Hello
  }, 2000);
});

promise.then((message) => {
  console.log(message);
});

//Async // Await

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}

fetchData();
