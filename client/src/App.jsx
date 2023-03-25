import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration/Registration.jsx";
import Login from "./pages/Login/Login.jsx";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import UserContext from "./contexts/UserContext.js";
import Home from "./pages/Home/Home.jsx";

import "./App.css";

function App() {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <>
      <UserContext.Provider value={{ userInfo, setUserInfo }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
