import { useEffect, useState } from "react";
import "./App.css";
// import LoggedIn from "./Components/LoggedIn";
// import NotLoggedIn from "./Components/NotLoggedIn";
// import Conditional1 from "./Components/Conditional1";
// import Conditional2 from "./Components/Conditional2";
// import Parent from "./Components/Parent";
// import Heading from "./Components/Heading";
// import Component1 from './Components/Component1';
// import Component2 from "./Components/Component2";
// import InsideComp from "./Components/InsideComp";
// import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/Footer/Footer";
// import Header from "./Components/Header/Header";
// import { useState } from "react";
// import Component from "./Components/Component";

function App() {

  //Hooks
 const [count, setCount ] = useState(0)

 const handleClick = ()=>{
  setCount(count + 1);
  // alert("You have incresed the count!")
 }
//[] is used alert is run only rendering
//  useEffect(()=>{
// alert("You have incresed the count!");
//  }, []);
 useEffect(()=>{
console.log("You have incresed the count!");

 }, [count]);
  // Conditional rendering example
  //  let isAdult = false; // Change this to false to see the denied message

  // let isVisible = false;

  // let isLoggedIn = true; // Change this to false to see the NotLoggedIn component

  // const [loggedIn, setIsLoggedIn] = useState(false); // Change to true to see the LoggedIn component

  // let loggedIn = true; // Change to false to see the NotLoggedIn component

  //Maps function
  // let numbers = [1, 2, 3, 4, 5];
  //  let count = 0;
  //   let handleCount = () => {
  //       count = count + 1;
  //       console.log(count);
  //     };

  // const [count, setCount] = useState(0);
  // const [color, setColor] = useState("");

  //let handleCount = () => {
  //   count = count + 1;

  //Event handler to update state
  // let handleChange = () => {
  //   setCount(count + 1);
  //   setColor("changed");
  // console.log(count);
  // };

  // const myStyle = {
  //   color: "red",
  //   backgroundColor: "black",
  //   textTransform: "uppercase",
  // };
  return (
    // <h1 style={{ color: "red", backgroundColor: "black" }}>Hello World!</h1>
    // <h1 style={myStyle}>Style By JS Object</h1>
    // <Heading />
    //  <Navbar/>
    //   <Footer/>
    //   <Header/>
    // <button onClick={()=>{setCount(count + 1)}}>Click me</button>
    // <h1 className={color}>Counter</h1>
    //   <p>{count}</p>
    //   <button onClick={handleChange}>Click me</button>
    //Maps
    //  {numbers.map((item) => (
    //     <Component number={item} />
    //   ))}
    //  <Component />
    // <Parent name= "Parent" />
    //  {isAdult ? (
    //     <>
    //       <h1>Welcome to the adult section</h1>
    //     </>
    //   ) : (
    //     <>
    //       {" "}
    //       <h1>Access denied. You must be an adult to view this content.</h1>
    //     </>
    //   )}
    //   {
    // isVisible ? <Conditional1 /> : <Conditional2 />
    //  }
      // <>{loggedIn ? <LoggedIn /> : <NotLoggedIn loggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn} />}<
      //  {
      //     loggedIn && <LoggedIn />
      //   }

      //hooks
        // <button onClick={() => setCount(count+1)}>Click Me!</button>
       <>
       <h1>{count}</h1>

       <button onClick={handleClick}>Click Me!</button>
       </>
  );
}

export default App;
