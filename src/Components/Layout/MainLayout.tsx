import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

function MainLayout() {
  return (
    <Fragment>
      <Sidebar />
      <Header />
      <div className="main-layout">
        MainLayout
        <Outlet />
      </div>
      <Footer />
    </Fragment>
  );
}

export default MainLayout;
