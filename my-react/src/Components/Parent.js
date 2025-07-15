import React from "react";
import Child from "./Child";

const Parent = () => {
  return (
    //   this is props passing example
    <>
      <Child name="1" />
      <Child name="2" />
      <Child name="3" />
      <Child name="4" />
      <Child name="5" />
    </>
  );
};

export default Parent;
