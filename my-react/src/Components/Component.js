import React from "react";

//Using Maps
//  <h1>
//       I am Component{number}
//     </h1>
const Component = () => {
  let data = [
    { 
      name: "John", 
      title: "Developer"
     },
     { 
      name: "Jane", 
      title: "Designer"
     },
      { 
        name: "Doe", 
        title: "Manager"
      },
      { 
        name: "Smith", 
        title: "Analyst"
      },
      { 
        name: "Emily", 
        title: "Tester"
      }
    ];

  return (
    <>
    {
      data.map((item)=>{
        let{name, title} = item;
        return(
          <>
          <h1>{name}</h1>
          <p>{title}</p>
          </>
        )
      })
    }
    </>
  );
};

export default Component;
