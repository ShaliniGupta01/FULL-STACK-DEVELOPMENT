// DOM Manipulation

// const { doc } = require("prettier");

// console.log(document)

// let heading = document.getElementsByTagName('h1');

// let paragraph = document.getElementsByClassName('paragraph')

// let link = document.getElementById('link')

// console.log(heading)

// console.log(paragraph)

// console.log(link)

// inner html h1
// let heading = document.querySelector("h1");

// console.log(heading);

//select multiple element
// let heading = document.querySelectorAll("h1");

// let paragraph = document.querySelector('.paragraph')

// console.log(paragraph);

// let link = document.querySelector('#link')

// console.log(link)

//dom traversal
// let parent = document.querySelector('.container');

// console.log(parent.children); //give html collection

// console.log(parent)

//access of parent and child element
// let heading = document.querySelector('h1');

// console.log(heading.parentNode);

//sibling

// let paragraph = document.querySelector('.paragraph');

// console.log(paragraph.nextElementSibling);

// console.log(paragraph.previousElementSibling);

//change the heading
// let heading = document.querySelector('h1');

// heading.innerHTML = "This is changed with JS";

// select the paragraph

// let paragraph = document.querySelector('.paragraph');

// paragraph.innerHTML = "This is my paragraph";


//Add new heading
// let heading = document.createElement("h2");

// heading.innerHTML = "This is my heading 2";


// let parent = document.getElementsByTagName("div");



// parent[0].appendChild(heading);

//remove

// let paragraph = document.querySelector('.paragraph');

// paragraph.classList.remove('pargraph');

// paragraph.classList.add('newparagraph-class');


// Events in JS
// let heading = document.querySelector('h1')
// let button = document.querySelector('.button');

//change the style 
// button.addEventListener('click', () => {
//     button.innerHTML = "I am changed!";
//     button.classList.remove("button");
//     heading.innerHTML = "I am also changed!";
//     heading.style.cssText = "color:red"
// })

//hover the button
// button.addEventListener('mouseover', () => {
//     button.innerHTML = "I am changed!";
//     heading.innerHTML = "I am also changed!";
// })


// button.addEventListener("click", () =>{
    // heading.classList.remove('heading');
    //  heading.classList.toggle('heading');
// })

// Style

// let heading = document.querySelector('h1');

// heading.style.visibility= "hidden";
// heading.style.display= "none";

// heading.style.color = "blue";
// heading.style.textTransform = "uppercase";

// heading.style.cssText = "color:green; background-color: red; text-Transform: uppercase";

// Form Validation

