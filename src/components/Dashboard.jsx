import React, { useContext } from "react";
import UserContext from "../Contexts/UserContext.js";

const Dashboard = () => {
  const { userInfo } = useContext(UserContext);

  if (!userInfo) {
    return <div>Hi{userInfo}</div>;
  }

  return (
    <div>
      Hi, {userInfo.firstName} {userInfo.surname}
    </div>
  );
};

export default Dashboard;
