import React from "react";
import { Link } from "react-router-dom";

function CardServices(props: any) {
    const { titleCard, desc } = props;
    return (
        <div className="card_sv">
            <div className="card_sv_title">{titleCard}</div>
            <div className="card_sv_des">{desc}</div>
            <div className="card_sv_btn">
                <Link to="">ORDER NOW</Link>
            </div>
        </div>
    );
}
export default CardServices;