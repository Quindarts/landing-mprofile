import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Aside from "./Aside";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Siderbar";

function MainLayout() {
    return (
        <Fragment>
            <Sidebar />
            <Header />
            <div className="main-layout">
                <Aside />
                <Outlet />
            </div>
            <Footer />
        </Fragment>
    );
}

export default MainLayout;
