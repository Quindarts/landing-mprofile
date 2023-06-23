import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Aside from "./Aside";
import Sidebar from "./Siderbar";

function MainLayout() {
    return (
        <Fragment>
            <div className="main_layout">
                <Aside />
                <div className="outlet_layout">
                    <Outlet />
                </div>
                <Sidebar />
            </div>
        </Fragment>
    );
}
export default MainLayout;
