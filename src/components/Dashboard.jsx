import React, { useContext } from "react";
import UserContext from "../Contexts/UserContext.js";

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
    <div className="welcome-msg">
      Hi, {userInfo.firstName} {userInfo.surname}, welcome to your admin account
    </div>
  );
};

export default Dashboard;
