import React, { useState } from 'react';


const Faq = () => {
  const data = [
    {
      question: "Question 1?",
      answers:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC..."
    },
    {
      question: "Question 2?",
      answers:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC..."
    },
    {
      question: "Question 3?",
      answers:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC..."
    },
    {
      question: "Question 4?",
      answers:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC..."
    },
    {
      question: "Question 5?",
      answers:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC..."
    }
  ];

  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(prev => (prev === index ? null : index));
  };

  return (
    <>
      <h1 className="heading">FAQs</h1>
      <section className="faq">
        <div className="item">
          {data.map((item, i) => (
            <div className="wrapper" key={i}>
              <div className="question" onClick={() => handleSelect(i)}>
                <h3>{item.question}</h3>
                <img
                  src={require ("../../../assets/up-arrow.png")}
                  alt="toggle arrow"
                  className={selected === i ? "arrow rotate" : "arrow"}
                />
              </div>
              <div className={selected === i ? "answers show" : "answers"}>
                <p>{item.answers}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faq;




