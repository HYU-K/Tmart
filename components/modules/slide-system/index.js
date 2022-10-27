
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination, Autoplay } from "swiper";

export default function SlideSystem() {
    return (
        <div className="mySwiper relative">
            <>
                <Swiper
                    breakpoints={{
                        1220: {
                            slidesPerView: 3,
                        },

                        500: {
                            slidesPerView: 3,
                        },

                        0: {
                            slidesPerView: 2,
                        },
                    }}
                    slidesPerView={3}
                    spaceBetween={20}
                    slidesPerGroup={1}
                    loop={true}
                    pagination={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide className="swiper-slide relative rounded overflow-hidden">
                        <div className="relative transition-all w-full pt-[60%]">
                            <img src="./images/khuyenmai.png" alt=""
                                className="absolute top-1/2 left-1/2 overflow-hidden transform -translate-y-1/2 -translate-x-1/2 w-full h-full object-cover" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide relative rounded overflow-hidden">
                        <div className="relative transition-all w-full pt-[60%]">
                            <img src="./images/khuyenmai.png" alt=""
                                className="absolute top-1/2 left-1/2 overflow-hidden transform -translate-y-1/2 -translate-x-1/2 w-full h-full object-cover" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide relative rounded overflow-hidden">
                        <div className="relative transition-all w-full pt-[60%]">
                            <img src="./images/khuyenmai.png" alt=""
                                className="absolute top-1/2 left-1/2 overflow-hidden transform -translate-y-1/2 -translate-x-1/2 w-full h-full object-cover" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
            <div className="swiper-button-next absolute top-1/2 left-0 w-7 h-9 rounded-tr-3xl rounded-br-3xl bg-opacity-30 bg-black flex items-center justify-center transform -translate-y-1/2 before:ml-[1px] before:content-[attr(before)] before:w-2 before:h-2 before:border-t-[3px] before:border-r-[3px] before:border-white before:rotate-[-135deg] zoom-60 xs:zoom-70 sm:zoom-80 lg:zoom-90 zoom-100 z-10 cursor-pointer"></div>
            <div className="swiper-button-prev absolute top-1/2 right-0 w-7 h-9 rounded-tl-3xl rounded-bl-3xl bg-opacity-30 bg-black flex items-center justify-center transform -translate-y-1/2 before:mr-[1px] before:content-[attr(before)] before:w-2 before:h-2 before:border-t-[3px] before:border-r-[3px] before:border-white before:rotate-45 zoom-60 xs:zoom-70 sm:zoom-80 lg:zoom-90 zoom-100 z-10 cursor-pointer"></div>
        </div>
    );
}
