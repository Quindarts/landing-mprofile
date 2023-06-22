import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/img/avt.jpg";
import { Icon } from "@iconify/react";
const listSkillBar = [
    { name: "html", level: "90%" },
    { name: "css", level: "95%" },
    { name: "js", level: "75%" },
    { name: "php", level: "65%" },
];
function Aside() {
    return (
        <aside className="aside">
            <div className="aside_fixed">
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
                        Front-end Deweloper{" "}
                        <div className="">Ui/UX Designer</div>
                    </div>
                </div>
                <div className="aside-middle">
                    <div className="scrollbar">
                        <div className="art-table p-15-15">
                            <ul>
                                <li>
                                    <h5>Residence:</h5>
                                    <span>Vietnam</span>
                                </li>
                                <li>
                                    <h5>City:</h5>
                                    <span>Ho Chi Minh</span>
                                </li>
                                <li>
                                    <h5>Age:</h5>
                                    <span>26</span>
                                </li>
                            </ul>
                        </div>
                        <div className="art-skillbar">
                            <ul className="bar">
                                {listSkillBar.map(
                                    (skillBar: any, index: number) => (
                                        <li key={index} className="bar-item">
                                            <h5>{skillBar.name}</h5>
                                            <span>{skillBar.level}</span>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </div>
                        <div className="art-skill">
                            <ul>
                                <li>
                                    <Icon icon="mdi:tick" />
                                    Bootstrap, Materialize
                                </li>
                                <li>
                                    <Icon icon="mdi:tick" />
                                    Stylus, Sass, Less
                                </li>
                                <li>
                                    <Icon icon="mdi:tick" />
                                    Gulp, Webpack, Grunt
                                </li>
                                <li>
                                    <Icon icon="mdi:tick" />
                                    GIT knowledge
                                </li>
                            </ul>
                        </div>
                        <div className="art-cv">
                            <a href="#">DOWNLOAD CV</a>
                            <Icon icon="ic:round-download" />
                        </div>
                    </div>
                </div>
                <div className="aside-bottom"></div>
            </div>
        </aside>
    );
}

export default Aside;
