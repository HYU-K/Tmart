import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ProductItem from "../../components/layouts/product/product-item";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Navigation } from "swiper";

export default function Cart({ }) {
    var prds = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div id="main" className="overflow-hidden bg-gray-100 pb-20 xs:pb-0">

            <Head>
                <title>Cart</title>
                <meta name="description" content="Generated by Huy" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="overflow-hidden shadow">
                <Header />
            </div>

            <div className="sm:container">
                <div className="w-full max-w-[640px] mx-auto mb-5 sm:my-8">
                    <div className="w-full bg-white mb-1.5">
                        <div className="pt-4 px-4 sm:pt-5 sm:px-7 border-b border-gray-200">
                            <h3 className="text-sm text-texth font-medium mb-4">Giỏ hàng của bạn</h3>
                        </div>
                        <div className="py-5 px-4 sm:p-7">
                            <h2 className="font-bold text-green-500 text-base mb-5 sm:mb-7 uppercase">Hàng có sẵn</h2>
                            <div className="">
                                <div className="flex gap-5">
                                    <div className="inline-block min-w-[90px] xs:min-w-[114px] rounded overflow-hidden">
                                        <div className="relative transition-all w-full pt-[100%]">
                                            <img src="/images/detail1.png" alt="" className="absolute top-1/2 left-1/2 overflow-hidden transform -translate-y-1/2 -translate-x-1/2 w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="w-full grid xs:flex justify-between gap-5">
                                        <div className="">
                                            <h3 className={`text-base text-texth font-medium mb-4 overflow-hidden ${styles.limit_text_2}`}>Dưa lưới ruột vàng</h3>
                                            <div className="flex items-center gap-5 mb-4">
                                                <div className="border border-gray-200 flex items-center">
                                                    <button className="w-8 h-8 xs:w-10 xs:h-10 flex items-center justify-center text-texth">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-dash max-w-[20px] xs:max-w-none" viewBox="0 0 16 16">
                                                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                                        </svg>
                                                    </button>
                                                    <input type="text"
                                                        className="w-8 h-8 xs:w-10 xs:h-10 text-center focus:outline-none border-l border-r border-gray-200  text-black text-sm xs:text-lg" id="" defaultValue={'1'} />
                                                    <button className="w-8 h-8 xs:w-10 xs:h-10 flex items-center justify-center text-texth">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-plus max-w-[20px] xs:max-w-none" viewBox="0 0 16 16">
                                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <span className="text-sm text-blue-500">Xóa</span>
                                            </div>
                                            <div className="">
                                                <p className="text-sm text-gray-500">Tồn kho: 1234</p>
                                                <p className="text-sm text-gray-300">Chương trình khuyến mại</p>
                                            </div>
                                        </div>
                                        <div className="min-w-fit flex items-center gap-4 xs:inline-block">
                                            <div className="xs:mb-1">
                                                <p className="text-black font-medium text-sm">350.000 đ</p>
                                            </div>
                                            <div className="">
                                                <p className="text-gray-300 line-through text-sm">399.000 đ</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-white p-4 sm:px-7 sm:py-5 mb-5">
                        <div className="flex items-center gap-3 py-2.5 px-2 bg-orange-100 mb-6 flex-wrap">
                            <a href="" title="" className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus text-blue-500" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                                <span className="text-sm text-blue-500 font-medium">Mua thêm</span>
                            </a>
                            <p className="text-sm text-texth font-medium">để miễn phía giao với đơn từ 300.000</p>
                        </div>
                        <div className="mb-5">
                            <div className="flex items-center justify-end mb-4">
                                <div className="">
                                    <h3 className="text-black text-sm font-medium">Tiền hàng:</h3>
                                </div>
                                <div className="flex items-center justify-end min-w-[120px]">
                                    <p className="text-black text-sm font-medium">350.000 đ</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-end mb-5">
                                <div className="">
                                    <h3 className="text-blue-500 text-sm font-medium">Phí giao hàng</h3>
                                </div>
                                <div className="flex items-center justify-end min-w-[120px]">
                                    <p className="text-gray-500 text-sm font-medium">50.000 đ</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-end">
                                <button className="flex items-center justify-center p-2.5 border border-blue-500 rounded overflow-hidden">
                                    <span className="text-sm leading-[120%] text-blue-500">Dùng phiếu mua hàng</span>
                                </button>
                            </div>
                        </div>
                        <div className="">
                            <Link href={'/pays'}>
                                <button className="w-full mb-2 p-3 overflow-hidden bg-color1 border border-color1 text-white leading-[0] rounded flex items-center justify-center relative before:duration-500 z-[1] before:content-[attr(before)] before:bg-white before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[1] before:origin-center-left before:scale-x-0 hover:before:scale-100 hover:before:duration-500 hover:text-color1">
                                    <span className="text-sm xs:text-base font-medium leading-[100%] z-[2] uppercase">Đặt hàng</span>
                                </button>
                            </Link>
                            <button className="w-full p-3 overflow-hidden text-texth leading-[0] rounded flex items-center justify-center relative hover:text-color1">
                                <span className="text-sm xs:text-base font-medium leading-[100%] uppercase">Xóa giỏ hàng</span>
                            </button>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-white relative overflow-hidden before:content-[attr(before)] before:w-full before:h-[2px] before:bg-red-600 before:absolute before:top-[12px] before:left-0 before:sm:hidden z-10 mb-5 sm:mb-8">
                            <div
                                className="flex items-center justify-between relative w-fit mx-auto mb-3 z-10 px-8 xs:px-12 py-3 ">
                                <div className="w-5 h-5">
                                    <img src="./images/icon/set.png" alt="" className="min-w-[20px] w-full" />
                                </div>
                                <h2 className="text-sm text-white text-center font-medium uppercase">ƯU ĐÃ ĐẶC BIỆT DÀNH CHO BẠN</h2>
                                <div className="w-5 h-5">
                                    <img src="./images/icon/set1.png" alt="" className="min-w-[20px] w-full" />
                                </div>
                                <div className="w-full h-full absolute top-0 left-1/2 -translate-x-1/2 overflow-auto -z-10">
                                    <img src="./images/bg-title.png" alt="" className="w-full h-full" />
                                </div>
                            </div>
                            <div className="">
                                <div>
                                    <div
                                        className="slide-list-products bg-gray-300">
                                        <>
                                            <Swiper
                                                breakpoints={{
                                                    500: {
                                                        slidesPerView: 3,
                                                    },

                                                    0: {
                                                        slidesPerView: 2,
                                                    },
                                                }}

                                                slidesPerView={3}
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
                                    <div className="flex items-center justify-center py-4 bg-white rounded sm:rounded-none overflow-hidden">
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
                </div>
                <Footer />
            </div>
        </div>
    );
}

