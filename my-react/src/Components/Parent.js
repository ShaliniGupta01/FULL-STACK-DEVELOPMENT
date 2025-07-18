import React from "react";
import Child from "./Child";

const Parent = ({name: Parentname }) => {
  return (
    //   this is props passing example
    <>
      <Child name="1" properties= "child1" Parentname={Parentname}/>
      <Child name="2" properties= "child2"/>
      <Child name="3" properties= "child3" />
      <Child name="4" properties= "child4" />
      <Child name="5" properties= "child5"/>
    </>
  );
};

export default Parent;
