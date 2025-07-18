import React from "react";

//props replace name with props
const Child = ({name, properties, Parentname }) => {
  // console.log(props);
  
  return (
    //  <h1>I am a child Component {props.name}</h1>
    <div className={properties}>
    <h1>{Parentname}</h1>
      <h1>I am a child Component {name} {properties}</h1>
    </div>
  );
};

export default Child;
