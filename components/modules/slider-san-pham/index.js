import ProductItem from "../../layouts/product/product-item";
import styles from '../../../styles/Home.module.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Navigation } from "swiper";

export default function SliderSanPham() {
    var prds = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className="">
            <div className="bg-white relative overflow-hidden before:content-[attr(before)] before:w-full before:h-[2px] before:bg-red-600 before:absolute before:top-[12px] before:left-0 before:sm:hidden z-10 mb-5 sm:mb-8">
                <div
                    className="flex items-center justify-between relative w-fit mx-auto mb-3 z-10 px-12 py-2 ">
                    <div className="w-8 h-8">
                        <img src="./images/icon/set.png" alt="" className="w-full" />
                    </div>
                    <h2 class="text-base sm:text-xl lg:text-2xl text-white text-center font-medium uppercase">KHUYẾN MÃI THÁNG 9</h2>
                    <div className="w-8 h-8">
                        <img src="./images/icon/set1.png" alt="" className="w-full" />
                    </div>
                    <div className="w-full h-full absolute top-0 left-1/2 -translate-x-1/2 overflow-auto -z-10">
                        <img src="./images/bg-title.png" alt="" className="w-full h-full" />
                    </div>
                </div>
                <div className="">
                    <div>
                        <div
                            className="slide-list-products bg-gray-300 pb-[1px]">
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

                                    slidesPerView={5}
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
                        <div className="flex items-center justify-center py-3 bg-white rounded sm:rounded-none overflow-hidden">
                            <a href="" title="" className="flex items-center justify-center">
                                <span className="text[13px] mr-2 text-green-500 font-medium">Xem thêm 3.500 sản phẩm</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" className="text-green-500" viewBox="0 0 15 14"
                                    fill="currentColor">
                                    <rect width="14" height="14" transform="translate(0.180664)" fill="currentColor" />
                                    <path
                                        d="M11.2633 7.58342H7.76335V11.0834H6.59668V7.58342H3.09668V6.41675H6.59668V2.91675H7.76335V6.41675H11.2633V7.58342Z"
                                        fill="white" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}