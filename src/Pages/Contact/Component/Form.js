import React from "react";

const Form = () => {
  return (
    <>
      <h1 className="heading"> Contact US</h1>
     
        <section className="container">
          <form>
            <div className="field">
              <p>Name</p>
              <input type="text" />
            </div>
            <div className="field">
              <p>Email</p>
              <input type="email" />
            </div>
            <div className="field">
              <p>Phone</p>
              <input type="tel" />
            </div>
            <div className="field">
              <p>Password</p>
              <input type="password" />
            </div>

            <div className="form-button">
                <button>Submite!</button>
            </div>
          </form>
        </section>
    </>
  );
};

export default Form;
