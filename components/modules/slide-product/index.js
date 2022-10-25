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

export default function SlideProduct() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
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
            <Swiper
                breakpoints={{
                    500: {
                        slidesPerView: 6,
                    },

                    400: {
                        slidesPerView: 5,
                    },

                    0: {
                        slidesPerView: 4,
                    },
                }}

                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={16}
                slidesPerView={6}
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
        </>
    );
}
