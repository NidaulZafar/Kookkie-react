import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../contexts/UserContext.js";

const Dashboard = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const handleLogout = () => {
    setUserInfo(null);
  };

  if (!userInfo) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="container dashboard">
      <p className="heading">
        Hi {userInfo.firstName} {userInfo.surname}, welcome to your admin
        account
      </p>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
};

export default Dashboard;
