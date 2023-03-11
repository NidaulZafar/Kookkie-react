import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    // Make API request to check if user's email and password are valid
    fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setLoggedIn(true);
          // Store user's information in component state or in Redux
        }
      })
      .catch((error) => {
        setError("Error logging in");
      });
  }

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
