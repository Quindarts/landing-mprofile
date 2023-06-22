import { Icon } from "@iconify/react";
import CardPrice from "./CardPrice";
import CardRecomment from "./CardRecomment";
import CardServices from "./CardServices";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bg from "../../assets/img/bg.jpg";
import {
    CardDataPrice,
    CardDataRecomment,
    CardDataServices,
} from "../../types/constants";

function HomePage() {
    return (
        <div id="main_home">
            <div className="slide">
                <img className="bg_slide" width="100%" src={bg} alt="" />
                <div className="slide-content">
                    <div className="text">
                        <h1>
                            Discover my Amazing <br /> Art Space!
                        </h1>
                        <div className="slide-content_desc">
                            &lt; <span>code</span>/&gt;
                            <p className="typing-animation">
                                I build automation tools.
                            </p>
                            &lt; <span>code</span>/&gt;
                        </div>
                        <button>EXPLORE NOW </button>
                    </div>
                    <div className="big_avt">
                        <img
                            src="https://arter.bslthemes.com/wp-content/uploads/2020/09/face-2.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="time_skill">
                <div
                    className=""
                    style={{ display: "flex", gap: "30px", flex: "1" }}
                >
                    <div
                        className=""
                        style={{ width: "100%", display: "flex", gap: "2rem" }}
                    >
                        <div
                            style={{
                                fontWeight: "bold",
                                fontSize: "20px",
                                color: "#fcbf08",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            10+
                        </div>
                        <p>Years Experience</p>
                    </div>
                    <div
                        className=""
                        style={{ width: "100%", display: "flex", gap: "2rem" }}
                    >
                        <div
                            style={{
                                fontWeight: "bold",
                                fontSize: "20px",
                                color: "#fcbf08",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            143
                        </div>
                        <p>Completed Projects</p>
                    </div>
                    <div
                        className=""
                        style={{ width: "100%", display: "flex", gap: "2rem" }}
                    >
                        <div
                            style={{
                                fontWeight: "bold",
                                fontSize: "20px",
                                color: "#fcbf08",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            114
                        </div>
                        <p>Happy Customers</p>
                    </div>
                    <div
                        className=""
                        style={{ width: "100%", display: "flex", gap: "2rem" }}
                    >
                        <div
                            style={{
                                fontWeight: "bold",
                                fontSize: "20px",
                                color: "#fcbf08",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            20 +
                        </div>
                        <p>Honors and Awards</p>
                    </div>
                </div>
            </div>
            <div className="home_content">
                <h1>My Services</h1>
                <div className="card_data_services">
                    {CardDataServices.map((item, key) => (
                        <CardServices
                            key={key}
                            titleCard={item.title}
                            desc={item.desc}
                        />
                    ))}
                </div>
                <h1>Price Plans</h1>
                <div className="card_data_price">
                    {CardDataPrice.map((item, key) => (
                        <CardPrice
                            key={key}
                            title={item.title}
                            price={item.price}
                            desc={item.desc}
                            cmt={item.cmt}
                        />
                    ))}
                </div>
                <h1>Recommendations</h1>
                <div className="card_data_recoment">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination]}
                        className="swiper_recoment"
                    >
                        {CardDataRecomment.map((item, key) => (
                            <SwiperSlide>
                                <CardRecomment
                                    key={key}
                                    avt={item.avt}
                                    name={item.name}
                                    hint={item.hint}
                                    desc={item.desc}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
