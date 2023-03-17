import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [, setLoggedIn] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
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

  return (
    <div className="container">
      <p className="heading">Login</p>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">LOGIN</button>
      </form>
      <p className="no-account">
        No account yet?
        <span>
          <Link to="/"> Create one here.</Link>
        </span>
      </p>
    </div>
  );
};

export default Login;
