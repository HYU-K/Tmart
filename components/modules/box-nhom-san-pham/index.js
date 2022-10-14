import ProductItem from "../../layouts/product/product-item";
import styles from '../../../styles/Home.module.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Navigation } from "swiper";

export default function BoxNhomSanPham() {
    var prds = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className="">
            <div className="bg-white relative overflow-hidden before:content-[attr(before)] before:w-full before:h-[2px] before:bg-red-600 before:absolute before:top-[12px] before:left-0 before:sm:hidden z-10 mb-5">
                <div
                    className="flex items-center justify-between relative w-fit mx-auto mb-4 sm:mb-0 sm:w-full z-10 px-12 sm:px-4 py-2 sm:bg-gray-200">
                    <div className="w-8 h-8 sm:hidden">
                        <img src="./images/icon/set.png" alt="" className="w-full" />
                    </div>
                    <h2 className="text-base uppercase text-center sm:text-left text-white sm:text-texth font-medium">THỊT, CÁ, TRỨNG, HẢI SẢN</h2>
                    <div className="w-8 h-8 sm:hidden">
                        <img src="./images/icon/set1.png" alt="" className="w-full" />
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
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <a href="" title=""
                                            className="swiper-slide min-h-[46px] active flex w-full text-center justify-center items-center p-1 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                            <span className="text-xs font-bold">3500 khuyến mãi sốc</span>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <a href="" title=""
                                            className="swiper-slide min-h-[46px] flex w-full text-center justify-center items-center p-1 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                            <span className="text-xs font-bold">Thịt, cá, trứng,...</span>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <a href="" title=""
                                            className="swiper-slide min-h-[46px] flex w-full text-center justify-center items-center p-1 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                            <span className="text-xs font-bold">Rau, củ, trái cây</span>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <a href="" title=""
                                            className="swiper-slide min-h-[46px] flex w-full text-center justify-center items-center p-1 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                            <span className="text-xs font-bold">Bia, nước giải khát</span>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <a href="" title=""
                                            className="swiper-slide min-h-[46px] flex w-full text-center justify-center items-center p-1 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                            <span className="text-xs font-bold">Sữa các loại</span>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <a href="" title=""
                                            className="swiper-slide min-h-[46px] flex w-full text-center justify-center items-center p-1 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                            <span className="text-xs font-bold">Bánh kẹo các loại</span>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <a href="" title=""
                                            className="swiper-slide min-h-[46px] flex w-full text-center justify-center items-center p-1 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                            <span className="text-xs font-bold">Rau, củ, trái cây</span>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <a href="" title=""
                                            className="swiper-slide min-h-[46px] flex w-full text-center justify-center items-center p-1 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                            <span className="text-xs font-bold">Bia, nước giải khát</span>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <a href="" title=""
                                            className="swiper-slide min-h-[46px] flex w-full text-center justify-center items-center p-1 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                            <span className="text-xs font-bold">Sữa các loại</span>
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <a href="" title=""
                                            className="swiper-slide min-h-[46px] flex w-full text-center justify-center items-center p-1 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                            <span className="text-xs font-bold">Bánh kẹo các loại</span>
                                        </a>
                                    </SwiperSlide>
                                </Swiper>
                            </>
                            <div class="swiper-button-next absolute top-1/2 left-0 w-4 h-4 border border-green-600 rounded-full flex items-center justify-center transform -translate-y-1/2 before:ml-[1px] before:content-[attr(before)] before:w-[4px] before:h-[4px] before:border-t before:border-r before:border-green-600 before:rotate-[-135deg]"></div>
                            <div class="swiper-button-prev absolute top-1/2 right-0 w-4 h-4 border border-green-600 rounded-full flex items-center justify-center transform -translate-y-1/2 before:mr-[1px] before:content-[attr(before)] before:w-[4px] before:h-[4px] before:border-t before:border-r before:border-green-600 before:rotate-45"></div>
                        </div>
                    </div>
                </div>
                <div className="mb3">
                    <div>
                        <div
                            className={`w-full grid gap-[1px] grid-cols-2 xs:grid-cols-3 xl:grid-cols-4 bg-gray-300 mb-3 ${styles.list_home_products}`}>
                            {
                                prds.map((item, index) => (
                                    <ProductItem />
                                ))
                            }
                        </div>
                        <div className="flex items-center justify-center py-3 bg-white rounded sm:rounded-none overflow-hidden">
                            <a href="" title="" className="flex items-center justify-center">
                                <span className="text[13px] mr-2 text-green-500 sm:text-blue-400 font-medium">Xem thêm 3.500 sản phẩm</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" className="text-green-500 sm:text-blue-400" viewBox="0 0 15 14"
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
            <a title="" href="" className="flex mb-5 xs:hidden">
                <div className="min-w-[65px] bg-green-600 grid items-center p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none" className="mx-auto">
                        <path d="M9.51823 15.2198L7.74948 13.4536L13.4995 7.70358L7.74948 1.95357L9.51823 0.194824L17.0307 7.70733L9.51948 15.2198H9.51823ZM2.73698 15.2198L0.969482 13.4536L6.71948 7.70358L0.969482 1.96232L2.73698 0.194824L10.2507 7.70733L2.73823 15.2198H2.73698Z" fill="white" />
                    </svg>
                    <div className="text-center text-white">
                        <p className="text-[13px] uppercase">Xem</p>
                        <p className="text-[11px]">chi tiết</p>
                    </div>
                </div>
                <div className="w-full h-full pl-[2px]"><img src="./images/ban-quangcao.png" className="w-full h-full object-cover" /></div>
            </a>
        </div>
    )
}