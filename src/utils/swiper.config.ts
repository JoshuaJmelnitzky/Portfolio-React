import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

export const swiperConfig = {
    speed: 500,
    navigation: true,
    pagination: { clickable: true },
    direction: 'horizontal' as const, 
    mousewheel: true,
    slidesPerView: 1,
    keyboard: true,
    modules: [Navigation, Pagination, Mousewheel, Keyboard],
    className: "mySwiper"
};

export { Swiper, SwiperSlide };

