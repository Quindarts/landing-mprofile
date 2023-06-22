import { Icon } from "@iconify/react";
function CardRecomment(props: any) {
    const { avt, name, hint, desc } = props;
    return (
        <div>
            <div className="card_cmtr">
                <div className="card_cmtr_avt">
                    <img src={avt} alt="" width="100%" height="100%" />
                </div>
                <div className="card_cmtr_box">
                    <div className="cmtr_box_name">{name}</div>
                    <div className=" cmtr_box_hint">
                        <i>{hint}</i>
                    </div>
                    <div className="cmtr_box_desc">{desc}</div>
                    <div className="cmtr_box_ratings">
                        {
                            <>
                                <div className="">
                                    <Icon icon="iconamoon:star-fill" />
                                </div>
                                <div className="">
                                    <Icon icon="iconamoon:star-fill" />
                                </div>
                                <div className="">
                                    <Icon icon="iconamoon:star-fill" />
                                </div>
                                <div className="">
                                    <Icon icon="iconamoon:star-fill" />
                                </div>
                                <div className="">
                                    <Icon icon="iconamoon:star-fill" />
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardRecomment;
