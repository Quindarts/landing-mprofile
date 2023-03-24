import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/img/demo.jpg";
function Aside() {
    return (
        <aside className="aside">
            <div className=" header">
                <div className="header-avt">
                    <img src={img} />
                    <div className="status">
                        <div className="status-circle"></div>
                    </div>
                </div>
                <div className="header-name">
                    <Link to={"#"}>Artur Carter</Link>
                </div>
                <div className="header-job">
                    Front-end Deweloper Ui/UX Designer
                </div>
            </div>
            <div className="aside-middle">
                <div className="scrollbar">
                    <div className="art-table p-15-15">
                        <ul>
                            <li>
                                <h6>Residence:</h6>
                                <span>Canada</span>
                            </li>
                            <li>
                                <h6>City:</h6>
                                <span>Toronto</span>
                            </li>
                            <li>
                                <h6>Age:</h6>
                                <span>26</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="aside-bottom"></div>
        </aside>
    );
}

export default Aside;
