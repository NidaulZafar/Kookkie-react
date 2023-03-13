import React, { useContext } from "react";
import UserContext from "../Contexts/UserContext.js";

const Dashboard = () => {
  const { userInfo } = useContext(UserContext);

  if (!userInfo) {
    return <div>Hi</div>;
  }

  return (
    <div>
      Hi, {userInfo.firstName} {userInfo.surname}, welcome to your admin account
    </div>
  );
};

export default Dashboard;
