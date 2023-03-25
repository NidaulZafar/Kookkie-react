import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import UserContext from "../../contexts/UserContext.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setError] = useState("");
  const [, setLoggedIn] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make API request to check if user's email and password are valid
      const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (response.status === 404) {
        setError("User not found");
        return;
      }
      const data = await response.json();
      if (data.error) {
        if (data.error === "User not found") {
          setError(data.error);
        } else {
          setError("Incorrect email or password");
        }
      } else {
        if (data.token) {
          setLoggedIn(true);
          // Store user's information in context
          setUserInfo({
            firstName: data.firstName,
            surname: data.surname,
            userToken: data.token,
          });
          navigate("/dashboard");
        } else {
          setError("Incorrect email or password");
        }
      }
    } catch (error) {
      setError("Error logging in");
    }
  };

  const buttonClass =
    email && password ? "outer filled-form-button" : "outer empty-form-button";

  return (
    <div className="container">
      <h3>Welcome!</h3>
      <p>
        Login below or <Link to="/user/registration"> create an account </Link>
      </p>
      <form method="POST" id="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <div className="eye-holder">
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className={buttonClass}>
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
