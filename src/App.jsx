import React from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm.jsx";
import Login from "./components/Login.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
