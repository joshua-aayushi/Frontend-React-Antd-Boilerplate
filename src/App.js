import React from "react";
import { token } from "./constants/ServerConstants";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

const App = () => {
  if (!token)
    return (
      <div>
        <LoginPage />
      </div>
    );

  return (
    <div>
      <HomePage />
    </div>
  );
};

export default App;
