import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

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
          // Store user's information in component state or in Redux
        } else {
          setError("Incorrect email or password");
        }
      }
    } catch (error) {
      setError("Error logging in");
    }
  };

  if (loggedIn) {
    return (
      <div>
        <p>You are logged in!</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <label>
          Email address
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <div>No account yet? Create one here.</div>
    </div>
  );
}

export default Login;
