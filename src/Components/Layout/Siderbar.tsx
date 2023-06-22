import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    const [openSidebar, setOpenSidedar] = useState(true);
    const handlOpenSidebar = () => {
        setOpenSidedar(!openSidebar);
    };
    return (
        <div className="siderbar">
            <div className="siderbar_fixed">
                <div className={`btn_ctrl_sidebar `}>
                    <button onClick={handlOpenSidebar}>
                        <Icon icon="material-symbols:list" />
                    </button>
                </div>
                <div
                    className={` ${
                        openSidebar ? "ctrl_open_sidebar" : "ctrl_close_sidebar"
                    }`}
                >
                    <ul>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/">PORTFOLIO</Link>
                        </li>
                        <li>
                            <Link to="/">HISTORY</Link>
                        </li>
                        <li>
                            <Link to="/">BLOG</Link>
                        </li>
                        <li>
                            <Link to="/">CONTACT</Link>
                        </li>
                        <li>
                            <Link to="/">ONE PAGE VERSION</Link>
                        </li>
                        <li>
                            <Link to="/">LIGHT VERSION</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
