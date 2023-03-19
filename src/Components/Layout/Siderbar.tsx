import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="siderbar">
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
    );
}

export default Sidebar;
