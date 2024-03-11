import React from "react";
import LoginComponent from "../components/Login/LoginComponent";

const LoginPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "10%",
      }}
    >
      <div style={{marginLeft:"30%"}}>
        <LoginComponent />
      </div>
    </div>
  );
};

export default LoginPage;
