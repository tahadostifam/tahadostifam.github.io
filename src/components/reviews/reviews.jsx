import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import config from "../../config.json";
import './reviews.scss';

export default function AboutMeSection() {
    return (
        <div data-aos="fade-right" data-aos-duration="1500">
            <div id="reviews" className="container" style={{ marginTop: "100px" }}>
                <h1 className="section-header" style={{ marginBottom: "50px" }}>Clients & Reviews</h1>

                <Swiper slidesPerView={1} autoplay={{ delay: 6000 }} navigation={true}>
                    {[1, 2, 3, 4, 5].map(function (object, i) {
                        return <SwiperSlide key={i}>
                            <div className="review-info-box">
                                <div className="avatar">
                                    <img src={config.AVATAR_URL} alt="Avatar" />
                                </div>
                                <h1>
                                    [ Taha. Dostifam ]
                                </h1>
                                <h2>Full-Stack Web Developer</h2>
                            </div>
                            <div className="review-content-box">
                                <div className="review-content-box-triangle"><ion-icon name="caret-up-outline"></ion-icon></div>

                                <p>I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍</p>
                            </div>
                        </SwiperSlide>;
                    })}

                </Swiper>
            </div>
        </div>
    );
}
