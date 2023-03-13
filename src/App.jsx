import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm.jsx";
import Login from "./components/Login.jsx";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import UserContext from "./Contexts/UserContext.js";

import "./App.css";

function App() {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <>
      <UserContext.Provider value={{ userInfo, setUserInfo }}>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
