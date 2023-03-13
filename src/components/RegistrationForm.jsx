import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const RegistrationForm = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    surname: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });

  const [captcha, setCaptcha] = useState(null);
  const handleCaptchaChange = (value) => {
    setCaptcha(value);
  };

  const [errorMessage, setErrorMessage] = useState("");
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { firstName, surname, email, confirmEmail, password } = userData;

    // Validate user data
    if (!firstName || !surname || !email || !password) {
      setErrorMessage("Please fill in all required fields");
      return;
    }

    if (email !== confirmEmail) {
      setErrorMessage("Email addresses do not match");
      return;
    }

    if (password.length < 3) {
      setErrorMessage("Password must be at least 3 characters long");
      return;
    }

    // Send user data to backend
    fetch("http://localhost:5000/api/user/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, surname, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message); // User registration successful
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };

  const { firstName, surname, email, confirmEmail, password, confirmPassword } =
    userData;

  return (
    <div className="container">
      <p className="heading">Create your account</p>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First name"
            value={firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="Surname"
            value={surname}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            placeholder="Confirm Email address"
            value={confirmEmail}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Repeat your password"
            value={confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <ReCAPTCHA
          sitekey="6Lf-PvYkAAAAAA2VqxiuSIvrA-romzdDmUwEojpG"
          onChange={handleCaptchaChange}
        />
        <button type="submit">CREATE ACCOUNT</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
