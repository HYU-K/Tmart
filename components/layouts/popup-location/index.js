import styles from "../../../styles/Home.module.css";
import Link from "next/link";

export default function LocationPopup() {
    return (
        <div before=""
            className="w-full h-full fixed top-0 left-0 before:content-[attr(before)] before:bg-black before:top-0 before:left-0 before:absolute before:w-full before:h-full before:opacity-70 hidden">
            <div
                className={`w-11/12 xs:w-96 max-h-full overflow-y-scroll bg-white absolute top-16 left-4 sm:left-[40%] sm:-translate-x-1/2 ${styles.scroll_hidden}`}>
                <div className="bg-red-800 py-4 px-7 mb-[2px]">
                    <p className="text-sm text-white text-center">Quý khách vui lòng cho biết địa chỉ nhận hàng để T-Mart chuẩn bị đủ hàng và giao nhanh chóng.</p>
                </div>
                <div className="">
                    <div className="bg-red-600 w-full h-16 flex items-center justify-center relative">
                        <span className="text-sm text-white text-center">Chọn Tỉnh/Thành phố</span>
                        <div
                            className="close w-6 h-6 flex items-center justify-center absolute top-1/2 right-0 text-white -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-x"
                                viewBox="0 0 16 16">
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="w-full mb-5">
                            <div className="w-full border border-gray-300 overflow-hidden px-2 bg-white h-9 flex">
                                <input type="text" placeholder="Tìm nhanh tỉnh/thành, quận/huyện" className="w-full text-gray-300 focus:text-black text-[13px] outline-none" />
                                <button className="text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5893 16.5227L14.5291 13.3863L14.5307 13.3814C15.7032 11.9286 16.3426 10.1122 16.341 8.23907C16.3409 6.61419 15.8644 5.02562 14.9714 3.67313C14.0784 2.32063 12.8089 1.26458 11.3224 0.637769C9.83587 0.0109578 8.19878 -0.158631 6.61697 0.150326C5.03515 0.459284 3.57922 1.23299 2.43225 2.37417C1.28528 3.51535 0.498479 4.97304 0.17078 6.56396C-0.15692 8.15487 -0.0108875 9.80799 0.590514 11.3154C1.19192 12.8229 2.22184 14.1173 3.55077 15.0361C4.87971 15.9548 6.44833 16.4568 8.05939 16.4789C9.93479 16.4833 11.7567 15.8486 13.2294 14.6776L16.2025 17.7637C16.2886 17.8455 16.3905 17.9086 16.5019 17.949C16.6133 17.9893 16.7317 18.006 16.8497 17.9981C16.9678 17.9902 17.083 17.9577 17.188 17.9029C17.2931 17.848 17.3858 17.7719 17.4604 17.6792C18.0901 17.01 17.5893 16.5227 17.5893 16.5227ZM11.5648 13.529C10.5311 14.2437 9.31098 14.6343 8.05778 14.6516C6.36096 14.6633 4.72902 13.9948 3.52088 12.7932C2.31274 11.5915 1.62734 9.95515 1.61542 8.24394C1.61522 6.97999 1.9856 5.7442 2.67998 4.69197C3.37435 3.63974 4.36173 2.81805 5.51793 2.33022C6.67414 1.8424 7.94756 1.71022 9.17806 1.95032C10.4086 2.19041 11.5412 2.79206 12.4335 3.6796C13.3259 4.56713 13.9381 5.70094 14.1932 6.93843C14.4483 8.17592 14.3348 9.46185 13.8672 10.6345C13.3995 11.8072 12.5985 12.8142 11.5648 13.529ZM4.34065 6.77527L5.87092 7.38367L5.87075 7.3841C5.64605 7.94959 5.65513 8.58118 5.896 9.13999C6.13693 9.69894 6.59004 10.1393 7.15564 10.3642L6.54723 11.8944C5.77738 11.5883 5.12886 11.0498 4.68691 10.3617C4.57117 10.1815 4.46961 9.99107 4.38373 9.79184C4.29786 9.59262 4.22913 9.388 4.1776 9.18014C3.98079 8.38635 4.03457 7.54512 4.34065 6.77527Z"></path></svg>
                                </button>
                            </div>
                        </div>
                        <div className={`pb-2 max-h-96 overflow-y-scroll ${styles.scroll_auto}`}>
                            <div
                                className="group flex items-center mb-5 pb-5 cursor-pointer border-b border-b-gray-300 last:pb-0 last:border-b-0 last:mb-0">
                                <p className="text-sm text-texth group-hover:text-color1">Hà Nội</p>
                            </div>
                            <div
                                className="group flex items-center mb-5 pb-5 cursor-pointer border-b border-b-gray-300 last:pb-0 last:border-b-0 last:mb-0">
                                <p className="text-sm text-texth group-hover:text-color1">TP. Hồ Chí Minh</p>
                            </div>
                            <div
                                className="group flex items-center mb-5 pb-5 cursor-pointer border-b border-b-gray-300 last:pb-0 last:border-b-0 last:mb-0">
                                <p className="text-sm text-texth group-hover:text-color1">Đà Nẵng</p>
                            </div>
                            <div
                                className="group flex items-center mb-5 pb-5 cursor-pointer border-b border-b-gray-300 last:pb-0 last:border-b-0 last:mb-0">
                                <p className="text-sm text-texth group-hover:text-color1">Thanh Hóa</p>
                            </div>
                            <div
                                className="group flex items-center mb-5 pb-5 cursor-pointer border-b border-b-gray-300 last:pb-0 last:border-b-0 last:mb-0">
                                <p className="text-sm text-texth group-hover:text-color1">Vũng Tàu</p>
                            </div>
                            <div
                                className="group flex items-center mb-5 pb-5 cursor-pointer border-b border-b-gray-300 last:pb-0 last:border-b-0 last:mb-0">
                                <p className="text-sm text-texth group-hover:text-color1">Bắc Ninh</p>
                            </div>
                            <div
                                className="group flex items-center mb-5 pb-5 cursor-pointer border-b border-b-gray-300 last:pb-0 last:border-b-0 last:mb-0">
                                <p className="text-sm text-texth group-hover:text-color1">Tuyên Quang</p>
                            </div>
                            <div
                                className="group flex items-center mb-5 pb-5 cursor-pointer border-b border-b-gray-300 last:pb-0 last:border-b-0 last:mb-0">
                                <p className="text-sm text-texth group-hover:text-color1">Thanh Hóa</p>
                            </div>
                            <div
                                className="group flex items-center mb-5 pb-5 cursor-pointer border-b border-b-gray-300 last:pb-0 last:border-b-0 last:mb-0">
                                <p className="text-sm text-texth group-hover:text-color1">Vũng Tàu</p>
                            </div>
                            <div
                                className="group flex items-center mb-5 pb-5 cursor-pointer border-b border-b-gray-300 last:pb-0 last:border-b-0 last:mb-0">
                                <p className="text-sm text-texth group-hover:text-color1">Bắc Ninh</p>
                            </div>
                            <div
                                className="group flex items-center mb-5 pb-5 cursor-pointer border-b border-b-gray-300 last:pb-0 last:border-b-0 last:mb-0">
                                <p className="text-sm text-texth group-hover:text-color1">Tuyên Quang</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}