import React from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm.jsx";
// import LoginForm from "./LoginForm";
// import PrivateRoute from "./PrivateRoute";
// import Profile from "./Profile";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        {/* <Route path="/login" component={LoginForm} />
        <PrivateRoute path="/profile" component={Profile} /> */}
      </Routes>
    </>
  );
}

export default App;
