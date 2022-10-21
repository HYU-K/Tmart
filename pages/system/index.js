import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SlideSystem from '../../components/modules/slide-system';
import Link from "next/link";

export default function System({ }) {
    return (
        <div id="main" class="overflow-hidden bg-gray-100 pb-20 xs:pb-0">
            <Head>
                <title>System</title>
                <meta name="description" content="Generated by Huy" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="overflow-hidden shadow">
                <Header />
            </div>
            <div className="sm:container">
                <div className="lg:flex lg:gap-5 sm:pt-5 mb-3">
                    <div className="w-full lg:max-w-3/4 overflow-hidden mb-5 lg:mb-0">
                        <div className="w-full bg-white p-4 sm:p-5 overflow-hidden mb-2.5">
                            <div className="flex items-center justify-between gap-3 flex-wrap mb-5">
                                <h2 className="text-lg text-texth font-medium">Tìm cửa hàng bạn muốn</h2>
                                <a href="" title="" className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 25" fill="none" className="mr-1">
                                        <path d="M12 21.761C10.7369 20.6837 9.56619 19.5026 8.5 18.23C6.9 16.319 5 13.473 5 10.761C4.99858 7.92858 6.70425 5.37443 9.32107 4.29043C11.9379 3.20644 14.9501 3.80628 16.952 5.81004C18.2685 7.12064 19.0059 8.90343 19 10.761C19 13.473 17.1 16.319 15.5 18.23C14.4338 19.5026 13.2631 20.6837 12 21.761ZM12 5.76104C9.23995 5.76434 7.00331 8.00098 7 10.761C7 11.927 7.527 13.946 10.035 16.947C10.6531 17.6851 11.309 18.3907 12 19.061C12.691 18.3915 13.3472 17.6869 13.966 16.95C16.473 13.945 17 11.926 17 10.761C16.9967 8.00098 14.7601 5.76434 12 5.76104ZM12 13.761C10.3431 13.761 9 12.4179 9 10.761C9 9.10418 10.3431 7.76104 12 7.76104C13.6569 7.76104 15 9.10418 15 10.761C15 11.5567 14.6839 12.3197 14.1213 12.8824C13.5587 13.445 12.7957 13.761 12 13.761Z" fill="#00A652" />
                                    </svg>
                                    <span className="text-sm text-green-600">Xem cửa hàng gần vị trí của bạn</span>
                                </a>
                            </div>
                            <div className="grid grid-cols-1 xs:grid-cols-3 items-center justify-between gap-2.5">
                                <div className="w-full px-2 py-1 sm:px-4 sm:py-3 bg-gray-100 rounded overflow-hidden">
                                    <select name="" id="" class="bg-transparent text-texth focus:text-black text-sm w-full focus:outline-none">
                                        <option value="">Lựa chọn tỉnh thành</option>
                                        <option value="">địa điểm 1</option>
                                        <option value="">địa điểm 2</option>
                                    </select>
                                </div>
                                <div className="w-full px-2 py-1 sm:px-4 sm:py-3 bg-gray-100 rounded overflow-hidden">
                                    <select name="" id="" class="bg-transparent text-texth focus:text-black text-sm w-full focus:outline-none">
                                        <option value="">Quận/huyện</option>
                                        <option value="">địa điểm 1</option>
                                        <option value="">địa điểm 2</option>
                                    </select>
                                </div>
                                <div className="w-full px-2 py-1 sm:px-4 sm:py-3 bg-gray-100 rounded overflow-hidden">
                                    <select name="" id="" class="bg-transparent text-texth focus:text-black text-sm w-full focus:outline-none">
                                        <option value="">Xã/phường</option>
                                        <option value="">địa điểm 1</option>
                                        <option value="">địa điểm 2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="w-full bg-white p-4 sm:p-5 overflow-hidden mb-2.5">
                            <h3 className="text-texth text-sm mb-1">Có <span className="font-bold">100</span> cửa hàng T-Mart</h3>
                            <div className="">
                                <div className="grid grid-cols-1 xs:grid-cols-2 gap-x-8 overflow-hidden mb-5">
                                    <div className="flex items-start py-5 relative before:content-[attr(before)] before:bottom-0 before:left-0 before:w-[200%] before:h-[1px] before:bg-gray-200 before:absolute">
                                        <div class="mr-3 mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"></path>
                                            </svg>
                                        </div>
                                        <a href="" title="" className={`text-texth text-sm overflow-hidden ${styles.limit_text_2}`}>Số 6 Biệt thự 2, bán đảo Linh Đàm, P. Hoàng Liệt, Q. Hoàng Mai, Hà Nội</a>
                                    </div>
                                    <div className="flex items-start py-5 relative before:content-[attr(before)] before:bottom-0 before:left-0 before:w-[200%] before:h-[1px] before:bg-gray-200 before:absolute">
                                        <div class="mr-3 mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"></path>
                                            </svg>
                                        </div>
                                        <a href="" title="" className={`text-texth text-sm overflow-hidden ${styles.limit_text_2}`}>Số 6 Biệt thự 2, bán đảo Linh Đàm, P. Hoàng Liệt, Q. Hoàng Mai, Hà Nội</a>
                                    </div>
                                    <div className="flex items-start py-5 relative before:content-[attr(before)] before:bottom-0 before:left-0 before:w-[200%] before:h-[1px] before:bg-gray-200 before:absolute">
                                        <div class="mr-3 mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"></path>
                                            </svg>
                                        </div>
                                        <a href="" title="" className={`text-texth text-sm overflow-hidden ${styles.limit_text_2}`}>Số 6 Biệt thự 2, bán đảo Linh Đàm, P. Hoàng Liệt, Q. Hoàng Mai, Hà Nội</a>
                                    </div>
                                    <div className="flex items-start py-5 relative before:content-[attr(before)] before:bottom-0 before:left-0 before:w-[200%] before:h-[1px] before:bg-gray-200 before:absolute">
                                        <div class="mr-3 mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"></path>
                                            </svg>
                                        </div>
                                        <a href="" title="" className={`text-texth text-sm overflow-hidden ${styles.limit_text_2}`}>Số 6 Biệt thự 2, bán đảo Linh Đàm, P. Hoàng Liệt, Q. Hoàng Mai, Hà Nội</a>
                                    </div>
                                </div>
                                <div class="flex items-center justify-center overflow-hidden">
                                    <a href="" title="" class="flex items-center justify-center">
                                        <span class="text-[13px] mr-2 text-gray-500">Xem thêm 99 cửa hàng</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-chevron-right transform rotate-90" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full bg-white p-4 sm:p-5 overflow-hidden">
                            <h3 className="text-gray-800 text-sm mb-4">Hình ảnh tại cửa hàng</h3>
                            <div className={`${styles.store_image}`}>
                                <SlideSystem />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:max-w-1/4 overflow-hidden">
                        <div className="w-full bg-white overflow-hidden mb-2.5 p-4 sm:p-5 ">
                            <div className="grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-5">
                                <a href="" title="" className="">
                                    <div className="border border-gray-300 rounded overflow-hidden w-full h-28 flex items-center justify-center mb-2.5 p-1">
                                        <img src="./images/Frame.png" alt="" />
                                    </div>
                                    <p className="text-sm text-texth text-center">Giữ xe
                                        miễn phí</p>
                                </a>
                                <a href="" title="" className="">
                                    <div className="border border-gray-300 rounded overflow-hidden w-full h-28 flex items-center justify-center mb-2.5 p-1">
                                        <img src="./images/Frame1.png" alt="" />
                                    </div>
                                    <p className="text-sm text-texth text-center">Nhân viên
                                        nhiệt tình</p>
                                </a>
                                <a href="" title="" className="">
                                    <div className="border border-gray-300 rounded overflow-hidden w-full h-28 flex items-center justify-center mb-2.5 p-1">
                                        <img src="./images/Frame2.png" alt="" />
                                    </div>
                                    <p className="text-sm text-texth text-center">Giá rẻ như
                                        giá chợ</p>
                                </a>
                                <a href="" title="" className="">
                                    <div className="border border-gray-300 rounded overflow-hidden w-full h-28 flex items-center justify-center mb-2.5 p-1">
                                        <img src="./images/Frame3.png" alt="" />
                                    </div>
                                    <p className="text-sm text-texth text-center">Sản phẩm
                                        đa dạng</p>
                                </a>
                                <a href="" title="" className="">
                                    <div className="border border-gray-300 rounded overflow-hidden w-full h-28 flex items-center justify-center mb-2.5 p-1">
                                        <img src="./images/Frame4.png" alt="" />
                                    </div>
                                    <p className="text-sm text-texth text-center">Hàng tươi
                                        mỗi ngày</p>
                                </a>
                                <a href="" title="" className="">
                                    <div className="border border-gray-300 rounded overflow-hidden w-full h-28 flex items-center justify-center mb-2.5 p-1">
                                        <img src="./images/Frame5.png" alt="" />
                                    </div>
                                    <p className="text-sm text-texth text-center">Thanh toán
                                        dễ dàng</p>
                                </a>
                            </div>
                        </div>
                        <div className="w-full bg-white overflow-hidden mb-2.5 py-4 px-3 sm:py-5 ">
                            <h2 className="text-base xl:text-lg text-texth font-medium mb-2.5">Cơ hội làm việc tại T-Mart</h2>
                            <div className="relative transition-all w-full pt-[60%] overflow-hidden rounded">
                            <img src="./images/khuyenmai.png" alt=""
                                className="absolute top-1/2 left-1/2 overflow-hidden transform -translate-y-1/2 -translate-x-1/2 w-full h-full object-cover" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:container">
                <div className="bg-white p-4 sm:p-5 mb-7">
                    <div className="flex items-center justify-between flex-wrap">
                        <div className="flex items-center mb-5">
                            <h3 className="text-texth text-sm font-medium">Hỏi đáp về chương trình</h3>
                            <a href="" title="" className="text-blue-500 text-sm ml-6">Quy định</a>
                        </div>
                        <div className="w-full sm:max-w-[150px] mb-5">
                            <div className="w-full border border-gray-300 overflow-hidden px-2 bg-white h-9 flex">
                                <input type="text" placeholder="Tìm theo nội dung"
                                    className="w-full text-gray-300 focus:text-black text-[13px] outline-none" />
                                <button className="text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18" fill="currentColor">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M17.5893 16.5227L14.5291 13.3863L14.5307 13.3814C15.7032 11.9286 16.3426 10.1122 16.341 8.23907C16.3409 6.61419 15.8644 5.02562 14.9714 3.67313C14.0784 2.32063 12.8089 1.26458 11.3224 0.637769C9.83587 0.0109578 8.19878 -0.158631 6.61697 0.150326C5.03515 0.459284 3.57922 1.23299 2.43225 2.37417C1.28528 3.51535 0.498479 4.97304 0.17078 6.56396C-0.15692 8.15487 -0.0108875 9.80799 0.590514 11.3154C1.19192 12.8229 2.22184 14.1173 3.55077 15.0361C4.87971 15.9548 6.44833 16.4568 8.05939 16.4789C9.93479 16.4833 11.7567 15.8486 13.2294 14.6776L16.2025 17.7637C16.2886 17.8455 16.3905 17.9086 16.5019 17.949C16.6133 17.9893 16.7317 18.006 16.8497 17.9981C16.9678 17.9902 17.083 17.9577 17.188 17.9029C17.2931 17.848 17.3858 17.7719 17.4604 17.6792C18.0901 17.01 17.5893 16.5227 17.5893 16.5227ZM11.5648 13.529C10.5311 14.2437 9.31098 14.6343 8.05778 14.6516C6.36096 14.6633 4.72902 13.9948 3.52088 12.7932C2.31274 11.5915 1.62734 9.95515 1.61542 8.24394C1.61522 6.97999 1.9856 5.7442 2.67998 4.69197C3.37435 3.63974 4.36173 2.81805 5.51793 2.33022C6.67414 1.8424 7.94756 1.71022 9.17806 1.95032C10.4086 2.19041 11.5412 2.79206 12.4335 3.6796C13.3259 4.56713 13.9381 5.70094 14.1932 6.93843C14.4483 8.17592 14.3348 9.46185 13.8672 10.6345C13.3995 11.8072 12.5985 12.8142 11.5648 13.529ZM4.34065 6.77527L5.87092 7.38367L5.87075 7.3841C5.64605 7.94959 5.65513 8.58118 5.896 9.13999C6.13693 9.69894 6.59004 10.1393 7.15564 10.3642L6.54723 11.8944C5.77738 11.5883 5.12886 11.0498 4.68691 10.3617C4.57117 10.1815 4.46961 9.99107 4.38373 9.79184C4.29786 9.59262 4.22913 9.388 4.1776 9.18014C3.98079 8.38635 4.03457 7.54512 4.34065 6.77527Z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <textarea name="" id="" placeholder="Mời bạn bình luận hoặc đặt câu hỏi" className="w-full border border-gray-300 pt-2 pl-2 sm:pt-4 sm:pl-5 text-gray-300 focus:text-black focus:outline-none" rows="5"></textarea>
                    </div>
                    <div className="">
                        <div className="mb-5">
                            <div className="flex items-center mb-2">
                                <h3 className="text-sm text-texth font-medium">Đặng Thư</h3>
                                <div className="flex items-center ml-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="currentColor" className="text-yellow-300 stroke-yellow-400 ml-[2px]">
                                        <path d="M7.17829 1.09863L9.12782 5.04816L13.4874 5.68538L10.3329 8.75794L11.0773 13.0986L7.17829 11.0482L3.27924 13.0986L4.02372 8.75794L0.869141 5.68538L5.22876 5.04816L7.17829 1.09863Z" fill="" stroke="" stroke-width="1.03629" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="currentColor" className="text-yellow-300 stroke-yellow-400 ml-[2px]">
                                        <path d="M7.17829 1.09863L9.12782 5.04816L13.4874 5.68538L10.3329 8.75794L11.0773 13.0986L7.17829 11.0482L3.27924 13.0986L4.02372 8.75794L0.869141 5.68538L5.22876 5.04816L7.17829 1.09863Z" fill="" stroke="" stroke-width="1.03629" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="currentColor" className="text-yellow-300 stroke-yellow-400 ml-[2px]">
                                        <path d="M7.17829 1.09863L9.12782 5.04816L13.4874 5.68538L10.3329 8.75794L11.0773 13.0986L7.17829 11.0482L3.27924 13.0986L4.02372 8.75794L0.869141 5.68538L5.22876 5.04816L7.17829 1.09863Z" fill="" stroke="" stroke-width="1.03629" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="currentColor" className="text-yellow-300 stroke-yellow-400 ml-[2px]">
                                        <path d="M7.17829 1.09863L9.12782 5.04816L13.4874 5.68538L10.3329 8.75794L11.0773 13.0986L7.17829 11.0482L3.27924 13.0986L4.02372 8.75794L0.869141 5.68538L5.22876 5.04816L7.17829 1.09863Z" fill="" stroke="" stroke-width="1.03629" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="currentColor" className="text-gray-300 stroke-gray-300 ml-[2px]">
                                        <path d="M7.17829 1.09863L9.12782 5.04816L13.4874 5.68538L10.3329 8.75794L11.0773 13.0986L7.17829 11.0482L3.27924 13.0986L4.02372 8.75794L0.869141 5.68538L5.22876 5.04816L7.17829 1.09863Z" fill="" stroke="" stroke-width="1.03629" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex items-center ml-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                        <path d="M9.77471 17.7556L4.82471 12.8057L6.23871 11.3917L9.77621 14.9251L9.77471 14.9267L18.2597 6.44165L19.6737 7.85565L11.1887 16.3417L9.77571 17.7547L9.77471 17.7556Z" fill="#00A652" />
                                    </svg>
                                    <span className="text-sm text-blue-500">Đã mua</span>
                                </div>
                            </div>
                            <div className="text-texth text-sm mb-4">
                                <p className="">Dưa lưới chứa lượng lớn chất dinh dưỡng có khả năng chống oxy hóa như lutein, zeaxanthin, vitamin C và cryptoxanthin giúp bảo vệ các tế bào...</p>
                            </div>
                            <div className="flex flex-wrap gap-5 mb-2">
                                <img src="./images/detail1.png" alt="" className="w-24 h-24" />
                                <img src="./images/detail2.png" alt="" className="w-24 h-24" />
                                <img src="./images/detail3.png" alt="" className="w-24 h-24" />
                            </div>
                            <div className="flex items-center gap-7">
                                <a href="" title="" className="">
                                    <span className="text-blue-500 text-sm ">Thảo luận</span>
                                </a>
                                <a href="" title="" className="group flex items-center">
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 group-hover:text-blue-500 mr-1">
                                        <g clip-path="url(#clip0_1_9582)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.51552 1.24108C7.62129 1.0031 7.85729 0.849731 8.11771 0.849731C8.81681 0.849731 9.48728 1.12745 9.98161 1.62178C10.476 2.11612 10.7537 2.78659 10.7537 3.48568V5.46265H13.8212C14.1064 5.46001 14.3888 5.5191 14.649 5.63589C14.9104 5.75324 15.1433 5.92603 15.3313 6.14229C15.5194 6.35855 15.6581 6.61311 15.738 6.88833C15.8179 7.16355 15.8371 7.45286 15.7941 7.7362L14.8847 13.667C14.8846 13.6672 14.8847 13.6668 14.8847 13.667C14.8131 14.1382 14.5736 14.5682 14.2104 14.8769C13.8482 15.1848 13.3871 15.3519 12.9117 15.3475H3.5048C2.98047 15.3475 2.47762 15.1392 2.10687 14.7684C1.73612 14.3977 1.52783 13.8948 1.52783 13.3705V8.75759C1.52783 8.23326 1.73612 7.73042 2.10687 7.35966C2.47762 6.98891 2.98047 6.78062 3.5048 6.78062H5.0535L7.51552 1.24108ZM4.82277 8.0986H3.5048C3.33002 8.0986 3.16241 8.16803 3.03882 8.29161C2.91524 8.4152 2.84581 8.58281 2.84581 8.75759V13.3705C2.84581 13.5453 2.91524 13.7129 3.03882 13.8365C3.16241 13.9601 3.33002 14.0295 3.5048 14.0295H4.82277V8.0986ZM6.14075 14.0295H12.9226C13.0815 14.0313 13.2357 13.9756 13.3568 13.8727C13.4779 13.7698 13.5578 13.6265 13.5816 13.4694L14.491 7.53842C14.491 7.53833 14.491 7.53851 14.491 7.53842C14.5053 7.44405 14.4989 7.34745 14.4723 7.2558C14.4457 7.16405 14.3994 7.0792 14.3368 7.00711C14.2741 6.93503 14.1965 6.87743 14.1093 6.83831C14.0222 6.7992 13.9275 6.7795 13.832 6.78058L13.8246 6.78067L10.0947 6.78062C9.73073 6.78062 9.43569 6.48558 9.43569 6.12164V3.48568C9.43569 3.13613 9.29683 2.8009 9.04966 2.55373C8.89952 2.40359 8.71687 2.29341 8.51827 2.23005L6.14075 7.57946V14.0295Z" fill="" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_9582">
                                                <rect width="15.8157" height="15.8157" fill="white" transform="translate(0.869141 0.190796)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span className="text-gray-400 group-hover:text-blue-500 text-sm ">Thích 200</span>
                                </a>
                            </div>
                        </div>
                        <div className="p-2 xs:p-4 bg-gray-100 rounded overflow-hidden mb-3">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-6 h-6 rounded-full overflow-hidden">
                                    <img src="./images/icon/Logo-filnal.png" alt="" className="w-full h-full" />
                                </div>
                                <h3 className="text-sm text-texth font-medium">Đặng Thư</h3>
                                <div className="border border-green-600 px-1 rounded overflow-hidden">
                                    <span className="text-[13px] text-green-600">Quản trị viên</span>
                                </div>
                            </div>
                            <div className="text-texth text-sm">
                                <p className="">Dưa lưới chứa lượng lớn chất dinh dưỡng có khả năng chống oxy hóa như lutein, zeaxanthin, vitamin C và cryptoxanthin giúp bảo vệ các tế bào...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <Footer />
            </div>
        </div>
    );
}
