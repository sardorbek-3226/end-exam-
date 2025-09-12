import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer";
const MainLayout = () => {
  return (
    <div className="container">
      <Navbar/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
