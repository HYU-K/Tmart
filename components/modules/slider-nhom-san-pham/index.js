import ProductItem from "../../layouts/product/product-item";
import styles from '../../../styles/Home.module.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Navigation } from "swiper";

export default function SliderNhomSanPham() {
    var prds = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className="">
            <div className="bg-white relative overflow-hidden before:content-[attr(before)] before:w-full before:h-[2px] before:bg-red-600 before:absolute before:top-[12px] before:left-0 before:sm:hidden z-10 mb-5 sm:mb-8">
                <div
                    className="flex items-center justify-between relative w-fit mx-auto mb-4 sm:mb-0 sm:w-full z-10 px-8 xs:px-12 sm:px-4 py-2 sm:bg-gray-200">
                    <div className="w-8 h-8 sm:hidden">
                        <img src="./images/icon/set.png" alt="" className="min-w-[30px] w-full" />
                    </div>
                    <h2 className="text-base uppercase text-center sm:text-left text-white sm:text-texth font-medium">THỊT, CÁ, TRỨNG, HẢI SẢN</h2>
                    <div className="w-8 h-8 sm:hidden">
                        <img src="./images/icon/set1.png" alt="" className="min-w-[30px] w-full" />
                    </div>
                    <div className="w-full h-full absolute top-0 left-1/2 -translate-x-1/2 overflow-auto -z-10 sm:hidden">
                        <img src="./images/bg-title.png" alt="" className="w-full h-full" />
                    </div>
                    <div className="max-w-2/3 lg:max-w-3/4 cursor-pointer hidden sm:block">
                        <div className="relative list-title-sale px-7">
                            <>
                                <Swiper
                                    breakpoints={{
                                        1220: {
                                            slidesPerView: 6,
                                        },

                                        960: {
                                            slidesPerView: 4,
                                        },

                                        0: {
                                            slidesPerView: 3,
                                        },
                                    }}

                                    slidesPerView={6}
                                    spaceBetween={10}
                                    slidesPerGroup={2}
                                    loop={false}
                                    loopFillGroupWithBlank={true}
                                    navigation={true}
                                    modules={[Navigation]}
                                    className="list-title-sale"
                                >
                                    <SwiperSlide className="min-w-[100px]">
                                        <a href="" title=""
                                            className="swiper-slide min-h-[46px] active flex w-full text-center justify-center items-center p-1 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                            <span className="text-xs font-bold">3500 khuyến mãi sốc</span>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide className="min-w-[100px]">
                                        <a href="" title=""
                                            className="swiper-slide min-h-[46px] flex w-full text-center justify-center items-center p-1 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                            <span className="text-xs font-bold">Thịt, cá, trứng,...</span>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide className="min-w-[100px]">
                                        <a href="" title=""
                                            className="swiper-slide min-h-[46px] flex w-full text-center justify-center items-center p-1 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                            <span className="text-xs font-bold">Rau, củ, trái cây</span>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide className="min-w-[100px]">
                                        <a href="" title=""
                                            className="swiper-slide min-h-[46px] flex w-full text-center justify-center items-center p-1 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                            <span className="text-xs font-bold">Bia, nước giải khát</span>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide className="min-w-[100px]">
                                        <a href="" title=""
                                            className="swiper-slide min-h-[46px] flex w-full text-center justify-center items-center p-1 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                            <span className="text-xs font-bold">Sữa các loại</span>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide className="min-w-[100px]">
                                        <a href="" title=""
                                            className="swiper-slide min-h-[46px] flex w-full text-center justify-center items-center p-1 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                            <span className="text-xs font-bold">Bánh kẹo các loại</span>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide className="min-w-[100px]">
                                        <a href="" title=""
                                            className="swiper-slide min-h-[46px] flex w-full text-center justify-center items-center p-1 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                            <span className="text-xs font-bold">Rau, củ, trái cây</span>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide className="min-w-[100px]">
                                        <a href="" title=""
                                            className="swiper-slide min-h-[46px] flex w-full text-center justify-center items-center p-1 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                            <span className="text-xs font-bold">Bia, nước giải khát</span>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide className="min-w-[100px]">
                                        <a href="" title=""
                                            className="swiper-slide min-h-[46px] flex w-full text-center justify-center items-center p-1 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                            <span className="text-xs font-bold">Sữa các loại</span>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide className="min-w-[100px]">
                                        <a href="" title=""
                                            className="swiper-slide min-h-[46px] flex w-full text-center justify-center items-center p-1 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                            <span className="text-xs font-bold">Bánh kẹo các loại</span>
                                        </a>
                                    </SwiperSlide>
                                </Swiper>
                            </>
                            <div className="swiper-button-next absolute top-1/2 left-0 w-4 h-4 border border-green-600 rounded-full flex items-center justify-center transform -translate-y-1/2 before:ml-[1px] before:content-[attr(before)] before:w-[4px] before:h-[4px] before:border-t before:border-r before:border-green-600 before:rotate-[-135deg]"></div>
                            <div className="swiper-button-prev absolute top-1/2 right-0 w-4 h-4 border border-green-600 rounded-full flex items-center justify-center transform -translate-y-1/2 before:mr-[1px] before:content-[attr(before)] before:w-[4px] before:h-[4px] before:border-t before:border-r before:border-green-600 before:rotate-45"></div>
                        </div>
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
                                            <SwiperSlide className="min-w-[100px]">
                                                <ProductItem />
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </>
                        </div>
                        <div className="flex items-center justify-center py-3 bg-white rounded sm:rounded-none overflow-hidden">
                            <a href="" title="" className="flex items-center justify-center">
                                <span className="text-[13px] mr-2 text-green-500 font-medium">Xem thêm 3.500 sản phẩm</span>
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