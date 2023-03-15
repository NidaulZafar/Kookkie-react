import React, { useContext } from "react";
import UserContext from "../contexts/UserContext.js";

const Dashboard = () => {
  const { userInfo } = useContext(UserContext);

  if (!userInfo) {
    return (
      <div className="error-message welcome-msg">
        No Dashboard without logging in
      </div>
    );
  }

  return (
    <div className="container">
      <p className="heading">
        Hi, {userInfo.firstName} {userInfo.surname}, welcome to your admin
        account
      </p>
    </div>
  );
};

export default Dashboard;
