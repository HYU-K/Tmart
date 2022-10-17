
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination, Autoplay } from "swiper";

export default function SlidePage() {
    return (
        <div className="mySwiper relative">
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
            <div class="swiper-button-next absolute top-1/2 left-0 w-5 h-14 bg-opacity-30 bg-black flex items-center justify-center transform -translate-y-1/2 before:ml-[1px] before:content-[attr(before)] before:w-2 before:h-2 before:border-t before:border-r before:border-white before:rotate-[-135deg] zoom-60 xs:zoom-70 sm:zoom-80 lg:zoom-90 zoom-100 z-10 cursor-pointer"></div>
            <div class="swiper-button-prev absolute top-1/2 right-0 w-5 h-14 bg-opacity-30 bg-black flex items-center justify-center transform -translate-y-1/2 before:mr-[1px] before:content-[attr(before)] before:w-2 before:h-2 before:border-t before:border-r before:border-white before:rotate-45 zoom-60 xs:zoom-70 sm:zoom-80 lg:zoom-90 zoom-100 z-10 cursor-pointer"></div>
        </div>
    );
}
