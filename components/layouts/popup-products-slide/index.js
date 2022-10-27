
import styles from "../../../styles/Home.module.css";
import Link from "next/link";

import { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function ProductsSlidePopup() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <div before=""
                className="w-full h-full fixed top-0 left-0 before:content-[attr(before)] before:bg-black before:top-0 before:left-0 before:absolute before:w-full before:h-full before:opacity-70 z-[99999] hidden">
                <div
                    className="w-11/12 max-w-5xl bg-white rounded-xl px-4 py-5 sm:px-6 sm:p-7 lg:p-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div
                        className="close absolute top-0 right-0 rounded-full bg-red-600 overflow-hidden text-white p-1 translate-x-1/2 -translate-y-1/2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-x"
                            viewBox="0 0 16 16">
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                    <div className="sm:flex overflow-hidden">
                        <div className="mb-5 sm:mb-0 sm:w-2/3 lg:w-1/2 relative">
                            <Swiper
                                style={{
                                    "--swiper-navigation-color": "#fff",
                                    "--swiper-pagination-color": "#fff",
                                }}
                                loop={true}
                                spaceBetween={10}
                                navigation={false}
                                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2 mb-4"
                            >
                                <SwiperSlide className="overflow-hidden rounded">
                                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                </SwiperSlide>
                                <SwiperSlide className="overflow-hidden rounded">
                                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                                </SwiperSlide>
                                <SwiperSlide className="overflow-hidden rounded">
                                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                </SwiperSlide>
                                <SwiperSlide className="overflow-hidden rounded">
                                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                </SwiperSlide>
                                <SwiperSlide className="overflow-hidden rounded">
                                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                                </SwiperSlide>
                                <SwiperSlide className="overflow-hidden rounded">
                                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                                </SwiperSlide>
                                <SwiperSlide className="overflow-hidden rounded">
                                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                                </SwiperSlide>
                                <SwiperSlide className="overflow-hidden rounded">
                                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                                </SwiperSlide>
                                <SwiperSlide className="overflow-hidden rounded">
                                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                                </SwiperSlide>
                                <SwiperSlide className="overflow-hidden rounded">
                                    <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                                </SwiperSlide>
                            </Swiper>
                            <a className="prev absolute cursor-pointer top-1/2 py-4 px-2 -mt-12 text-white font-bold text-xl bg-gray-500 bg-opacity-50 z-10 left-0 rounded-r-md">❮</a>
                            <a className="next absolute cursor-pointer top-1/2 py-4 px-2 -mt-12 text-white font-bold text-xl bg-gray-500 bg-opacity-50 z-10 right-0 rounded-l-md">❯</a>
                        </div>

                        <div className="sm:w-1/3 sm:pl-5 lg:w-1/2 lg:pl-10">
                            <p className="text-lg text-black font-medium mb-5 hidden sm:block">Kiwi vàng Zespri hộp 500g (3-5 trái)</p>
                            <Swiper
                                breakpoints={{
                                    1220: {
                                        slidesPerView: 5,
                                    },

                                    576: {
                                        slidesPerView: 3,
                                    },

                                    0: {
                                        slidesPerView: 5,
                                    },
                                }}

                                onSwiper={setThumbsSwiper}
                                loop={false}
                                spaceBetween={10}
                                slidesPerView={5}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper"
                            >
                                <SwiperSlide className="overflow-hidden rounded">
                                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                </SwiperSlide>
                                <SwiperSlide className="overflow-hidden rounded">
                                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                                </SwiperSlide>
                                <SwiperSlide className="overflow-hidden rounded">
                                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                </SwiperSlide>
                                <SwiperSlide className="overflow-hidden rounded">
                                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                </SwiperSlide>
                                <SwiperSlide className="overflow-hidden rounded">
                                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                                </SwiperSlide>
                                <SwiperSlide className="overflow-hidden rounded">
                                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                                </SwiperSlide>
                                <SwiperSlide className="overflow-hidden rounded">
                                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                                </SwiperSlide>
                                <SwiperSlide className="overflow-hidden rounded">
                                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                                </SwiperSlide>
                                <SwiperSlide className="overflow-hidden rounded">
                                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                                </SwiperSlide>
                                <SwiperSlide className="overflow-hidden rounded">
                                    <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}