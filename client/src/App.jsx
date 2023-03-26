import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration/Registration.jsx";
import Login from "./pages/Login/Login.jsx";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import UserContext from "./contexts/UserContext.js";
import Home from "./pages/Home/Home.jsx";
import Nav from "./components/NavBar/Nav.jsx";

import "./App.css";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";

function App() {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <>
      <UserContext.Provider value={{ userInfo, setUserInfo }}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
