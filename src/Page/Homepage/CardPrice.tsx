import React from "react";
import { Link } from "react-router-dom";

function CardPrice(props: any) {
    const { title, price, desc, cmt } = props;
    return (
        <div className="card_pr">
            <div className="card_pr_title">{title}</div>
            <div className="card_pr_price">
                $ <span>{price}</span> hour
            </div>
            <div className="card_pr_desc">
                {desc?.map((des: any, key: number) => (
                    <div key={key} className='card_pr_desc-detail'>
                        <div className="card_pr_desc-icon">{des.icon}</div>
                        <div className="card_pr_desc-name">{des.name}</div>
                    </div>
                ))}
            </div>
            <div className="card_pr_btn">
                <Link to="">ORDER NOW</Link>
            </div>
            <div className="card_pr_cmt">{cmt}</div>
        </div>
    );
}

export default CardPrice;
