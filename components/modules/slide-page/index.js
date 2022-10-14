
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination, Autoplay } from "swiper";

export default function SlidePage() {
    return (
        <>
            <Swiper pagination={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Pagination, Autoplay]} className="mySwiper">
                <SwiperSlide className="swiper-slide relative">
                    <img src="./images/khuyenmai.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide relative">
                    <img src="./images/khuyenmai.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide relative">
                    <img src="./images/khuyenmai.png" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
