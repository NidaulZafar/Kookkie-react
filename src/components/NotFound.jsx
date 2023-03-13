import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="error-message welcome-msg">
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link to="/" style={{ margin: "20px" }}>
        Registration Page
      </Link>
      <Link to="/login">Login Page</Link>
    </div>
  );
};

export default NotFound;
