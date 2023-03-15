import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../contexts/UserContext.js";

const Dashboard = () => {
  const { userInfo } = useContext(UserContext);

  if (!userInfo) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="container">
      <p className="heading">
        Hi {userInfo.firstName} {userInfo.surname}, welcome to your admin
        account
      </p>
    </div>
  );
};

export default Dashboard;
