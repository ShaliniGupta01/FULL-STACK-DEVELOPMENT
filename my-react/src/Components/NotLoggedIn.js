import React from "react";

const NotLoggedIn = ({ loggedIn, setloggedIn }) => {
  return (
    <>
      <h1>Please Login first</h1>
      <button
        onClick={() => {
          setloggedIn(!loggedIn);
        }}
      >
        Login
      </button>
    </>
  );
};

export default NotLoggedIn;
