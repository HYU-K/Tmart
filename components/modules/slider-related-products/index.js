import ProductItem from "../../layouts/product/product-item";
import styles from '../../../styles/Home.module.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Navigation } from "swiper";

export default function SliderRelatedProducts() {
    var prds = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className="">
            <div className="bg-white relative overflow-hidden z-10">
                <h2 className="text-base sm:text-xl text-black font-medium mb-5">Sản phẩm liên quan</h2>
                <div className="">
                    <div>
                        <div
                            className="slide-list-products bg-gray-300">
                            <>
                                <Swiper
                                    breakpoints={{
                                        1220: {
                                            slidesPerView: 4,
                                        },

                                        500: {
                                            slidesPerView: 3,
                                        },

                                        0: {
                                            slidesPerView: 2,
                                        },
                                    }}

                                    slidesPerView={4}
                                    spaceBetween={1}
                                    slidesPerGroup={1}
                                    loop={true}
                                    loopFillGroupWithBlank={true}
                                    modules={[Navigation]}
                                    className="slide-list-products"
                                >
                                    {
                                        prds.map((item, index) => (
                                            <SwiperSlide>
                                                <ProductItem />
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}