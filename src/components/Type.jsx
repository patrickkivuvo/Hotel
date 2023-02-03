import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper";

import "swiper/css/bundle";

const Type = ({ roomType }) => {
    return (
        <div className="type flex">
            <ImageContainer roomType={roomType} />
            <RoomDetails roomType={roomType} />
        </div>
    );
};

const ImageContainer = ({ roomType }) => {
    return (
        <div className="image-container">
            <Swiper
                modules={[Navigation, A11y, Autoplay]}
                loop={true}
                autoplay={true}
                navigation
            >
                <div className="swiper-wrapper">
                    {roomType.imgs.map((image) => (
                        <SwiperSlide>
                            <img src={image} alt="" />
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>
    );
};

const RoomDetails = ({ roomType }) => {
    return (
        <div className="room-details flex">
            <h2>{roomType.title}</h2>
            <p>{roomType.description}</p>
            <div className="details">
                <div className="detail">
                    <p>capacity</p>
                    <p>{roomType.capacity}</p>
                </div>
                <div className="detail">
                    <p>Rooms</p>
                    <p>{roomType.rooms}</p>
                </div>
                <div className="detail">
                    <p>Bed</p>
                    <p>{roomType.bed}</p>
                </div>
            </div>
        </div>
    );
};

export default Type;
