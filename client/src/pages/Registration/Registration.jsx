import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./registration.css";

const RegistrationForm = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState("false");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };
  const navigate = useNavigate();
  console.log(isLoading);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { firstName, email, password } = userData;

    // Validate user data
    if (!firstName || !email || !password) {
      setErrorMessage("Please fill in all required fields");
      return;
    }

    if (password.length < 3) {
      setErrorMessage("Password must be at least 3 characters long");
      return;
    }

    setIsLoading(true);

    // Send user data to backend
    const response = await fetch("http://localhost:5000/api/user/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, email, password }),
    });
    await response.json();
    navigate("/registrationSuccess"); //TODO
    setIsLoading(false);
  };

  const buttonClass =
    userData.firstName && userData.email && userData.password
      ? "outer filled-form-button"
      : "outer empty-form-button";

  return (
    <div className="registration-container">
      <p className="heading">Create your account</p>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form method="POST" id="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={userData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={userData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className={buttonClass}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
