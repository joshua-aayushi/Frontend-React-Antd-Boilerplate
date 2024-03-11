import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomeComponent from "../components/Home/HomeComponent";

const HomePage = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          {/* <Route index element={<Home />} /> */}
          <Route path="*" element={<HomeComponent />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default HomePage;
