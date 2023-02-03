import { A11y, Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";

const HomeSwiper = () => {
    const slides = [
        {
            id: 1,
            title: "Room types",
            description:
                "Carefully Designed to relieve your fatigue from work where you can feel for yourself what is like to truly relax in nature",
        },
        {
            id: 2,
            title: "The Ultimate Comfort",
            description:
                "Regain your vigor in the snug luxurious bed. A soft touch by using nature-friendly materials that inspire business and travel",
        },
        {
            id: 3,
            title: "Soft and Comfortable Bedding",
            description:
                "Gives a relaxing impression with furniture motivated by natural elements like wood to rest your tired eyes",
        },
    ];

    return (
        <div className="home-swiper">
            <Swiper
                modules={[A11y, Autoplay, EffectCoverflow]}
                loop={true}
                autoplay={true}
                direction={"vertical"}
                effect={"coverflow"}
            >
                <div className="swiper-wrapper">
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <Slide slide={slide} />
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>
    );
};

const Slide = ({ slide }) => {
    return (
        <div className={`swiper-slide header-slide flex slide${slide.id}`}>
            <div className="blank"></div>
            <div>
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
            </div>
        </div>
    );
};

export default HomeSwiper;
