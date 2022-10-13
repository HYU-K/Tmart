import ProductItem from "../../layouts/product/product-item";
import styles from '../../../styles/Home.module.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Navigation } from "swiper";

export default function BoxNhomSanPhamKhuyenMai() {
    var prds = [1,2,3,4,5,6,7,8,9,10];
    return (
        <div className="bg-white" id="">
            <div before=""
              className="flex items-center justify-between relative z-10 px-4 py-2 before:content-[attr(before)] before:bg-stone-200 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[-1]">
              <h2 className="title16 uppercase text-texth font-medium">THỊT, CÁ, TRỨNG, HẢI SẢN</h2>
                <div className="max-w-3/4 cursor-pointer hidden sm:block">
                    <div className="relative list-title-sale px-7">
                        <>
                            <Swiper
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
                                        className="swiper-slide min-h-[46px] active flex w-full text-center justify-center items-center p-1 limit-text-2 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                        <span className="text-xs font-bold">3500 khuyến mãi sốc</span>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="" title=""
                                        className="swiper-slide min-h-[46px] flex w-full text-center justify-center items-center p-1 limit-text-2 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                        <span className="text-xs font-bold">Thịt, cá, trứng,...</span>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="" title=""
                                        className="swiper-slide min-h-[46px] flex w-full text-center justify-center items-center p-1 limit-text-2 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                        <span className="text-xs font-bold">Rau, củ, trái cây</span>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="" title=""
                                        className="swiper-slide min-h-[46px] flex w-full text-center justify-center items-center p-1 limit-text-2 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                        <span className="text-xs font-bold">Bia, nước giải khát</span>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="" title=""
                                        className="swiper-slide min-h-[46px] flex w-full text-center justify-center items-center p-1 limit-text-2 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                        <span className="text-xs font-bold">Sữa các loại</span>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="" title=""
                                        className="swiper-slide min-h-[46px] flex w-full text-center justify-center items-center p-1 limit-text-2 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                        <span className="text-xs font-bold">Bánh kẹo các loại</span>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="" title=""
                                        className="swiper-slide min-h-[46px] flex w-full text-center justify-center items-center p-1 limit-text-2 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                        <span className="text-xs font-bold">Rau, củ, trái cây</span>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="" title=""
                                        className="swiper-slide min-h-[46px] flex w-full text-center justify-center items-center p-1 limit-text-2 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                        <span className="text-xs font-bold">Bia, nước giải khát</span>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="" title=""
                                        className="swiper-slide min-h-[46px] flex w-full text-center justify-center items-center p-1 limit-text-2 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
                                        <span className="text-xs font-bold">Sữa các loại</span>
                                    </a>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <a href="" title=""
                                        className="swiper-slide min-h-[46px] flex w-full text-center justify-center items-center p-1 limit-text-2 border border-texth text-texth bg-white rounded overflow-hidden active:border-green-600 active:text-green-600 hover:border-green-600 hover:text-green-600">
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
            <div className="mb-5">
                <div>
                    <div
                        className={`w-full grid gap-[1px] grid-cols-2 xs:grid-cols-3 xl:grid-cols-5 bg-gray-300 ${styles.list_home_products}`}>
                            {
                            prds.map((item,index) => (
                                <ProductItem />
                            ))
                        }
                    </div>
                    <div className="flex items-center justify-center py-3">
                        <a href="" title="" className="flex items-center justify-center">
                            <span className="title13 mr-2 text-blue-400 font-medium">Xem thêm 3.500 sản phẩm</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14"
                                fill="none">
                                <rect width="14" height="14" transform="translate(0.180664)" fill="#2F80ED" />
                                <path
                                    d="M11.2633 7.58342H7.76335V11.0834H6.59668V7.58342H3.09668V6.41675H6.59668V2.91675H7.76335V6.41675H11.2633V7.58342Z"
                                    fill="white" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}